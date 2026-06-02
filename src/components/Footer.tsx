import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#123f3b] py-6 text-sm text-white/70">
      <div className="mx-auto flex w-[min(1160px,calc(100%_-_32px))] flex-wrap justify-between gap-4">
        <span>© 2026 {site.brand}</span>
        <span>专业洗护 · 造型美容 · 皮毛养护</span>
      </div>
    </footer>
  );
}
