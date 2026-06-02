"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export function EnvironmentCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = site.environment;

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const showSlide = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <section id="environment" className="bg-[#f8f5ef] py-20" aria-label="店内环境轮播图">
      <div className="mx-auto w-[min(1160px,calc(100%_-_32px))]">
        <SectionHeader
          title="高端中式空间，分区更安静，也更专业。"
          copy="前台接待、洗护 SPA、VIP 美容护理分区独立，空间以木作、石材、玉绿色和暖光营造稳定舒适的到店体验。"
        />
        <div
          className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(24,38,44,0.14)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <article
                className="relative aspect-[16/8] min-w-full overflow-hidden bg-[#dfe8e5] max-md:aspect-[4/3] max-sm:aspect-[3/4]"
                key={slide.title}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1160px) 100vw, 1160px"
                  className="object-cover"
                />
                <div className="absolute bottom-7 left-7 max-w-[min(460px,calc(100%_-_56px))] rounded-lg bg-[#123f3b]/80 p-5 text-white backdrop-blur-xl max-sm:inset-x-4 max-sm:bottom-5 max-sm:max-w-none max-sm:p-4">
                  <h3 className="text-[22px] font-black leading-tight max-sm:text-lg">{slide.title}</h3>
                  <p className="mt-1.5 text-[15px] text-white/80">{slide.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            aria-label="上一张"
            className="absolute left-5 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-lg bg-white/90 text-3xl leading-none text-[var(--ink)] shadow-[0_12px_24px_rgba(24,38,44,0.16)] hover:bg-white max-sm:size-9 max-sm:text-2xl"
            onClick={() => showSlide(current - 1)}
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="下一张"
            className="absolute right-5 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-lg bg-white/90 text-3xl leading-none text-[var(--ink)] shadow-[0_12px_24px_rgba(24,38,44,0.16)] hover:bg-white max-sm:size-9 max-sm:text-2xl"
            onClick={() => showSlide(current + 1)}
            type="button"
          >
            ›
          </button>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2" aria-label="轮播图分页">
            {slides.map((slide, index) => (
              <button
                aria-label={`查看${slide.title}`}
                className={`h-2.5 rounded-full transition-[width,background-color] ${
                  index === current ? "w-7 bg-[var(--lemon)]" : "w-2.5 bg-white/60"
                }`}
                key={slide.title}
                onClick={() => showSlide(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
