import React from 'react';

// A cute watercolor-style cherry SVG
export const CherryIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stems */}
    <path d="M50 20 C 50 20, 35 50, 30 55" stroke="#6B8E23" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 20 C 50 20, 65 50, 70 55" stroke="#6B8E23" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 20 C 50 15, 55 10, 50 5" stroke="#6B8E23" strokeWidth="3" strokeLinecap="round" />
    
    {/* Cherries */}
    <circle cx="30" cy="65" r="15" fill="#FF5A5F" />
    <circle cx="25" cy="62" r="4" fill="white" fillOpacity="0.4" /> {/* Shine */}
    
    <circle cx="70" cy="65" r="15" fill="#FF5A5F" />
    <circle cx="65" cy="62" r="4" fill="white" fillOpacity="0.4" /> {/* Shine */}
  </svg>
);

// A cute bow SVG
export const BowIcon = ({ className = "w-12 h-12", color="#FFC2C7" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 40 C 30 20, 10 20, 10 40 C 10 60, 40 50, 50 40" fill={color} stroke="#E57373" strokeWidth="1" />
    <path d="M50 40 C 70 20, 90 20, 90 40 C 90 60, 60 50, 50 40" fill={color} stroke="#E57373" strokeWidth="1" />
    <path d="M45 40 L 30 70 L 45 60 L 50 40" fill={color} stroke="#E57373" strokeWidth="1" />
    <path d="M55 40 L 70 70 L 55 60 L 50 40" fill={color} stroke="#E57373" strokeWidth="1" />
    <circle cx="50" cy="40" r="5" fill="#FF5A5F" />
  </svg>
);