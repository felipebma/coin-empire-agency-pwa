"use client";

type UpdateToastProps = {
  message?: string;
};

export default function UpdateToast({
  message = "Nova versão disponível. Atualizando automaticamente...",
}: UpdateToastProps) {
  return (
    <div className="fixed bottom-20 left-1/2 z-60 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:bottom-4">
      <p className="text-sm font-semibold">Nova versão disponível</p>
      <p className="mt-1 text-xs opacity-80">{message}</p>
    </div>
  );
}