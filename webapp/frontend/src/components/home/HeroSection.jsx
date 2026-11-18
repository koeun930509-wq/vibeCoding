export default function HeroSection() {
  return (
    <section className="min-h-[420px] bg-[url(/images/hero-bg.png)] bg-[length:100%_100%] bg-center bg-no-repeat">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-14 lg:pt-24 pb-16 flex flex-col gap-6">
        <span className="self-start text-sm font-bold text-accent bg-accent-tint px-3.5 py-1.5 rounded-full">
          Portfolio
        </span>
        <h1 className="max-w-[820px] text-[34px] sm:text-[44px] lg:text-[56px] leading-tight font-extrabold tracking-tight">
          기획부터 디자인, 구현까지
          <br />
          직접 만드는 디자이너
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-ink-soft">
          실제 데이터와 API로 동작하는 서비스를 AI와 함께 빠르게 만들고, 사용자가 쓰기 편한 화면으로 다듬습니다.
        </p>
        <p className="text-base text-ink-muted">[이름] · [이메일 / 연락처]</p>
      </div>
    </section>
  );
}
