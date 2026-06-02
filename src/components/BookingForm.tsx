export function BookingForm() {
  return (
    <form className="rounded-lg bg-white p-7 text-[var(--ink)] shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
      <label className="mb-2 block text-sm font-black text-[#3f5055]" htmlFor="name">
        家长称呼
      </label>
      <input
        className="mb-3.5 min-h-[46px] w-full rounded-lg border border-black/10 bg-white px-3 text-[var(--ink)]"
        id="name"
        name="name"
        placeholder="例如：王女士"
        type="text"
      />

      <label className="mb-2 block text-sm font-black text-[#3f5055]" htmlFor="pet">
        宠物类型
      </label>
      <select
        className="mb-3.5 min-h-[46px] w-full rounded-lg border border-black/10 bg-white px-3 text-[var(--ink)]"
        id="pet"
        name="pet"
      >
        <option>小型犬</option>
        <option>中大型犬</option>
        <option>猫咪</option>
        <option>其他宠物</option>
      </select>

      <label className="mb-2 block text-sm font-black text-[#3f5055]" htmlFor="service">
        预约项目
      </label>
      <select
        className="mb-3.5 min-h-[46px] w-full rounded-lg border border-black/10 bg-white px-3 text-[var(--ink)]"
        id="service"
        name="service"
      >
        <option>基础洗护</option>
        <option>洗护造型</option>
        <option>皮毛 SPA</option>
        <option>洁牙洁耳</option>
      </select>

      <label className="mb-2 block text-sm font-black text-[#3f5055]" htmlFor="phone">
        联系方式
      </label>
      <input
        className="mb-3.5 min-h-[46px] w-full rounded-lg border border-black/10 bg-white px-3 text-[var(--ink)]"
        id="phone"
        name="phone"
        placeholder="请输入手机号"
        type="tel"
      />

      <button
        className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--mint-dark)] px-5 py-3 font-extrabold text-white shadow-[0_12px_26px_rgba(23,111,104,0.24)] transition hover:-translate-y-0.5 hover:bg-[#105c56]"
        type="button"
      >
        提交预约
      </button>
    </form>
  );
}
