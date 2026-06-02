import { site } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-black/10 bg-[#fbfaf6]/85 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-[72px] w-[min(1160px,calc(100%_-_32px))] items-center justify-between gap-5"
        aria-label="主导航"
      >
        <a className="flex items-center gap-3 whitespace-nowrap font-black" href="#top" aria-label={`${site.brand}首页`}>
          <span className="grid size-10 place-items-center rounded-lg bg-[var(--mint-dark)] text-xl text-white shadow-[0_10px_24px_rgba(23,111,104,0.25)]">
            爪
          </span>
          <span>{site.brand}</span>
        </a>
        <div className="hidden items-center gap-6 text-[15px] font-bold text-[#425358] md:flex">
          {site.nav.map((item) => (
            <a className="border-b-2 border-transparent py-2 hover:border-[var(--mint-dark)] hover:text-[var(--mint-dark)]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--mint-dark)] px-5 py-3 font-extrabold text-white shadow-[0_12px_26px_rgba(23,111,104,0.24)] transition hover:-translate-y-0.5 hover:bg-[#105c56] hover:shadow-[0_16px_32px_rgba(23,111,104,0.28)] max-sm:min-h-10 max-sm:px-3 max-sm:text-sm"
          href="#contact"
        >
          预约
        </a>
      </nav>
    </header>
  );
}
