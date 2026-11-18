import RoleCards from "./RoleCards.jsx";

export default function RoleSection({ role, roleSummary }) {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 lg:pt-24 flex flex-wrap md:flex-nowrap gap-8 lg:gap-20">
      <div className="shrink-0 md:w-64">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-tight font-extrabold tracking-tight">내 역할</h2>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-5">
        <RoleCards role={role} />
        <p className="text-lg leading-relaxed text-ink-soft">{roleSummary}</p>
      </div>
    </div>
  );
}
