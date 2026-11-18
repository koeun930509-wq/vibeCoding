import OtherWorkCard from "./OtherWorkCard.jsx";

export default function OtherWorkGrid({ works }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {works.map((work) => (
        <OtherWorkCard key={work.slug} work={work} />
      ))}
    </div>
  );
}
