/* Lightweight inline icon set — single stroke style, inherits currentColor. */
const PATHS = {
  axle: (
    <>
      <path d="M3 12h18" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
    </>
  ),
  car: (
    <>
      <path d="M4 15l2-6h12l2 6" />
      <rect x="3" y="15" width="18" height="4" rx="1" />
      <circle cx="7.5" cy="19" r="1.4" />
      <circle cx="16.5" cy="19" r="1.4" />
    </>
  ),
  cylinder: (
    <>
      <rect x="6" y="3" width="8" height="13" rx="2" />
      <path d="M10 16v3M8 21h4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  wrench: (
    <path d="M15 6.5a3.5 3.5 0 0 1-4.6 4.6L4 17.5 6.5 20l6.4-6.4A3.5 3.5 0 0 0 17.5 9l-2.3 2.3-2-2L15.5 7" />
  ),
  factory: (
    <>
      <path d="M3 21V10l5 3V10l5 3V7l5 3v11z" />
      <path d="M3 21h18" />
    </>
  ),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6z" />,
  box: (
    <>
      <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
      <path d="M3 7l9 4 9-4M12 11v10" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7.5 21 12 18.5 16.5 21 15 13.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  beaker: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  chat: <path d="M21 11.5a8 8 0 0 1-11.5 7.2L3 21l2.3-6.5A8 8 0 1 1 21 11.5z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.6 2.7 15.4 0 18M12 3c-2.7 2.6-2.7 15.4 0 18" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3.5l1.5 4.5-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2L19 14.5V18a2 2 0 0 1-2.1 2A15 15 0 0 1 4 7.1 2 2 0 0 1 6 5" />
  ),
};

function Icon({ name, size = 24, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export default Icon;
