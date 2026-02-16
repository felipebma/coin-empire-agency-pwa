import Header from "./Header";
import BottomNav from "./BottomNav";
import SidebarNav from "./SidebarNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      {/* Desktop layout: sidebar + content */}
      <div className="mx-auto w-full max-w-6xl md:flex md:gap-0">
        <SidebarNav />

        {/* content */}
        <main className="w-full px-4 pb-24 pt-16 md:pb-8 md:pt-16 md:px-6">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
