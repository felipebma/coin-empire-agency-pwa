import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Coin Empire Agency",
  description: "Agency PWA",
  manifest: "/manifest.webmanifest",
  themeColor: "#0E1A24",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
