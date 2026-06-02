import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="bg-[var(--paper)] py-20">
      <div className="mx-auto w-[min(1160px,calc(100%_-_32px))]">
        <SectionHeader
          title="从清洁到造型，一次照顾到位。"
          copy="按照宠物体型、毛量、皮肤状态和性格安排护理流程，减少等待和应激。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.services.map((service) => (
            <article
              className="flex min-h-[252px] flex-col justify-between rounded-lg border border-black/10 bg-white p-6 shadow-[0_10px_34px_rgba(24,38,44,0.07)]"
              key={service.title}
            >
              <div>
                <div className={`grid size-[46px] place-items-center rounded-lg font-black ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-black leading-tight">{service.title}</h3>
                <p className="mt-2.5 text-[15px] text-[var(--muted)]">{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
