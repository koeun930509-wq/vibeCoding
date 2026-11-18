import Screenshot from "./Screenshot.jsx";

export default function PhoneFrame({ src, alt, variant = "default" }) {
  const outerRadius = variant === "skypick" ? "rounded-[32px]" : "rounded-phone";
  const innerRadius = variant === "skypick" ? "rounded-[24px]" : "rounded-[28px]";
  const padding = variant === "skypick" ? "p-[9px]" : "p-2.5";
  const aspect = variant === "skypick" ? "9/19" : undefined;
  const minHeight = variant === "skypick" ? "" : "min-h-[560px]";

  return (
    <div className={`w-full h-full bg-surface-dark ${outerRadius} ${padding} flex flex-col`}>
      <div className={`flex-1 ${innerRadius} overflow-hidden ${minHeight}`}>
        <Screenshot src={src} alt={alt} aspect={aspect ?? "auto"} className="h-full min-h-full" />
      </div>
    </div>
  );
}
