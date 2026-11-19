import { useState, useEffect } from "react";

export default function Screenshot({
  src,
  alt,
  aspect = "4/3",
  objectPosition = "center",
  fit = "cover",
  className = "",
  bare = false,
  fill = false,
  width,
  height,
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    const sizing = fill
      ? "aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0"
      : bare
        ? "aspect-[9/20]"
        : "";
    return (
      <div
        className={`flex items-center justify-center text-center bg-placeholder-fill border border-dashed border-placeholder-line text-accent-strong text-sm font-medium p-4 ${sizing} ${className}`}
        style={bare || fill ? undefined : { aspectRatio: aspect }}
      >
        {alt}
      </div>
    );
  }

  // lg 미만: 이미지 비율 그대로 / lg 이상: 부모 높이를 꽉 채우고 위쪽부터 보이게
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onError={() => setFailed(true)}
        className={`block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover ${className}`}
        style={{ objectPosition }}
      />
    );
  }

  if (bare) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onError={() => setFailed(true)}
        className={`block h-auto w-full ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full ${aspect === "auto" ? "h-auto" : "h-full"} ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      style={{ aspectRatio: aspect, objectPosition }}
    />
  );
}
