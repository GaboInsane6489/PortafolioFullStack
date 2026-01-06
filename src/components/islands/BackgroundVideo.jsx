import React, { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  // Track if we are in a 'fallback' mode where video fails
  const [hasError, setHasError] = useState(false);

  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Only set source when it enters viewport for the first time
          if (!videoSrc) {
            setVideoSrc("/assets/images/backgrounds/bg-video.webm");
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoSrc]);

  if (hasError) return null;

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="none"
        poster="/assets/images/backgrounds/bg-poster.webp"
        className="w-full h-full object-cover opacity-60"
        onError={() => setHasError(true)}
        aria-label="Background abstract video"
      >
        {videoSrc && <source src={videoSrc} type="video/webm" />}
      </video>
    </div>
  );
}
