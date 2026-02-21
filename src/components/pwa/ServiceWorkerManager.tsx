"use client";

import UpdateToast from "@/components/pwa/UpdateToast";
import { useEffect, useState } from "react";

export default function ServiceWorkerManager() {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    let isSubscribed = true;
    let isReloading = false;
    let updateIntervalId: number | undefined;
    let currentRegistration: ServiceWorkerRegistration | null = null;
    const notifiedWorkers = new WeakSet<ServiceWorker>();

    const triggerAutoUpdate = (worker: ServiceWorker) => {
      if (notifiedWorkers.has(worker)) {
        return;
      }

      notifiedWorkers.add(worker);
      setShowUpdatePrompt(true);
      window.setTimeout(() => {
        worker.postMessage({ type: "SKIP_WAITING" });
      }, 900);
    };

    const handleInstalled = (worker: ServiceWorker) => {
      if (!navigator.serviceWorker.controller || !isSubscribed) {
        return;
      }

      triggerAutoUpdate(worker);
    };

    const registerServiceWorker = async () => {
      const registration = await navigator.serviceWorker.register("/sw.js");
      currentRegistration = registration;

      if (registration.waiting) {
        handleInstalled(registration.waiting);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        if (!newWorker) {
          return;
        }

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed") {
            handleInstalled(newWorker);
          }
        });
      });

      updateIntervalId = window.setInterval(() => {
        registration.update().catch(() => {
          // atualização silenciosa
        });
      }, 1000 * 60 * 5);
    };

    const onControllerChange = () => {
      if (isReloading) {
        return;
      }

      isReloading = true;
      window.location.reload();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        currentRegistration?.update().catch(() => {
          // atualização silenciosa
        });
      }
    };

    registerServiceWorker().catch(() => {
      // registro silencioso
    });

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isSubscribed = false;
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      if (updateIntervalId) {
        window.clearInterval(updateIntervalId);
      }
    };
  }, []);

  if (!showUpdatePrompt) {
    return null;
  }

  return <UpdateToast />;
}
