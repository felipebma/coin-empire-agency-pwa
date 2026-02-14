"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/announcements", label: "Avisos" },
  { href: "/ranking", label: "Ranking" },
  { href: "/events", label: "Eventos" },
  { href: "/links", label: "Links Úteis" },
  { href: "/profile", label: "Perfil" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:gap-2 md:border-r md:border-zinc-200 md:bg-white md:p-4 dark:md:border-zinc-800 dark:md:bg-zinc-950">
      <div className="mb-2">
        <p className="text-sm font-semibold">Coin Empire</p>
        <p className="text-xs opacity-70">Agency PWA</p>
      </div>

      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-lg px-3 py-2 text-sm transition",
                active
                  ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
