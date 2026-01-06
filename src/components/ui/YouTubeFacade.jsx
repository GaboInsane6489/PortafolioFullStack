import React, { useState } from "react";
import Icon from "../ui/Icon.jsx";

export default function YouTubeFacade({ videoId, title, coverImage = null }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)]">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)] cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={
          coverImage || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        }
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <div className="w-20 h-20 bg-purple-600/90 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-300">
          <Icon name="play" size={40} className="ml-2" />
        </div>
      </div>
      <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-[10px] font-black uppercase rounded text-white tracking-widest">
        {title}
      </div>
    </div>
  );
}
