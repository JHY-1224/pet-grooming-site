import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export function Reviews() {
  const reviews = site.reviews;
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-[var(--paper)] py-20" aria-label="客户评价">
      <div className="mx-auto w-[min(1160px,calc(100%_-_32px))]">
        <SectionHeader
          title="很多宠物家长，已经把这里当成固定护理点。"
          copy="从洗护体验到离店反馈，每一条评价都是我们继续做细节的理由。"
        />

        <div className="mb-8 grid gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-[0_14px_40px_rgba(24,38,44,0.08)] md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-6">
          <div>
            <div className="flex items-end gap-3">
              <strong className="text-[clamp(44px,7vw,76px)] font-black leading-none text-[var(--mint-dark)]">
                4.9
              </strong>
              <span className="pb-2 text-xl font-black text-[var(--muted)]">/ 5.0</span>
            </div>
            <div className="mt-2 text-lg text-[#d79816]" aria-label="五星评价">
              ★★★★★
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">基于近期到店回访与线上预约反馈</p>
          </div>
          <dl className="grid gap-3 sm:grid-cols-3">
            {[
              ["98%", "回访满意度"],
              ["86%", "复购预约占比"],
              ["24h", "反馈跟进时效"],
            ].map(([value, label]) => (
              <div className="rounded-lg bg-[#f8f5ef] px-4 py-3" key={label}>
                <dt className="text-2xl font-black text-[var(--ink)]">{value}</dt>
                <dd className="mt-1 text-sm text-[var(--muted)]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reviews-marquee" role="list" aria-label="客户评价轮播">
          <div className="reviews-track">
            {marqueeReviews.map((review, index) => (
              <article
                aria-hidden={index >= reviews.length ? true : undefined}
                className="min-h-[238px] w-[340px] max-w-[calc(100vw_-_48px)] shrink-0 rounded-lg border border-black/10 bg-white p-6 shadow-[0_10px_34px_rgba(24,38,44,0.07)]"
                key={`${review.customer}-${index}`}
                role="listitem"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black leading-tight">{review.title}</h3>
                    <p className="mt-1 text-sm font-bold text-[var(--mint-dark)]">
                      {review.customer} · {review.pet}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[var(--lemon)] text-lg font-black text-[var(--ink)]">
                    {review.customer.slice(0, 1)}
                  </span>
                </div>
                <div className="mt-5 text-lg text-[#d79816]" aria-label="五星评价">
                  ★★★★★
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{review.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          {reviews.slice(0, 4).map((review) => (
            <span className="h-2 w-8 rounded-full bg-[var(--mint-dark)]/20" key={review.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
