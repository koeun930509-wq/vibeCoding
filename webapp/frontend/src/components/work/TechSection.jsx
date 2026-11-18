export default function TechSection({ stack }) {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 lg:pt-24 flex flex-wrap md:flex-nowrap gap-8 lg:gap-20">
      <div className="shrink-0 md:w-64">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-tight font-extrabold tracking-tight">
          사용 기술
        </h2>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap gap-2.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-surface-card border border-line-strong rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
