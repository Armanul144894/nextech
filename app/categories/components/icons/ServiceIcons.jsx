import React from 'react';

// Target Icon Component
export const TargetIcon = ({ size = 24, className = "", color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="none"
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" fill="none" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

// Checkmark Icon Component
export const CheckmarkIcon = ({ size = 24, className = "", color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="white"/>
    <path 
      d="M9 12l2 2 4-4" 
      stroke="gray" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Smiley Icon Component
export const SmileyIcon = ({ size = 24, className = "", color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="white"/>
    <circle cx="8" cy="10" r="1.5" fill="gray"/>
    <circle cx="16" cy="10" r="1.5" fill="gray"/>
    <path 
      d="M8 14s1.5 2 4 2 4-2 4-2" 
      stroke="gray" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);

// Lightning Icon Component
export const LightningIcon = ({ size = 24, className = "", color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
  >
    <path 
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
      fill={color}
    />
  </svg>
);

// Icon mapping for dynamic usage
export const iconMap = {
  target: TargetIcon,
  checkmark: CheckmarkIcon,
  smiley: SmileyIcon,
  lightning: LightningIcon,
};

// Dynamic Icon Component
export const DynamicIcon = ({ type, ...props }) => {
  const IconComponent = iconMap[type];
  return <IconComponent {...props} />;
};