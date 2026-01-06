import React, { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  // Track if we are in a 'fallback' mode where video fails
  const [hasError, setHasError] = useState(false);

  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc("https://play.vsthemes.org/fhd/12/73012.webm");

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
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
        preload="auto"
        poster="https://wallpapercave.com/wp/wp5338729.jpg"
        className="w-full h-full object-cover opacity-60"
        onError={() => setHasError(true)}
      >
        {videoSrc && <source src={videoSrc} type="video/webm" />}
      </video>
    </div>
  );
}
