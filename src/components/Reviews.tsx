import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export function Reviews() {
  return (
    <section className="bg-[var(--paper)] py-20" aria-label="客户评价">
      <div className="mx-auto w-[min(1160px,calc(100%_-_32px))]">
        <SectionHeader
          title="很多宠物家长，已经把这里当成固定护理点。"
          copy="干净、耐心、透明，是我们每天最在意的三件事。"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {site.reviews.map((review) => (
            <article className="min-h-[210px] rounded-lg border border-black/10 bg-white p-6 shadow-[0_10px_34px_rgba(24,38,44,0.07)]" key={review.title}>
              <div className="text-lg text-[#d79816]" aria-label="五星评价">
                ★★★★★
              </div>
              <h3 className="mt-5 text-xl font-black leading-tight">{review.title}</h3>
              <p className="mt-2.5 text-[15px] text-[var(--muted)]">{review.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
