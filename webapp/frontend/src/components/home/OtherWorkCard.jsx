export default function OtherWorkCard({ work }) {
  return (
    <div className="flex flex-col gap-3 bg-surface border border-line rounded-md2 p-6">
      <h3 className="text-xl font-bold">{work.title}</h3>
      <p className="text-[15px] leading-relaxed text-ink-soft flex-1">{work.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {work.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-surface-card border border-line-strong rounded-full text-[13px] font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-bold">
        {work.links?.live && (
          <a href={work.links.live} className="min-h-8 inline-flex items-center">
            Live
          </a>
        )}
        {work.links?.github && (
          <a href={work.links.github} className="min-h-8 inline-flex items-center">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
