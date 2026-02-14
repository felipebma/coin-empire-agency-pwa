import Header from "./Header";
import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Header fixo */}
      <Header />

      {/* Conteúdo (padding para não ficar atrás do header/nav) */}
      <main className="mx-auto w-full max-w-3xl px-4 pb-24 pt-16 md:px-6">{children}</main>

      {/* Bottom nav fixo */}
      <BottomNav />
    </div>
  );
}
