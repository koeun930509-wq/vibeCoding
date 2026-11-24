import { Link } from "react-router-dom";
import { useState } from "react";
import { StatusBar } from "../work/PhoneFrame.jsx";

/* 카드 폭에 비례하는 상태바 높이 (StatusBar 의 자연 높이 = 11.44cqw 와 같게 맞춤) */
function BrowserBar() {
  return (
    <div className="flex shrink-0 items-center gap-[2.2cqw] px-[4.5cqw] h-[11.44cqw] bg-chrome-bar border-b border-line-strong">
      <span className="w-[2.8cqw] h-[2.8cqw] rounded-full bg-chrome-dot" />
      <span className="w-[2.8cqw] h-[2.8cqw] rounded-full bg-chrome-dot" />
      <span className="w-[2.8cqw] h-[2.8cqw] rounded-full bg-chrome-dot" />
    </div>
  );
}

/* 대표 이미지 영역: 모든 카드 4:3 고정. 위에 PC(브라우저 바) 또는 모바일 앱(상태바)이 붙고, 나머지를 이미지가 채움 */
function CardMedia({ work }) {
  const [failed, setFailed] = useState(false);
  const src = work.screenshots?.pc;
  const isApp = work.slug === "skypick";
  const alt = `[${work.title} 대표 이미지]`;

  return (
    <div className="@container flex flex-col aspect-[4/3] overflow-hidden">
      {isApp ? (
        <div className="shrink-0 bg-surface-card border-b border-line-strong">
          <StatusBar />
        </div>
      ) : (
        <BrowserBar />
      )}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        {!src || failed ? (
          <div className="absolute inset-0 flex items-center justify-center text-center bg-placeholder-fill text-accent-strong text-sm font-medium p-4">
            {alt}
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] motion-reduce:transition-none"
          />
        )}
      </div>
    </div>
  );
}

export default function FeaturedCard({ work }) {
  return (
    <Link
      to={`/work/${work.slug}`}
      className="group h-full flex flex-col bg-surface-card border border-line hover:border-line-strong rounded-lg2 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-14px_rgba(27,26,34,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 overflow-hidden text-ink no-underline"
    >
      <CardMedia work={work} />
      <div className="p-7 flex flex-col gap-3.5 flex-1">
        <span className="text-xs font-bold text-accent">{work.caseLabel}</span>
        <h3 className="text-2xl font-extrabold tracking-tight">{work.title}</h3>
        <p className="text-base text-ink-soft flex-1">{work.summary}</p>
        <span className="self-start inline-flex items-center gap-1 text-sm font-bold text-white bg-accent group-hover:saturate-[1.2] transition-[filter] px-4 py-2 rounded-[10px]">
          사례 보기{" "}
          <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 motion-reduce:transition-none">→</span>
        </span>
      </div>
    </Link>
  );
}
