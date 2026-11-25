type SpinnerProps = {
  className?: string;
};

export default function Spinner({ className = "w-12 h-12" }: SpinnerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      role="status"
      aria-label="Loading"
    >
      <defs>
        <clipPath id="coldchain-spinner-clip">
          <circle r="85" cx="100" cy="100" />
        </clipPath>
      </defs>

      {/* Outer ring */}
      <circle
        r="85"
        cx="100"
        cy="100"
        fill="none"
        stroke="#005CFF"
        strokeWidth="15"
      />

      {/* Clipped inner fill + discrete 180deg flip */}
      <g clipPath="url(#coldchain-spinner-clip)">
        <g>
          <rect x="15" y="185" width="170" height="0" fill="#005CFF">
            <animate
              attributeName="y"
              values="185;15;185"
              keySplines="0 0.5 0.5 1; 0 0.5 0.5 1"
              calcMode="spline"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              values="0;170;0"
              keySplines="0 0.5 0.5 1; 0 0.5 0.5 1"
              calcMode="spline"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>

          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 100 100; 0 100 100; 180 100 100; 180 100 100"
            keyTimes="0; 0.5; 0.5; 1"
            calcMode="discrete"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  );
}