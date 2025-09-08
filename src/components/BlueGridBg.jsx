// src/components/BlueGridBg.jsx
export default function BlueGridBg() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    >
      <defs>
        <linearGradient id="bgShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00060f" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>

        
        <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
          <path
            d="M 4 0 L 0 0 0 4"
            fill="none"
            stroke="#90caf9"
            strokeWidth="0.15"
            strokeOpacity="0.35"
          />
          
         <animateTransform attributeName="patternTransform" type="translate"
  values="-6 -6; 6 6; -6 -6" dur="12s" repeatCount="indefinite"/>
        </pattern>

        
        <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="0.25" />
          <stop offset="70%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="fadeOut">
          <rect x="0" y="0" width="100" height="100" fill="url(#fadeMask)" />
        </mask>

        
<filter id="waveWarp" x="-20%" y="-20%" width="140%" height="140%">
  <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="2" result="noise">
    <animate attributeName="baseFrequency"
             dur="12s"
             values="0.012 0.02; 0.018 0.03; 0.012 0.02"
             repeatCount="indefinite"/>
  </feTurbulence>
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G">
    <animate attributeName="scale" values="6; 10; 6" dur="12s" repeatCount="indefinite"/>
  </feDisplacementMap>
</filter>

      </defs>

     
      <rect x="0" y="0" width="100" height="100" fill="url(#bgShade)" />

      <g mask="url(#fadeOut)">
        <rect
  x="-50"
  y="42"
  width="200"
  height="120"
  fill="url(#grid)"
  filter="url(#waveWarp)"
  transform="skewX(-20) scale(1,0.40)"
  opacity="0.95"
/>
  <animate attributeName="x" values="-50; -40; -50" dur="18s" repeatCount="indefinite" />
  <animate attributeName="y" values="40; 38; 40" dur="12s" repeatCount="indefinite" />
  <ellipse cx="50" cy="42" rx="55" ry="6" fill="#90caf9" opacity="0.08" />
</g>
    </svg>
  );
}
