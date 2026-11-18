export default function RoleCards({ role }) {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="flex-1 min-w-64 bg-accent-tint rounded-md2 p-7 flex flex-col gap-2.5">
        <span className="text-sm font-bold text-accent-strong">직접 한 일</span>
        <span className="text-xl font-bold leading-snug">
          {role.mine.map((item, i) => (
            <span key={item}>
              {item}
              {i < role.mine.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>
      <div className="flex-1 min-w-64 bg-surface-card border border-line rounded-md2 p-7 flex flex-col gap-2.5">
        <span className="text-sm font-bold text-ink-muted">AI와 함께 한 일</span>
        <span className="text-xl font-bold leading-snug">
          {role.ai.map((item, i) => (
            <span key={item}>
              {item}
              {i < role.ai.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
