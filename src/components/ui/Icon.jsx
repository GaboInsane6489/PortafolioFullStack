import React from "react";
import icons from "./icons/index.js";

/**
 * Icon Component - Renders SVG icons from centralized registry
 * @param {string} name - Icon name from registry
 * @param {number} size - Icon size in pixels (default: 24)
 * @param {string} className - Additional CSS classes
 * @param {number} strokeWidth - SVG stroke width (default: 2)
 */
export default function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 2,
  ...props
}) {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      className={className}
      {...props}
    >
      {/* Single path */}
      {icon.path && <path d={icon.path} />}

      {/* Multiple paths */}
      {icon.paths && icon.paths.map((d, i) => <path key={i} d={d} />)}

      {/* Circle */}
      {icon.circle && <circle cx="12" cy="12" r="10" />}

      {/* Polyline */}
      {icon.polyline && <polyline points={icon.polyline} />}

      {/* Lines (for menu/close icons) */}
      {icon.lines &&
        icon.lines.map((d, i) => (
          <line
            key={i}
            x1={d.split(" ")[0].substring(1)}
            y1={d.split(" ")[1]}
            x2={d.split(" ")[2].substring(1)}
            y2={d.split(" ")[3]}
          />
        ))}

      {/* Rect */}
      {icon.rect && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}

      {/* Point */}
      {icon.point && <line x1="17.5" y1="6.51" x2="17.51" y2="6.5" />}
    </svg>
  );
}
