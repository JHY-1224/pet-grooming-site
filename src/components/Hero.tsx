import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative grid min-h-[92vh] items-center overflow-hidden pt-[72px]">
      <Image
        src={site.hero.image}
        alt="宠物洗护店里被毛巾包裹的小狗"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center md:object-right"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(251,250,246,0.96)_0%,rgba(251,250,246,0.72)_38%,rgba(251,250,246,0.1)_68%)] max-md:bg-[linear-gradient(180deg,rgba(251,250,246,0.98)_0%,rgba(251,250,246,0.86)_52%,rgba(251,250,246,0.24)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-[72px] bg-gradient-to-b from-transparent to-[var(--paper)]" />
      <div className="relative z-[3] mx-auto w-[min(1160px,calc(100%_-_32px))] py-[70px] pb-[86px] max-md:pb-14">
        <p className="mb-5 inline-flex items-center gap-2.5 text-sm font-black uppercase text-[var(--mint-dark)] before:h-[3px] before:w-8 before:rounded-full before:bg-[var(--coral)] before:content-['']">
          {site.hero.eyebrow}
        </p>
        <h1 className="max-w-[650px] text-[clamp(42px,7vw,84px)] font-black leading-[1.02] tracking-normal">
          {site.hero.title}
        </h1>
        <p className="mt-6 max-w-[560px] text-lg text-[#3e4f54] md:text-[19px]">
          {site.hero.copy}
        </p>
        <div className="mt-8 flex flex-wrap gap-3.5 max-sm:grid">
          <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--mint-dark)] px-5 py-3 font-extrabold text-white shadow-[0_12px_26px_rgba(23,111,104,0.24)] transition hover:-translate-y-0.5 hover:bg-[#105c56] hover:shadow-[0_16px_32px_rgba(23,111,104,0.28)] max-sm:w-full" href="#contact">
            立即预约
          </a>
          <a className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 bg-white px-5 py-3 font-extrabold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--sky)] hover:shadow-[0_16px_32px_rgba(24,38,44,0.12)] max-sm:w-full" href="#pricing">
            查看套餐
          </a>
        </div>
        <div className="mt-12 grid w-[min(620px,100%)] grid-cols-3 gap-3.5 max-md:grid-cols-1">
          {site.hero.metrics.map((metric) => (
            <div className="min-h-[106px] rounded-lg border border-black/10 bg-white/75 p-4 backdrop-blur-xl" key={metric.label}>
              <strong className="block text-3xl leading-none">{metric.value}</strong>
              <span className="mt-2.5 block text-sm font-bold text-[var(--muted)]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
