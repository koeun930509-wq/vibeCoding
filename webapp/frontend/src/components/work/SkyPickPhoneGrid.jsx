import Screenshot from "./Screenshot.jsx";
import { StatusBar } from "./PhoneFrame.jsx";

export default function SkyPickPhoneGrid({ phones }) {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pb-20 grid grid-cols-2 gap-4 lg:grid-cols-4 items-start">
      {phones.map((phone) => (
        <div key={phone.alt} className="w-full min-w-0 flex flex-col gap-3.5">
          <div className="rounded-[24px] border border-line-strong overflow-hidden bg-surface-card">
            <StatusBar />
            <Screenshot
              src={phone.src}
              alt={phone.alt}
              width={phone.width}
              height={phone.height}
              bare
            />
          </div>
          <span className="text-center text-[15px] text-ink-muted">{phone.caption}</span>
        </div>
      ))}
    </div>
  );
}
