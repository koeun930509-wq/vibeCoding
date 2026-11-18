export default function ProblemSection({ problem }) {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 lg:pt-24 flex flex-wrap md:flex-nowrap gap-8 lg:gap-20">
      <div className="flex-1 max-w-80">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-tight font-extrabold tracking-tight">문제</h2>
      </div>
      <div className="flex-[999_1_480px] min-w-0">
        <p className="text-[17px] lg:text-xl leading-relaxed text-ink-body">{problem}</p>
      </div>
    </div>
  );
}
