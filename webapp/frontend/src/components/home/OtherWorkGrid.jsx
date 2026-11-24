import OtherWorkCard from "./OtherWorkCard.jsx";
import Reveal from "../Reveal.jsx";

export default function OtherWorkGrid({ works }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {works.map((work, i) => (
        <Reveal key={work.slug} delay={(i % 3) * 100}>
          <OtherWorkCard work={work} />
        </Reveal>
      ))}
    </div>
  );
}
