import React from "react";

export default function PurpleRectangle() {
  return (
    <svg
      className="h-full w-full"
    >
      <path
        fillRule="evenodd"
        stroke="rgb(0, 0, 0)"
        strokeWidth="0px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        opacity="0.8"
        fill="rgb(152, 94, 189)"
        d="M53.000,-0.000 L1761.000,-0.000 C1790.271,-0.000 1814.000,23.729 1814.000,53.000 L1814.000,295.1000 C1814.000,325.271 1790.271,349.000 1761.000,349.000 L53.000,349.000 C23.729,349.000 0.000,325.271 0.000,295.1000 L0.000,53.000 C0.000,23.729 23.729,-0.000 53.000,-0.000 Z"
      />
    </svg>
  );
}
