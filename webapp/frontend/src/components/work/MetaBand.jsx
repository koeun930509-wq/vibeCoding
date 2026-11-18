import MetaIcon from "./MetaIcon.jsx";

export default function MetaBand({ work }) {
  const items = [
    { label: "역할", value: work.role.mine.join(" · "), icon: "pencil" },
    { label: "AI와 함께", value: work.role.ai.join(" · "), icon: "sparkle" },
    { label: "제작 기간", value: work.period, icon: "calendar" },
    { label: "핵심 기술", value: work.stack.join(" · "), icon: "code" },
  ];

  return (
    <div className="w-full bg-surface-card border-t border-b border-line">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-10 lg:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-3">
            <MetaIcon name={item.icon} />
            <span className="text-sm font-bold text-ink-muted">{item.label}</span>
            <span className="text-lg font-normal">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
