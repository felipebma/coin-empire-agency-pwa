import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import ServiceWorkerManager from "@/components/pwa/ServiceWorkerManager";
import StandaloneSplashGate from "@/components/pwa/StandaloneSplashGate";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Coin Empire Agency",
  description: "Agency PWA",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Coin Empire",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0E1A24",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <StandaloneSplashGate>
          <AppShell>{children}</AppShell>
        </StandaloneSplashGate>
        <ServiceWorkerManager />
      </body>
    </html>
  );
}
