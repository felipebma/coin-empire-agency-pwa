import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Coin Empire Agency",
  description: "Agency PWA",
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
