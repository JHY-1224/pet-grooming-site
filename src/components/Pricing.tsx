import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#fffaf2] py-20">
      <div className="mx-auto w-[min(1160px,calc(100%_-_32px))]">
        <SectionHeader
          title="清晰价格，按需选择。"
          copy="以下为常见体型参考价，实际价格会根据毛量、打结程度和护理项目微调。"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {site.pricing.map((plan) => (
            <article
              className={`rounded-lg border bg-white p-7 shadow-[0_10px_34px_rgba(24,38,44,0.07)] ${
                plan.featured
                  ? "border-[rgba(23,111,104,0.36)] shadow-[0_22px_54px_rgba(23,111,104,0.16)]"
                  : "border-black/10"
              }`}
              key={plan.title}
            >
              <span className="inline-flex min-h-[30px] items-center rounded-lg bg-[#dff5ef] px-2.5 py-1 text-[13px] font-black text-[var(--mint-dark)]">
                {plan.tag}
              </span>
              <h3 className="mt-6 text-xl font-black leading-tight">{plan.title}</h3>
              <div className="my-5 text-[40px] font-black leading-none">
                {plan.price} <small className="text-[15px] font-bold text-[var(--muted)]">起</small>
              </div>
              <ul className="mb-6 grid gap-2.5 text-[#536469]">
                {plan.features.map((feature) => (
                  <li className="before:mr-2 before:font-black before:text-[var(--mint-dark)] before:content-['✓']" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--mint-dark)] px-5 py-3 font-extrabold text-white shadow-[0_12px_26px_rgba(23,111,104,0.24)] transition hover:-translate-y-0.5 hover:bg-[#105c56]" href="#contact">
                预约此项
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
