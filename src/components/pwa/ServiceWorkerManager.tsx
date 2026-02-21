"use client";

import { useEffect, useState } from "react";

export default function ServiceWorkerManager() {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    let isSubscribed = true;

    const handleInstalled = (worker: ServiceWorker) => {
      if (!navigator.serviceWorker.controller || !isSubscribed) {
        return;
      }

      setWaitingWorker(worker);
      setShowUpdatePrompt(true);
    };

    const registerServiceWorker = async () => {
      const registration = await navigator.serviceWorker.register("/sw.js");

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
    };

    const onControllerChange = () => {
      window.location.reload();
    };

    registerServiceWorker().catch(() => {
      // registro silencioso
    });

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    return () => {
      isSubscribed = false;
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
    };
  }, []);

  const updateApp = () => {
    if (!waitingWorker) {
      window.location.reload();
      return;
    }

    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  };

  if (!showUpdatePrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-1/2 z-60 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:bottom-4">
      <p className="text-sm font-semibold">Nova versão disponível</p>
      <p className="mt-1 text-xs opacity-80">Atualize o app para carregar os últimos ajustes.</p>
      <button
        type="button"
        onClick={updateApp}
        className="mt-3 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
      >
        Atualizar agora
      </button>
    </div>
  );
}
