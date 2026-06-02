type SectionHeaderProps = {
  title: string;
  copy?: string;
  inverted?: boolean;
};

export function SectionHeader({ title, copy, inverted = false }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-7">
      <h2
        className={`max-w-[680px] text-[clamp(30px,4vw,48px)] font-black leading-[1.1] tracking-normal ${
          inverted ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`max-w-[430px] text-base ${
            inverted ? "text-white/75" : "text-[var(--muted)]"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
