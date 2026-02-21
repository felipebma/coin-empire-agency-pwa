export default function OfflinePage() {
  return (
    <div className="mx-auto flex min-h-[50dvh] w-full max-w-xl flex-col items-center justify-center gap-3 px-4 text-center">
      <h1 className="text-2xl font-semibold">Você está offline</h1>
      <p className="text-sm opacity-80">
        Sem conexão no momento. Tente novamente quando a internet voltar ou navegue nas telas já
        visitadas.
      </p>
    </div>
  );
}
