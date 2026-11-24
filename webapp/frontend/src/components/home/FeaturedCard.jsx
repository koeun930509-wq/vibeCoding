import { Link } from "react-router-dom";
import Screenshot from "../work/Screenshot.jsx";

export default function FeaturedCard({ work }) {
  return (
    <Link
      to={`/work/${work.slug}`}
      className="group h-full flex flex-col bg-surface-card border border-line hover:border-line-strong rounded-lg2 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-14px_rgba(27,26,34,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 overflow-hidden text-ink no-underline"
    >
      <div className="overflow-hidden [&_img]:transition-transform [&_img]:duration-700 [&_img]:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[&_img]:scale-[1.04] motion-reduce:[&_img]:transition-none">
        <Screenshot src={work.screenshots?.pc} alt={`[${work.title} 대표 이미지]`} aspect="4/3" objectPosition="top" />
      </div>
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
