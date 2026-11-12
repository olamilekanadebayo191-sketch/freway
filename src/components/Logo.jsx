export default function Logo({ small = false }) {
  return (
    <svg viewBox="0 0 100 80" className="w-full h-full text-silver" fill="currentColor">
      <path
        d="M10 25 L55 25 L65 32 L88 35 L92 50 L92 65 L84 65 C84 60 76 60 76 65 L48 65 C48 60 40 60 40 65 L24 65 C24 60 16 60 16 65 L10 65 Z"
        fill="#E2E8F0"
      />
      <rect x="12" y="28" width="40" height="28" fill="#0E1B2E" rx="1" />
      <rect x="12" y="52" width="40" height="4" fill="#C81E2E" />
      {!small && (
        <>
          <circle cx="20" cy="65" r="5" fill="#475569" />
          <circle cx="44" cy="65" r="5" fill="#475569" />
          <circle cx="80" cy="65" r="5" fill="#475569" />
        </>
      )}
    </svg>
  );
}
