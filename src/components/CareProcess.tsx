import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export function CareProcess() {
  return (
    <section id="care" className="bg-[#eef7f4] py-20">
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_32px))] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[380px] overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(24,38,44,0.14)] lg:min-h-[560px]">
          <Image
            src={site.hero.image}
            alt="宠物洗护店内干净明亮的护理场景"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeader title="护理师全程记录，每一步都看得见。" />
          <div className="grid gap-4">
            {site.careSteps.map((step) => (
              <div className="grid grid-cols-[46px_1fr] items-start gap-4" key={step.number}>
                <div className="grid size-[46px] place-items-center rounded-lg border border-[#87d5ff] bg-[#1d9bf0] font-black text-white shadow-[0_10px_22px_rgba(29,155,240,0.24)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-1.5 text-xl font-black">{step.title}</h3>
                  <p className="text-[var(--muted)]">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
