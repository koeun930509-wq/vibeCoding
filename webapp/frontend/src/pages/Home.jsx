import HeroSection from "../components/home/HeroSection.jsx";
import FeaturedGrid from "../components/home/FeaturedGrid.jsx";
import OtherWorkGrid from "../components/home/OtherWorkGrid.jsx";
import { featuredWorks, otherWorks } from "../data/works.js";

export default function Home() {
  return (
    <div className="min-h-screen text-ink font-sans">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-surface bg-[url('/images/page-bg.png')] bg-cover bg-center bg-no-repeat"
      />
      <HeroSection />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight">대표작</h2>
          <span className="text-[15px] text-ink-muted">문제 → 내 역할 → 핵심 결정까지 정리한 사례</span>
        </div>
        <FeaturedGrid works={featuredWorks} />
      </section>

      <section className="mt-16 lg:mt-24 bg-surface-card border-t border-line">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 lg:py-24 flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[28px] font-extrabold tracking-tight">기타 작업</h2>
            <span className="text-[15px] text-ink-muted">그 밖에 만든 프로젝트</span>
          </div>
          <OtherWorkGrid works={otherWorks} />
        </div>
      </section>
    </div>
  );
}
