import { useParams, Link } from "react-router-dom";
import { getWorkBySlug, getAdjacentWorks, featuredWorks } from "../data/works.js";
import TopBar from "../components/work/TopBar.jsx";
import DetailHero from "../components/work/DetailHero.jsx";
import ScreenshotSection from "../components/work/ScreenshotSection.jsx";
import MetaBand from "../components/work/MetaBand.jsx";
import ProblemSection from "../components/work/ProblemSection.jsx";
import RoleSection from "../components/work/RoleSection.jsx";
import DecisionsSection from "../components/work/DecisionsSection.jsx";
import LessonSection from "../components/work/LessonSection.jsx";
import TechSection from "../components/work/TechSection.jsx";
import PrevNextNav from "../components/work/PrevNextNav.jsx";

export default function WorkDetail() {
  const { slug } = useParams();
  const work = getWorkBySlug(slug);

  if (!work || !work.featured) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4 p-10 text-center">
        <p className="text-ink-muted">사례를 찾을 수 없습니다.</p>
        <Link to="/" className="text-accent font-bold">
          ← 포트폴리오로 돌아가기
        </Link>
      </div>
    );
  }

  const caseIndex = featuredWorks.findIndex((w) => w.slug === slug) + 1;
  const { prev, next } = getAdjacentWorks(slug);

  return (
    <div className="min-h-screen text-ink font-sans">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-surface bg-[url('/images/page-bg.png')] bg-cover bg-center bg-no-repeat"
      />
      <TopBar caseIndex={caseIndex} total={featuredWorks.length} />
      <DetailHero work={work} />
      <ScreenshotSection work={work} />
      <MetaBand work={work} />
      <ProblemSection problem={work.problem} />
      <RoleSection role={work.role} roleSummary={work.roleSummary} />
      <DecisionsSection decisions={work.decisions} />
      <LessonSection lesson={work.lesson} />
      <TechSection stack={work.stack} />
      <PrevNextNav prev={prev} next={next} />
    </div>
  );
}
