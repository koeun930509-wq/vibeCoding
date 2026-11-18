import FeaturedCard from "./FeaturedCard.jsx";

export default function FeaturedGrid({ works }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <FeaturedCard key={work.slug} work={work} />
      ))}
    </div>
  );
}
