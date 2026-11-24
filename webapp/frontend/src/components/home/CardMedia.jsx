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

/* 카드 이미지 영역(대표작·기타 작업 공용): 모든 카드 4:3 고정. 위에 PC(브라우저 바) 또는 모바일 앱(상태바)이 붙고, 나머지를 이미지가 채움 */
export default function CardMedia({ src, alt, isApp = false }) {
  const [failed, setFailed] = useState(false);

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
