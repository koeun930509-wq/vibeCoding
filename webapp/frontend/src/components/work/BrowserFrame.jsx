import Screenshot from "./Screenshot.jsx";

/**
 * fill=true  : lg 이상에서는 부모(모바일 프레임) 높이에 맞춰 늘어나고 이미지는 위쪽부터 보이며 아래가 잘림.
 *              lg 미만(쌓일 때)에는 이미지 원본 비율 그대로(빈 칸 없음).
 * fill=false : aspect 값 비율 그대로 표시.
 */
export default function BrowserFrame({
  src,
  alt,
  aspect = "auto",
  objectPosition = "center",
  fill = false,
  className = "",
}) {
  return (
    <div
      className={`w-full ${fill ? "lg:flex-1 lg:min-h-0" : "h-full"} bg-surface-card border border-line-strong rounded-md2 overflow-hidden flex flex-col ${className}`}
    >
      <div className="flex shrink-0 gap-2 px-4.5 py-3.5 bg-chrome-bar border-b border-line-strong">
        <span className="w-3 h-3 rounded-full bg-chrome-dot" />
        <span className="w-3 h-3 rounded-full bg-chrome-dot" />
        <span className="w-3 h-3 rounded-full bg-chrome-dot" />
      </div>
      {fill ? (
        <div className="relative lg:flex-1 lg:min-h-[400px]">
          <Screenshot src={src} alt={alt} objectPosition={objectPosition} fill />
        </div>
      ) : (
        <div className="flex-1">
          <Screenshot src={src} alt={alt} aspect={aspect} objectPosition={objectPosition} />
        </div>
      )}
    </div>
  );
}
