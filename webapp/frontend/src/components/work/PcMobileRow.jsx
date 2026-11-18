import BrowserFrame from "./BrowserFrame.jsx";
import PhoneFrame from "./PhoneFrame.jsx";

export default function PcMobileRow({ screenshots }) {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pb-20 flex flex-wrap lg:flex-nowrap items-start justify-center gap-12">
      <div className="flex-[2_1_560px] min-w-0 flex flex-col gap-4">
        <BrowserFrame src={screenshots.pc} alt={screenshots.pcCaption} />
        <span className="text-[15px] text-ink-muted text-center">PC</span>
      </div>
      <div className="flex-[0_1_280px] min-w-[220px] flex flex-col gap-3.5">
        <PhoneFrame src={screenshots.mobile} alt={screenshots.mobileCaption} />
        <span className="text-[15px] text-ink-muted text-center">Mobile</span>
      </div>
    </div>
  );
}
