import React, { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  // Track if we are in a 'fallback' mode where video fails
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        if (video.paused && document.visibilityState === "visible") {
          await video.play();
        }
      } catch (err) {
        // Silent catch for initial attempt
        console.log("Autoplay awaited user interaction");

        // Add one-time interaction listeners if autoplay fails
        const enableAudio = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", enableAudio);
          document.removeEventListener("click", enableAudio);
          document.removeEventListener("keydown", enableAudio);
        };
        document.addEventListener("touchstart", enableAudio, { once: true });
        document.addEventListener("click", enableAudio, { once: true });
        document.addEventListener("keydown", enableAudio, { once: true });
      }
    };

    attemptPlay();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [hasError]);

  if (hasError) return null; // Or return a static image fallback

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      >
        <source src="/assets/videos/eldenring.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
