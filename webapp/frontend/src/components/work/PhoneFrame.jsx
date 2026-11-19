import Screenshot from "./Screenshot.jsx";

/**
 * 상태바는 부모 폭에 비례해서 커지고 작아짐 (부모에 `@container` 필요).
 * 기준: 폰 프레임 폭 280px 에서 글자 12px, 아이콘 18/16/24px → 4.29cqw = 12px @ 280px
 */
export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[1.667em] py-[0.667em] text-[4.29cqw] leading-[1.333]">
      <span>9:41</span>
      <div className="flex items-center gap-[0.5em]">
        <svg className="h-[1em] w-[1.5em]" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" />
          <rect x="10" y="3" width="3" height="9" rx="0.5" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg className="h-[1em] w-[1.333em]" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
          <path d="M8 10.5a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm0-9C10.8 1.5 13.3 2.6 15 4.4l-1.6 1.6c-1.3-1.4-3.2-2.3-5.4-2.3S3.9 4.6 2.6 6L1 4.4C2.7 2.6 5.2 1.5 8 1.5Zm0 3.2c1.6 0 3.1.6 4.2 1.7l-1.6 1.6C9.9 7.4 9 7 8 7s-1.9.4-2.6 1l-1.6-1.6C4.9 5.3 6.4 4.7 8 4.7Z" />
        </svg>
        <svg className="h-[1em] w-[2em]" viewBox="0 0 24 12" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1" />
          <rect x="2.5" y="2.5" width="16" height="7" rx="1" fill="currentColor" />
          <rect x="22" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function PhoneFrame({ src, alt }) {
  return (
    <div className="@container w-full bg-surface-card border border-line-strong rounded-lg2 overflow-hidden flex flex-col">
      <StatusBar />
      <Screenshot src={src} alt={alt} aspect="auto" fit="cover" objectPosition="top" />
    </div>
  );
}
