import HeroSection from "../components/home/HeroSection.jsx";
import FeaturedGrid from "../components/home/FeaturedGrid.jsx";
import OtherWorkGrid from "../components/home/OtherWorkGrid.jsx";
import { featuredWorks, otherWorks } from "../data/works.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-ink font-sans">
      <HeroSection />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight">대표작</h2>
          <span className="text-[15px] text-ink-muted">문제 → 내 역할 → 핵심 결정까지 정리한 사례</span>
        </div>
        <FeaturedGrid works={featuredWorks} />
      </section>

      <section className="mt-16 lg:mt-24 bg-surface-card border-t border-line">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 lg:py-24 flex flex-col gap-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[28px] font-extrabold tracking-tight">기타 작업</h2>
            <span className="text-[15px] text-ink-muted">그 밖에 만든 프로젝트</span>
          </div>
          <OtherWorkGrid works={otherWorks} />
        </div>
      </section>
    </div>
  );
}
