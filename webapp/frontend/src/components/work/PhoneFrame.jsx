import Screenshot from "./Screenshot.jsx";

export default function PhoneFrame({ src, alt, variant = "default" }) {
  const outerRadius = variant === "skypick" ? "rounded-[32px]" : "rounded-phone";
  const aspect = variant === "skypick" ? "9/19" : undefined;
  const minHeight = variant === "skypick" ? "" : "min-h-[560px]";

  return (
    <div className={`w-full h-full ${outerRadius} overflow-hidden flex flex-col`}>
      <Screenshot src={src} alt={alt} aspect={aspect ?? "auto"} className={`h-full min-h-full ${minHeight}`} />
    </div>
  );
}
