import Screenshot from "./Screenshot.jsx";

export default function BrowserFrame({ src, alt, minHeight = "min-h-[400px] sm:min-h-[220px]", className = "" }) {
  return (
    <div className={`w-full h-full bg-surface-card border border-line-strong rounded-md2 overflow-hidden flex flex-col ${className}`}>
      <div className="flex gap-2 px-4.5 py-3.5 bg-chrome-bar border-b border-line-strong">
        <span className="w-3 h-3 rounded-full bg-chrome-dot" />
        <span className="w-3 h-3 rounded-full bg-chrome-dot" />
        <span className="w-3 h-3 rounded-full bg-chrome-dot" />
      </div>
      <div className={`flex-1 ${minHeight}`}>
        <Screenshot src={src} alt={alt} aspect="auto" className="h-full min-h-full" />
      </div>
    </div>
  );
}
