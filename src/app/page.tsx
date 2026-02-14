export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto w-full max-w-3xl p-4 md:p-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold md:text-3xl">Coin Empire Agency PWA</h1>
          <p className="text-sm opacity-80 md:text-base">Tailwind configurado (mobile-first) ✅</p>
        </header>

        <section className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="font-medium">Agenciado</p>
            <p className="mt-1 text-sm opacity-80">Dashboard, Avisos, Ranking, Eventos…</p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="font-medium">Admin / Suporte</p>
            <p className="mt-1 text-sm opacity-80">CRUD, Relatórios, Alerts, Push…</p>
          </div>
        </section>

        <p className="mt-6 text-xs opacity-60">
          Dica: para testar dark mode, vamos adicionar toggle em outra task. Por enquanto, você pode
          forçar no DevTools.
        </p>
      </div>
    </main>
  );
}
