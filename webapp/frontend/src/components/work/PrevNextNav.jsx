import { Link } from "react-router-dom";

export default function PrevNextNav({ prev, next }) {
  if (!prev && !next) return null;

  return (
    <div className="w-full mt-24 lg:mt-32 border-t border-line">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12 sm:py-16 flex flex-col sm:flex-row flex-wrap gap-6 justify-between items-stretch sm:items-end">
        {prev ? (
          <div className="flex flex-col gap-1 items-start">
            <span className="text-sm font-bold text-ink-muted">이전 작업</span>
            <span className="text-[28px] font-extrabold tracking-tight">{prev.title}</span>
            <Link
              to={`/work/${prev.slug}`}
              className="mt-3 w-full sm:w-auto justify-center inline-flex items-center min-h-12 px-7 bg-surface-card text-ink text-base font-bold rounded-sm2 border border-line-strong no-underline"
            >
              ← 이전 케이스 보기
            </Link>
          </div>
        ) : (
          <div />
        )}
        {next ? (
          <div className="flex flex-col gap-1 items-start sm:items-end text-left sm:text-right">
            <span className="text-sm font-bold text-ink-muted">다음 작업</span>
            <span className="text-[28px] font-extrabold tracking-tight">{next.title}</span>
            <Link
              to={`/work/${next.slug}`}
              className="mt-3 w-full sm:w-auto justify-center inline-flex items-center min-h-12 px-7 bg-accent text-white text-base font-bold rounded-sm2 no-underline"
            >
              다음 케이스 보기 →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
