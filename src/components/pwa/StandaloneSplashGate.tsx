"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 4000;
const agencyFont = Cinzel({ subsets: ["latin"], weight: ["600", "700"] });

function isStandaloneMode() {
  if (typeof window === "undefined") return false;

  const isDisplayStandalone = window.matchMedia("(display-mode: standalone)").matches;
  const isIOSStandalone =
    "standalone" in window.navigator &&
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

  return isDisplayStandalone || isIOSStandalone;
}

function shouldShowSplashOnStart() {
  if (typeof window === "undefined") return false;

  const splashParam = new URLSearchParams(window.location.search).get("splash");

  if (splashParam === "1" || splashParam === "true") return true;
  if (splashParam === "0" || splashParam === "false") return false;

  return isStandaloneMode();
}

export default function StandaloneSplashGate({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState<boolean>(() => shouldShowSplashOnStart());

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        className="flex min-h-dvh items-center justify-center px-6"
        style={{
          backgroundColor: "var(--background)",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <Image src="/icons/icon-192x192.png" alt="Coin Empire Agency" width={112} height={112} priority />
          <p className={`${agencyFont.className} text-base font-semibold uppercase tracking-[0.12em] text-white/95`}>
            Coin Empire Agency
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
