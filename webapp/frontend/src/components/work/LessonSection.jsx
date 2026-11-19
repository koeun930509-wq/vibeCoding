export default function LessonSection({ lesson }) {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 lg:pt-24">
      <div className="bg-surface-dark text-ondark rounded-xl2 p-6 lg:p-14 flex flex-wrap md:flex-nowrap gap-5 lg:gap-12">
        <div className="w-full md:w-64 md:shrink-0">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-tight font-extrabold tracking-tight">
            과정에서 배운 점
          </h2>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[17px] lg:text-xl leading-relaxed text-ondark-soft">{lesson}</p>
        </div>
      </div>
    </div>
  );
}
