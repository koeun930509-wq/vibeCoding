import { Link } from "react-router-dom";

export default function TopBar({ caseIndex, total }) {
  return (
    <div className="w-full border-b border-line">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-5 flex flex-wrap gap-3 justify-between items-center">
        <Link
          to="/"
          className="text-[15px] font-medium text-ink no-underline min-h-11 inline-flex items-center"
        >
          ← 포트폴리오로 돌아가기
        </Link>
        <span className="text-[15px] text-ink-muted">
          Case {String(caseIndex).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
