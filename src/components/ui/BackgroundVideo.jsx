import React, { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  // Track if we are in a 'fallback' mode where video fails
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay prevention is expected in some browsers
          });
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
  }, []);

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
        crossOrigin="anonymous"
        poster="/assets/images/projects/garcias1.webp"
        className="w-full h-full object-cover opacity-60"
        onError={() => setHasError(true)}
      >
        <source src="/assets/videos/eldenring.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
