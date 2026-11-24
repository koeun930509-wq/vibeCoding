import FeaturedCard from "./FeaturedCard.jsx";
import Reveal from "../Reveal.jsx";

export default function FeaturedGrid({ works }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work, i) => (
        <Reveal key={work.slug} delay={(i % 3) * 100}>
          <FeaturedCard work={work} />
        </Reveal>
      ))}
    </div>
  );
}
