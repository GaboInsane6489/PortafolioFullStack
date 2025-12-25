import React from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

/**
 * Timeline Item Component
 * Renders a single event in the timeline
 */
const TimelineItem = ({ item, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-stretch md:items-center justify-between md:justify-normal gap-8 w-full ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Date/Period (Desktop) */}
      <div
        className={`hidden md:block w-5/12 ${isEven ? "text-right" : "text-left"}`}
      >
        <span className="text-purple-400 font-bold font-display text-lg">
          {item.date}
        </span>
      </div>

      {/* Central Axis */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-8 md:w-auto md:-translate-x-1/2 flex flex-col items-center">
        {/* Line */}
        {!isLast && (
          <div className="absolute top-8 bottom-[-2rem] w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30 md:left-1/2 md:-translate-x-1/2 left-[15px]" />
        )}

        {/* Dot */}
        <motion.div
          className="w-8 h-8 rounded-full bg-black border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 flex items-center justify-center relative md:left-0 left-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </div>

      {/* spacer for mobile layout alignment */}
      <div className="w-8 md:hidden shrink-0"></div>

      {/* Content Card */}
      <motion.div
        className="w-full md:w-5/12"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group">
          {/* Mobile Date */}
          <span className="md:hidden block text-purple-400 font-bold mb-2 text-sm">
            {item.date}
          </span>

          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
            {item.title}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 font-medium">{item.subtitle}</span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="External Link"
              >
                <Icon name="externalLink" size={14} />
              </a>
            )}
          </div>

          <div className="text-gray-400 text-sm leading-relaxed mb-4">
            {Array.isArray(item.description) ? (
              <ul className="list-none space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-purple-500 mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-purple-500 block"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{item.description}</p>
            )}
          </div>

          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-black/30 rounded text-xs text-purple-300 border border-purple-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Timeline Container
 */
export default function Timeline({ items }) {
  return (
    <div className="w-full relative flex flex-col gap-8 md:gap-12 py-10">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
