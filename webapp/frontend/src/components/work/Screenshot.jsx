import { useState, useEffect } from "react";

export default function Screenshot({
  src,
  alt,
  aspect = "4/3",
  objectPosition = "center",
  fit = "cover",
  className = "",
  bare = false,
  width,
  height,
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center text-center bg-placeholder-fill border border-dashed border-placeholder-line text-accent-strong text-sm font-medium p-4 ${
          bare ? "aspect-[9/20]" : ""
        } ${className}`}
        style={bare ? undefined : { aspectRatio: aspect }}
      >
        {alt}
      </div>
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
