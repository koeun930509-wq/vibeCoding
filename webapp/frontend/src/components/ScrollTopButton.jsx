import { useEffect, useState } from "react";

/** 우측 하단 맨 위로 가기 버튼. 어느 정도 스크롤하면 나타나고, 누르면 부드럽게 맨 위로 이동. */
export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="맨 위로 이동"
      tabIndex={show ? 0 : -1}
      className={`fixed right-5 bottom-5 lg:right-8 lg:bottom-8 z-50 inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-accent text-white border-0 cursor-pointer shadow-[0_8px_24px_-8px_rgba(27,26,34,0.35)] transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:saturate-[1.2] motion-reduce:transition-none ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
