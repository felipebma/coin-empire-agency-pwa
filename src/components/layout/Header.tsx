"use client";

import { usePathname } from "next/navigation";

function titleFromPath(pathname: string) {
  // pathname vem tipo: "/dashboard" dentro do route group (app)
  if (pathname.startsWith("/dashboard")) return "Dashboard";
  if (pathname.startsWith("/announcements")) return "Avisos";
  if (pathname.startsWith("/ranking")) return "Ranking";
  if (pathname.startsWith("/events")) return "Eventos";
  if (pathname.startsWith("/links")) return "Links Úteis";
  if (pathname.startsWith("/profile")) return "Perfil";
  return "Coin Empire";
}

export default function Header() {
  const pathname = usePathname();
  const title = titleFromPath(pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 md:px-6">
        <div className="min-w-0">
          <p className="truncate text-base font-semibold">{title}</p>
          <p className="text-xs opacity-70">Coin Empire Agency</p>
        </div>

        {/* Placeholder de ação (ex: notificações / config) */}
        <button
          type="button"
          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          Ação
        </button>
      </div>
    </header>
  );
}
