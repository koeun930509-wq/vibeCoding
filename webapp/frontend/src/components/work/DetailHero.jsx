import Chip from "./Chip.jsx";

export default function DetailHero({ work }) {
  const isTesting = work.status === "testing";

  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-14 sm:pt-24 pb-14 flex flex-col gap-7">
      <div className="flex flex-wrap gap-2">
        {work.chips.map((chip, i) => (
          <Chip key={chip} variant={i === 0 ? "solid" : "outline"}>
            {chip}
          </Chip>
        ))}
      </div>

      <h1 className="text-[44px] sm:text-[56px] lg:text-[80px] leading-[1.05] font-extrabold tracking-tight">
        {work.title}
      </h1>

      <p className="text-lg sm:text-xl lg:text-2xl leading-snug text-ink-soft">{work.summary}</p>

      <div className="flex flex-wrap gap-3 mt-2">
        {isTesting ? (
          <span className="inline-flex items-center min-h-12 px-7 bg-[#E6E4EC] text-ink-muted text-base font-bold rounded-sm2">
            테스트 중 · 링크 준비 중
          </span>
        ) : (
          <>
            {work.links?.live && (
              <a
                href={work.links.live}
                className="inline-flex items-center min-h-12 px-7 bg-accent text-white text-base font-bold rounded-sm2 no-underline"
              >
                Live 보기
              </a>
            )}
            {work.links?.github && (
              <a
                href={work.links.github}
                className="inline-flex items-center min-h-12 px-7 bg-surface-card text-ink text-base font-bold rounded-sm2 border border-line-strong no-underline"
              >
                GitHub
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
