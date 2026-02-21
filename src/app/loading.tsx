import Image from "next/image";
import { Cinzel } from "next/font/google";

const agencyFont = Cinzel({ subsets: ["latin"], weight: ["600", "700"] });

export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-6" style={{ backgroundColor: "var(--background)" }}>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/icons/icon-192x192.png"
          alt="Coin Empire Agency"
          width={112}
          height={112}
          priority
        />
        <p className={`${agencyFont.className} text-base font-semibold uppercase tracking-[0.12em] text-white/95`}>
          Coin Empire Agency
        </p>
      </div>
    </div>
  );
}
