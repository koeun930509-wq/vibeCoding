import { useState, useEffect } from "react";

export default function Screenshot({ src, alt, aspect = "4/3", objectPosition = "center", fit = "cover", className = "" }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center text-center bg-placeholder-fill border border-dashed border-placeholder-line text-accent-strong text-sm font-medium p-4 ${className}`}
        style={{ aspectRatio: aspect }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      style={{ aspectRatio: aspect, objectPosition }}
    />
  );
}
