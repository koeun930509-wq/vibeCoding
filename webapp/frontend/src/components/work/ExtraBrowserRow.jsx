import BrowserFrame from "./BrowserFrame.jsx";

export default function ExtraBrowserRow({ extra }) {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pb-20 flex flex-wrap items-stretch gap-8">
      {extra.map((item) => (
        <div key={item.caption} className="flex-1 min-w-[320px] flex flex-col gap-4">
          <BrowserFrame src={item.src} alt={item.alt} minHeight="min-h-[320px]" />
          <span className="text-[15px] font-bold text-ink-muted text-center">{item.caption}</span>
        </div>
      ))}
    </div>
  );
}
