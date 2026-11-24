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
import Reveal from "../components/Reveal.jsx";

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
    <div key={slug} className="min-h-screen bg-surface text-ink font-sans">
      <TopBar caseIndex={caseIndex} total={featuredWorks.length} />
      <DetailHero work={work} />
      <Reveal delay={200}><ScreenshotSection work={work} /></Reveal>
      <Reveal><MetaBand work={work} /></Reveal>
      <Reveal><ProblemSection problem={work.problem} /></Reveal>
      <Reveal><RoleSection role={work.role} roleSummary={work.roleSummary} /></Reveal>
      <Reveal><DecisionsSection decisions={work.decisions} /></Reveal>
      <Reveal><LessonSection lesson={work.lesson} /></Reveal>
      <Reveal><TechSection stack={work.stack} /></Reveal>
      <Reveal><PrevNextNav prev={prev} next={next} /></Reveal>
    </div>
  );
}
