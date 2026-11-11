import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="#inicio" className="group inline-flex items-center gap-3.5 leading-none" aria-label="Forja 12 Academia - início">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="size-11 shrink-0 overflow-visible">
        <path d="M24 2 44 12v24L24 46 4 36V12L24 2Z" fill="currentColor" className="text-primary" />
        <path d="m13.5 16.5 10.8-5.4h11.4l-4.4 5.4H25l-2.5 4h7.1l-4.3 5.3h-6.2L14 34H9l4.5-17.5Z" fill="white" />
        <path d="M27 29.2h7.1l-2.4 3.2h-7.2l2.5-3.2Zm4.7-6.1H39l-2.5 3.2h-7.3l2.5-3.2Z" fill="#0a0c22" />
      </svg>
      <span className="flex flex-col">
        <span className="font-display text-[1.15rem] font-black tracking-[.075em] text-foreground">FORJA 12</span>
        <span className="mt-1 flex items-center gap-2 text-[.57rem] font-bold tracking-[.31em] text-muted-foreground">
          <span className="h-px w-4 bg-primary" />ACADEMIA
        </span>
      </span>
    </Link>
  );
}
