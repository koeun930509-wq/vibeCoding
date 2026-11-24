import { useEffect, useRef } from "react";

/**
 * 페이지 전체 배경. 스크롤하면 콘텐츠보다 천천히(약 12vh 범위) 움직여서 깊이감을 준다.
 * 이미지 영역을 위아래로 15vh씩 크게 잡아서 움직여도 가장자리가 비지 않는다.
 * 안쪽 레이어는 확대 + 투명도 루프(bg-breathe)로 숨 쉬듯 움직인다.
 */
export default function ParallaxBg() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      el.style.transform = `translate3d(0, ${(-p * 12).toFixed(3)}vh, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 -top-[15vh] -bottom-[15vh] -z-10 bg-surface will-change-transform"
    >
      <div className="absolute inset-0 animate-bg-breathe motion-reduce:animate-none bg-[url('/images/page-bg.png')] bg-cover bg-center bg-no-repeat will-change-[transform,opacity]" />
    </div>
  );
}
