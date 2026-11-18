import { Link } from "react-router-dom";
import Screenshot from "../work/Screenshot.jsx";

export default function FeaturedCard({ work }) {
  return (
    <Link
      to={`/work/${work.slug}`}
      className="flex flex-col bg-surface-card border border-line hover:border-line-strong transition-colors rounded-lg2 overflow-hidden text-ink no-underline"
    >
      <Screenshot src={work.screenshots?.pc} alt={`[${work.title} 대표 이미지]`} aspect="4/3" objectPosition="top" />
      <div className="p-7 flex flex-col gap-3.5 flex-1">
        <span className="text-xs font-bold text-accent">{work.caseLabel}</span>
        <h3 className="text-2xl font-extrabold tracking-tight">{work.title}</h3>
        <p className="text-base text-ink-soft flex-1">{work.summary}</p>
        <span className="text-sm font-bold text-accent">사례 보기 →</span>
      </div>
    </Link>
  );
}
