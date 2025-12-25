import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BackgroundVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Logic to determine visibility could go here if we wanted complex intersection
    // logic, but CSS z-index stacking is often more performant and robust.
    // However, since we need it visible *only* in Hero, Projects, Certificates,
    // we can either:
    // 1. Make those sections transparent and others opaque (CSS).
    // 2. Track scroll position (Js).
    //
    // Given the request "while visiting all portfolio", let's stick to the CSS approach
    // as it's cleaner. The video will be fixed at z-0.
    // Hero, Projects, Certificates -> bg-transparent/bg-black/50
    // About, Experience, Contact -> bg-black
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/60 z-10" />{" "}
      {/* Overlay for text readability */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60"
      >
        <source src="/assets/videos/eldenring.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
