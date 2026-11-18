import PhoneFrame from "./PhoneFrame.jsx";

export default function SkyPickPhoneGrid({ phones }) {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pb-20 grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
      {phones.map((phone) => (
        <div key={phone.alt} className="max-w-64 mx-auto w-full flex flex-col gap-3.5">
          <PhoneFrame src={phone.src} alt={phone.alt} variant="skypick" />
          <span className="text-[15px] font-bold text-ink-muted text-center">{phone.caption}</span>
        </div>
      ))}
    </div>
  );
}
