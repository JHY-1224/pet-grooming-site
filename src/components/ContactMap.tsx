import Image from "next/image";
import { site } from "@/data/site";

export function ContactMap() {
  const { contact } = site;

  return (
    <div>
      <h2 className="mb-5 text-[clamp(30px,4vw,50px)] font-black leading-[1.12]">
        {contact.title}
      </h2>
      <p className="max-w-[590px] text-[17px] text-white/75">{contact.copy}</p>
      <div className="mt-8 grid gap-3 font-bold text-white/90">
        <span>{contact.hours}</span>
        <span>门店地址：{contact.address}</span>
        <span>{contact.phone}</span>
      </div>
      <div className="relative mt-7 min-h-[300px] overflow-hidden rounded-lg border border-white/25 bg-[#e9f4ec] shadow-[0_24px_58px_rgba(0,0,0,0.16)] max-sm:min-h-[260px]">
        <Image
          src={contact.mapImage}
          alt={`可爱清新的宠物店风格地图，标记${contact.address}`}
          fill
          sizes="(max-width: 768px) 100vw, 620px"
          className="object-cover"
        />
        <div className="absolute left-1/2 top-[45%] grid -translate-x-1/2 -translate-y-full justify-items-center gap-2" aria-hidden="true">
          <div className="grid size-[58px] rotate-[-45deg] place-items-center rounded-[50%_50%_50%_8px] border-4 border-white bg-[var(--coral)] text-white shadow-[0_14px_26px_rgba(24,38,44,0.24)]">
            <span className="rotate-45 text-[26px] font-black">爪</span>
          </div>
          <div className="w-max max-w-[min(360px,calc(100vw_-_60px))] rounded-lg bg-white/95 px-3.5 py-3 text-center text-[var(--ink)] shadow-[0_14px_34px_rgba(24,38,44,0.18)]">
            <strong className="block text-base leading-tight text-[var(--mint-dark)]">
              {site.brand}
            </strong>
            <span className="mt-1 block text-[13px] leading-snug text-[#536469]">
              {contact.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
