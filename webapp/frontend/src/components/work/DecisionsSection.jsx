import DecisionCard from "./DecisionCard.jsx";

export default function DecisionsSection({ decisions }) {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 lg:pt-24 flex flex-col gap-10">
      <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-tight font-extrabold tracking-tight">
        핵심 결정
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {decisions.map((d, i) => (
          <DecisionCard key={d.title} index={i + 1} title={d.title} body={d.body} />
        ))}
      </div>
    </div>
  );
}
