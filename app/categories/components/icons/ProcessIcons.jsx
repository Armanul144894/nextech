import React from "react";

export const SearchIcon = ({
  size = 28,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
  >
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
    <path
      d="M21 21l-4.35-4.35"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ClipboardIcon = ({
  size = 28,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
  >
    <rect
      x="8"
      y="2"
      width="8"
      height="4"
      rx="1"
      ry="1"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      stroke={color}
      strokeWidth="2"
    />
    <path d="M9 12h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M9 16h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GearIcon = ({
  size = 28,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
  >
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
    <path
      d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5l-4.24 4.24M7.76 16.24L3.52 20.48m16.96 0l-4.24-4.24M7.76 7.76L3.52 3.52"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckmarkIcon = ({
  size = 28,
  className = "",
  color = "currentColor",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="10" fill="white" />
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

export const RocketIcon = ({
  size = 28,
  className = "",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
  >
    <path
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

// Icon mapping for dynamic usage
export const processIconMap = {
  search: SearchIcon,
  clipboard: ClipboardIcon,
  gear: GearIcon,
  checkmark: CheckmarkIcon,
  rocket: RocketIcon,
};

// Dynamic Process Icon Component
export const DynamicProcessIcon = ({ type, ...props }) => {
  const IconComponent = processIconMap[type];
  return <IconComponent {...props} />;
};
