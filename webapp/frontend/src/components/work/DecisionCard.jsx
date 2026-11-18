export default function DecisionCard({ index, title, body }) {
  return (
    <div className="bg-surface-card border border-line rounded-lg2 p-8 flex flex-col gap-4">
      <span className="text-[44px] font-extrabold text-accent leading-none">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-xl font-bold leading-snug">{title}</h3>
      <p className="text-base leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
