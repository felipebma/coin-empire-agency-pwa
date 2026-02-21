"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  href: string;
  label: string;
};

const items: Item[] = [
  { href: "/dashboard", label: "Home" },
  { href: "/announcements", label: "Avisos" },
  { href: "/ranking", label: "Ranking" },
  { href: "/events", label: "Eventos" },
  { href: "/profile", label: "Perfil" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/90 pb-[env(safe-area-inset-bottom)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 md:hidden">
      <div className="mx-auto grid h-16 w-full max-w-3xl grid-cols-5 px-2">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs",
                active
                  ? "font-semibold text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
              ].join(" ")}
            >
              {/* ícone depois (MVP sem dependências) */}
              <span
                className={[
                  "h-1 w-6 rounded-full",
                  active ? "bg-zinc-900 dark:bg-zinc-100" : "bg-transparent",
                ].join(" ")}
              />
              <span className="leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
