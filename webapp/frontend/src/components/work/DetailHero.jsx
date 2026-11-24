import Chip from "./Chip.jsx";

function LiveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export default function DetailHero({ work }) {
  const isTesting = work.status === "testing";

  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-14 sm:pt-24 pb-14 flex flex-col gap-7">
      <div className="animate-fade-up motion-reduce:animate-none flex flex-wrap gap-2">
        {work.chips.map((chip, i) => (
          <Chip key={chip} variant={i === 0 ? "solid" : "outline"}>
            {chip}
          </Chip>
        ))}
      </div>

      <h1 style={{ animationDelay: "120ms" }} className="animate-fade-up motion-reduce:animate-none text-[44px] sm:text-[56px] lg:text-[80px] leading-[1.05] font-extrabold tracking-tight">
        {work.title}
      </h1>

      <p style={{ animationDelay: "240ms" }} className="animate-fade-up motion-reduce:animate-none text-lg sm:text-xl lg:text-2xl leading-snug text-ink-soft">{work.summary}</p>

      <div style={{ animationDelay: "360ms" }} className="animate-fade-up motion-reduce:animate-none flex flex-wrap gap-3 mt-2">
        {isTesting && (
          <span className="inline-flex items-center min-h-[38px] px-5 bg-[#E6E4EC] text-ink-muted text-sm font-bold rounded-sm2">
            테스트 중 · 링크 준비 중
          </span>
        )}
        <>
            {work.links?.live && (
              <a
                href={work.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[38px] px-5 bg-accent text-white text-sm font-bold rounded-sm2 no-underline"
              >
                <LiveIcon />
                Live 보기
              </a>
            )}
            {work.links?.github && (
              <a
                href={work.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[38px] px-5 bg-surface-card text-ink text-sm font-bold rounded-sm2 border border-line-strong no-underline"
              >
                <GithubIcon />
                GitHub
              </a>
            )}
        </>
      </div>
    </div>
  );
}
