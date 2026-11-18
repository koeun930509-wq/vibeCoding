import Screenshot from "./Screenshot.jsx";

export default function SkyPickPhoneGrid({ phones }) {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pb-20 grid grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {phones.map((phone) => (
        <div key={phone.alt} className="mx-auto w-full max-w-[256px] flex flex-col gap-3.5">
          <Screenshot
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            bare
          />
          <span className="text-center text-[15px] font-bold text-ink-muted">{phone.caption}</span>
        </div>
      ))}
    </div>
  );
}
