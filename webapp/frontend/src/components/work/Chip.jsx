export default function Chip({ children, variant = "solid" }) {
  if (variant === "outline") {
    return (
      <span className="inline-flex items-center text-sm font-bold text-ink bg-surface-card border border-line-strong px-3.5 py-1.5 rounded-full">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center text-sm font-bold text-accent bg-accent-tint px-3.5 py-1.5 rounded-full">
      {children}
    </span>
  );
}
