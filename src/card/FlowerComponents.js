import React from 'react';

// Rose Component
export const Rose = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale();
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Calculate random animation delays
  const breatheDelay = Math.random() * 2;
  const swayDelay = Math.random() * 3;

  return (
    <div
      className="absolute animate-sway"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        transitionDelay: `${delay}ms`,
        animationDelay: `${swayDelay}s`
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" className="animate-breathe" style={{animationDelay: `${breatheDelay}s`}}>
        {/* Outer petals */}
        <path d="M30 10C23 10 17 15 15 22C13 29 15 36 21 40C27 44 35 44 41 40C47 36 49 29 47 22C45 15 37 10 30 10Z" fill="#e11d48" />

        {/* Inner petals - layered */}
        <path d="M30 14C25 14 21 18 20 23C19 28 21 33 25 36C29 39 35 39 39 36C43 33 45 28 44 23C43 18 35 14 30 14Z" fill="#f43f5e" />
        <path d="M30 18C26 18 23 21 22 25C21 29 23 33 26 35C29 37 33 37 36 35C39 33 41 29 40 25C39 21 34 18 30 18Z" fill="#be123c" />

        {/* Center of the rose */}
        <path d="M30 22C27 22 25 24 24 27C23 30 24 33 26 34C28 35 32 35 34 34C36 33 37 30 36 27C35 24 33 22 30 22Z" fill="#881337" />

        {/* Subtle highlights and shadows for depth */}
        <path d="M26 20C24 22 23 25 24 28C25 31 28 32 31 31C33 30 34 27 33 24C32 21 29 19 26 20Z" fill="#fda4af" opacity="0.5" />
        <path d="M34 20C36 22 37 25 36 28C35 31 32 32 29 31C27 30 26 27 27 24C28 21 31 19 34 20Z" fill="#881337" opacity="0.3" />

        {/* Additional texture details */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx={30 + 8 * Math.cos(i * Math.PI / 2.5)}
            cy={30 + 8 * Math.sin(i * Math.PI / 2.5)}
            r="1"
            fill="#fda4af"
            opacity="0.7"
          />
        ))}
      </svg>
      <div className="absolute top-14 left-7 w-2 h-24 bg-green-700"></div>
      <div className="absolute top-24 left-1 w-6 h-2 bg-green-600 rounded-full transform rotate-30"></div>
      <div className="absolute top-30 left-9 w-6 h-2 bg-green-600 rounded-full transform -rotate-30"></div>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-shimmer"></div>
      <div className="absolute top-22 left-4 w-1 h-1 bg-white rounded-full opacity-70 animate-shimmer" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

// Tulip Component
export const Tulip = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale();
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Randomly select a tulip color - more variety
  const tulipColors = [
    {main: "#a855f7", light: "#d8b4fe", dark: "#7e22ce"}, // Purple
    {main: "#ec4899", light: "#fbcfe8", dark: "#be185d"}, // Pink
    {main: "#ef4444", light: "#fca5a5", dark: "#b91c1c"}, // Red
    {main: "#f59e0b", light: "#fcd34d", dark: "#b45309"}, // Orange
  ];

  const colorSet = tulipColors[Math.floor(Math.random() * tulipColors.length)];

  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      <svg width="50" height="70" viewBox="0 0 50 70">
        {/* Main tulip petals */}
        <path d="M25 5C18 5 12 12 12 20C12 28 18 35 25 35C32 35 38 28 38 20C38 12 32 5 25 5Z" fill={colorSet.main} />

        {/* Side petals */}
        <path d="M15 10C13 15 12 20 15 25C18 30 22 32 25 30C28 28 30 23 27 18C24 13 18 8 15 10Z" fill={colorSet.light} />
        <path d="M35 10C37 15 38 20 35 25C32 30 28 32 25 30C22 28 20 23 23 18C26 13 32 8 35 10Z" fill={colorSet.light} />

        {/* Central petal and inner detail */}
        <path d="M25 8C21 8 17 13 17 19C17 25 21 30 25 30C29 30 33 25 33 19C33 13 29 8 25 8Z" fill={colorSet.main} />
        <path d="M25 15C23 15 21 17 21 20C21 23 23 25 25 25C27 25 29 23 29 20C29 17 27 15 25 15Z" fill={colorSet.dark} />

        {/* Enhanced texture and shading */}
        <path d="M20 12C19 15 19 18 21 21C23 24 25 24 27 22C27 18 27 14 25 12C24 11 21 11 20 12Z" fill={colorSet.light} opacity="0.6" />

        {/* Stem and leaves */}
        <path d="M24 30L24 60" stroke="#15803d" strokeWidth="2.5" />
        <path d="M24 40C20 38 15 40 12 45" stroke="#15803d" strokeWidth="1.5" fill="#4ade80" fillOpacity="0.2" />
        <path d="M24 50C28 48 33 50 36 55" stroke="#15803d" strokeWidth="1.5" fill="#4ade80" fillOpacity="0.2" />

        {/* Enhanced leaf details */}
        <path d="M12 45C14 43 18 43 20 46" stroke="#15803d" strokeWidth="1" fill="none" />
        <path d="M36 55C34 53 30 53 28 56" stroke="#15803d" strokeWidth="1" fill="none" />
      </svg>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-14 left-15 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
    </div>
  );
};

// Daisy Component
export const Daisy = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale();
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Random petal count for variation
  const petalCount = 14 + Math.floor(Math.random() * 5); // 14-18 petals

  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* More detailed center with texture */}
        <circle cx="30" cy="30" r="8" fill="#fcd34d" />
        <circle cx="30" cy="30" r="6" fill="#fbbf24" />

        {/* Seed texture in center */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={30 + 4 * Math.cos(i * Math.PI / 6)}
            cy={30 + 4 * Math.sin(i * Math.PI / 6)}
            r="0.8"
            fill="#b45309"
          />
        ))}

        {/* White petals - more natural shape with random subtle rotation */}
        {[...Array(petalCount)].map((_, i) => {
          const rotation = (i * 360 / petalCount) + (Math.random() * 5 - 2.5);
          return (
            <g key={i} transform={`rotate(${rotation}, 30, 30)`}>
              <path
                d="M30 14C28 14 26 16 26 19C26 22 28 30 30 30C32 30 34 22 34 19C34 16 32 14 30 14Z"
                fill="white"
              />
              {/* Petal highlight and shadow for depth */}
              <path
                d="M28 17C28 18 29 20 30 20C31 20 32 18 32 17C32 16 31 15 30 15C29 15 28 16 28 17Z"
                fill="#fef9c3"
              />
              <path
                d="M28 25C28 26 29 28 30 28C31 28 32 26 32 25C32 24 31 22 30 22C29 22 28 24 28 25Z"
                fill="#e5e7eb"
                opacity="0.5"
              />
            </g>
          );
        })}

        {/* Enhanced stem and leaves */}
        <path d="M30 38L30 60" stroke="#16a34a" strokeWidth="2" />
        <path d="M30 45C26 43 22 44 20 48" stroke="#16a34a" strokeWidth="1.5" fill="#86efac" fillOpacity="0.3" />
        <path d="M30 52C34 50 38 51 40 55" stroke="#16a34a" strokeWidth="1.5" fill="#86efac" fillOpacity="0.3" />

        {/* Enhanced leaf details */}
        <path d="M20 46C22 47 24 47 26 45" stroke="#16a34a" strokeWidth="1" fill="none" />
        <path d="M40 53C38 52 36 52 34 54" stroke="#16a34a" strokeWidth="1" fill="none" />
      </svg>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-16 left-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
    </div>
  );
};

// Sunflower Component
export const Sunflower = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale();
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Random rotation for natural look
  const rotation = Math.random() * 20 - 10;

  // Random petal count for variation
  const petalCount = 22 + Math.floor(Math.random() * 6); // 22-27 petals

  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1.2s ease-out, opacity 1.2s ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70">
        {/* Brown center with texture */}
        <circle cx="35" cy="35" r="11" fill="#92400e" />
        <circle cx="35" cy="35" r="9" fill="#854d0e" />

        {/* Seeds pattern in center with richer detail */}
        {[...Array(25)].map((_, i) => {
          const radius = 2 + Math.random() * 5;
          const angle = Math.random() * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={35 + radius * Math.cos(angle)}
              cy={35 + radius * Math.sin(angle)}
              r="0.8"
              fill="#78350f"
            />
          );
        })}

        {/* More textured center */}
        <circle cx="35" cy="35" r="7" fill="#78350f" fillOpacity="0.5" />

        {/* Detailed petals with more natural variation */}
        {[...Array(petalCount)].map((_, i) => {
          const petalAngle = (i * 360 / petalCount);
          const petalLength = 18 + Math.random() * 3; // Varied lengths
          const petalWidth = 3 + Math.random() * 1.5; // Varied widths

          return (
            <g key={i} transform={`rotate(${petalAngle}, 35, 35)`}>
              <path
                d={`M35 17C33 17 ${35-petalWidth} 20 ${35-petalWidth} 25C${35-petalWidth} 30 33 ${35-petalLength} 35 ${35-petalLength}C37 ${35-petalLength} 39 30 39 25C39 20 37 17 35 17Z`}
                fill="#facc15"
              />
              {/* Petal highlight for dimension */}
              <path
                d="M34 20C34 22 34.5 25 35 25C35.5 25 36 22 36 20C36 18 35.5 17 35 17C34.5 17 34 18 34 20Z"
                fill="#fef08a"
              />

              {/* Petal shadow for dimension */}
              <path
                d="M34 30C34 32 34.5 34 35 34C35.5 34 36 32 36 30C36 28 35.5 27 35 27C34.5 27 34 28 34 30Z"
                fill="#eab308"
                opacity="0.5"
              />
            </g>
          );
        })}

        {/* Enhanced stem with texture */}
        <path d="M35 45L35 68" stroke="#16a34a" strokeWidth="3" />
        <path d="M36 45L36 68" stroke="#15803d" strokeWidth="1.5" opacity="0.6" />
        <path d="M34 45L34 68" stroke="#15803d" strokeWidth="1.5" opacity="0.6" />

        {/* Enhanced leaves with texture and color fill */}
        <path d="M35 50C31 48 25 49 22 54" stroke="#16a34a" strokeWidth="2" fill="#86efac" fillOpacity="0.3" />
        <path d="M35 58C39 56 45 57 48 62" stroke="#16a34a" strokeWidth="2" fill="#86efac" fillOpacity="0.3" />

        {/* Detailed leaf shapes with natural curves */}
        <path d="M22 54C24 52 29 52 34 55" stroke="#16a34a" strokeWidth="1.5" fill="#4ade80" fillOpacity="0.2" />
        <path d="M48 62C46 60 41 60 36 63" stroke="#16a34a" strokeWidth="1.5" fill="#4ade80" fillOpacity="0.2" />

        {/* Leaf veins for detail */}
        <path d="M29 53L24 55" stroke="#15803d" strokeWidth="0.5" opacity="0.8" />
        <path d="M43 60L46 63" stroke="#15803d" strokeWidth="0.5" opacity="0.8" />
      </svg>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-22 left-18 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-25 left-24 w-1 h-1 bg-white rounded-full opacity-70"></div>
    </div>
  );
};

// Lily Component
export const Lily = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale();
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Random rotation for natural look
  const rotation = Math.random() * 15 - 7.5;

  // Randomly select a lily color - more variety
  const lilyColors = [
    {main: "#fda4af", light: "#fecdd3", center: "#f43f5e"}, // Pink
    {main: "#c4b5fd", light: "#ddd6fe", center: "#8b5cf6"}, // Purple
    {main: "#fcd34d", light: "#fef3c7", center: "#f59e0b"}, // Yellow
    {main: "#a7f3d0", light: "#d1fae5", center: "#10b981"}, // Green
  ];

  const colorSet = lilyColors[Math.floor(Math.random() * lilyColors.length)];

  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1.2s ease-out, opacity 1.2s ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70">
        {/* Main petals with subtle variation */}
        {[...Array(6)].map((_, i) => {
          // Add slight variation to each petal
          const petalScale = 0.9 + Math.random() * 0.2;
          return (
            <g key={i} transform={`rotate(${i * 60}, 35, 35)`}>
              <path
                d={`M35 10C31 10 28 15 28 22C28 29 31 35 35 35C39 35 42 29 42 22C42 15 39 10 35 10Z`}
                transform={`scale(${petalScale})`}
                fill={colorSet.main}
              />
              <path
                d="M32 15C32 17 33 21 35 21C37 21 38 17 38 15C38 13 37 12 35 12C33 12 32 13 32 15Z"
                transform={`scale(${petalScale})`}
                fill={colorSet.light}
              />

              {/* Subtle vein texture */}
              <path
                d="M35 12L35 34"
                stroke={colorSet.main}
                strokeWidth="0.8"
                strokeOpacity="0.6"
              />
              <path
                d="M33 13L35 34"
                stroke={colorSet.main}
                strokeWidth="0.6"
                strokeOpacity="0.4"
              />
              <path
                d="M37 13L35 34"
                stroke={colorSet.main}
                strokeWidth="0.6"
                strokeOpacity="0.4"
              />
            </g>
          );
        })}

        {/* Center details with texture */}
        <circle cx="35" cy="35" r="5" fill={colorSet.center} />
        <circle cx="35" cy="35" r="3.5" fill={colorSet.main} fillOpacity="0.3" />

        {/* Stamens with varied lengths and angles */}
        {[...Array(6)].map((_, i) => {
          const stamenLength = 7 + Math.random() * 3;
          const stamenAngle = (i * 60) + (Math.random() * 10 - 5);
          return (
            <g key={`stamen-${i}`} transform={`rotate(${stamenAngle}, 35, 35)`}>
              <line
                x1="35" y1="35"
                x2="35" y2={35 - stamenLength}
                stroke={colorSet.center}
                strokeWidth="1"
              />
              <circle
                cx="35"
                cy={35 - stamenLength}
                r="2"
                fill={colorSet.center}
              />
              <circle
                cx="35"
                cy={35 - stamenLength}
                r="1"
                fill="#f8fafc"
              />
            </g>
          );
        })}

        {/* Enhanced stem with texture */}
        <path d="M35 42L35 68" stroke="#16a34a" strokeWidth="2.5" />
        <path d="M36 42L36 68" stroke="#15803d" strokeWidth="1" opacity="0.6" />

        {/* Enhanced leaves with texture and color fill */}
        <path d="M35 50C31 48 27 49 25 53" stroke="#16a34a" strokeWidth="2" fill="#4ade80" fillOpacity="0.3" />
        <path d="M35 58C39 56 43 57 45 61" stroke="#16a34a" strokeWidth="2" fill="#4ade80" fillOpacity="0.3" />

        {/* Detailed leaf veins */}
        <path d="M29 51L25 53" stroke="#15803d" strokeWidth="0.5" opacity="0.8" />
        <path d="M41 57L45 61" stroke="#15803d" strokeWidth="0.5" opacity="0.8" />
      </svg>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-14 left-17 w-1.5 h-1.5 bg-white rounded-full opacity-75"></div>
      <div className="absolute top-16 left-22 w-1 h-1 bg-white rounded-full opacity-60"></div>
    </div>
  );
};

// Carnation Component
export const Carnation = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale();
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Random rotation for natural look
  const rotation = Math.random() * 20 - 10;

  // Randomly select a carnation color - more variety
  const carnationColors = [
    {outer: "#ec4899", middle: "#db2777", inner: "#be185d", center: "#9d174d"}, // Pink
    {outer: "#f87171", middle: "#ef4444", inner: "#dc2626", center: "#b91c1c"}, // Red
    {outer: "#c084fc", middle: "#a855f7", inner: "#9333ea", center: "#7e22ce"}, // Purple
    {outer: "#fdba74", middle: "#fb923c", inner: "#f97316", center: "#ea580c"}, // Orange
  ];

  const colorSet = carnationColors[Math.floor(Math.random() * carnationColors.length)];

  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1.2s ease-out, opacity 1.2s ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      <svg width="60" height="70" viewBox="0 0 60 70">
        {/* Layers of ruffled petals with natural variation */}
        <g>
          {/* Outer layer with varying petal shapes */}
          {[...Array(12)].map((_, i) => {
            const angle = i * Math.PI / 6;
            const radiusVariation = 0.9 + Math.random() * 0.2;
            return (
              <path
                key={`outer-${i}`}
                d={`M 30 15 
                   Q ${30 + 10 * Math.cos(angle) * radiusVariation} ${15 + 5 * Math.sin(angle) * radiusVariation}, 
                     ${30 + 15 * Math.cos(angle) * radiusVariation} ${15 + 8 * Math.sin(angle) * radiusVariation} 
                   Q ${30 + 12 * Math.cos(angle + 0.2) * radiusVariation} ${25 + 3 * Math.sin(angle + 0.2) * radiusVariation}, 
                     30 30 Z`}
                fill={colorSet.outer}
              />
            );
          })}

          {/* Middle layer with varied shapes */}
          {[...Array(10)].map((_, i) => {
            const angle = i * Math.PI / 5;
            const radiusVariation = 0.9 + Math.random() * 0.2;
            return (
              <path
                key={`middle-${i}`}
                d={`M 30 18 
                   Q ${30 + 8 * Math.cos(angle) * radiusVariation} ${18 + 4 * Math.sin(angle) * radiusVariation}, 
                     ${30 + 12 * Math.cos(angle) * radiusVariation} ${18 + 6 * Math.sin(angle) * radiusVariation} 
                   Q ${30 + 10 * Math.cos(angle + 0.3) * radiusVariation} ${25 + 2 * Math.sin(angle + 0.3) * radiusVariation}, 
                     30 28 Z`}
                fill={colorSet.middle}
              />
            );
          })}

          {/* Inner layer with varied shapes */}
          {[...Array(8)].map((_, i) => {
            const angle = i * Math.PI / 4;
            const radiusVariation = 0.9 + Math.random() * 0.2;
            return (
              <path
                key={`inner-${i}`}
                d={`M 30 21 
                   Q ${30 + 6 * Math.cos(angle) * radiusVariation} ${21 + 3 * Math.sin(angle) * radiusVariation}, 
                     ${30 + 9 * Math.cos(angle) * radiusVariation} ${21 + 5 * Math.sin(angle) * radiusVariation} 
                   Q ${30 + 7 * Math.cos(angle + 0.4) * radiusVariation} ${25 + 1 * Math.sin(angle + 0.4) * radiusVariation}, 
                     30 26 Z`}
                fill={colorSet.inner}
              />
            );
          })}

          {/* Center with texture */}
          <circle cx="30" cy="28" r="3" fill={colorSet.center} />
          <circle cx="30" cy="28" r="2" fill={colorSet.inner} fillOpacity="0.5" />
          <circle cx="30" cy="28" r="1" fill={colorSet.center} fillOpacity="0.8" />
        </g>

        {/* Enhanced stem with texture */}
        <path d="M30 35L30 68" stroke="#15803d" strokeWidth="2.5" />
        <path d="M31 35L31 68" stroke="#15803d" strokeWidth="1" opacity="0.6" />

        {/* Enhanced leaves with texture and color fill */}
        <path d="M30 45C26 43 22 44 20 48" stroke="#15803d" strokeWidth="2" fill="#86efac" fillOpacity="0.3" />
        <path d="M30 55C34 53 38 54 40 58" stroke="#15803d" strokeWidth="2" fill="#86efac" fillOpacity="0.3" />

        {/* Leaf details with fill and veins */}
        <path d="M20 48C22 46 27 46 29 49" stroke="#15803d" strokeWidth="1.5" fill="#86efac" fillOpacity="0.3" />
        <path d="M40 58C38 56 33 56 31 59" stroke="#15803d" strokeWidth="1.5" fill="#86efac" fillOpacity="0.3" />

        {/* Leaf veins */}
        <path d="M25 47L20 49" stroke="#15803d" strokeWidth="0.5" opacity="0.8" />
        <path d="M35 56L40 59" stroke="#15803d" strokeWidth="0.5" opacity="0.8" />

        {/* Additional veins for more detail */}
        <path d="M23 47L22 49" stroke="#15803d" strokeWidth="0.3" opacity="0.7" />
        <path d="M24 47L23 50" stroke="#15803d" strokeWidth="0.3" opacity="0.7" />
        <path d="M26 48L25 50" stroke="#15803d" strokeWidth="0.3" opacity="0.7" />
        <path d="M37 56L38 59" stroke="#15803d" strokeWidth="0.3" opacity="0.7" />
        <path d="M36 57L37 59" stroke="#15803d" strokeWidth="0.3" opacity="0.7" />
        <path d="M34 57L35 59" stroke="#15803d" strokeWidth="0.3" opacity="0.7" />
      </svg>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-18 left-15 w-1 h-1 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-20 left-22 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
    </div>
  );
};

// Hydrangea Component
export const Hydrangea = ({ bloomed, getRandomScale, getRandomOffset, delay, position }) => {
  const scale = getRandomScale() * 0.9; // Slightly smaller to not overwhelm other flowers
  const offsetX = getRandomOffset();
  const offsetY = getRandomOffset();

  // Random rotation for natural look
  const rotation = Math.random() * 20 - 10;

  // Randomly select a hydrangea color
  const hydrangeaColors = [
    {main: "#93c5fd", light: "#bfdbfe", dark: "#3b82f6"}, // Blue
    {main: "#c4b5fd", light: "#ddd6fe", dark: "#8b5cf6"}, // Purple
    {main: "#fda4af", light: "#fecdd3", dark: "#fb7185"}, // Pink
  ];

  const colorSet = hydrangeaColors[Math.floor(Math.random() * hydrangeaColors.length)];

  // Create clusters of tiny flowers
  const createCluster = (cx, cy, size) => {
    return (
      <g key={`cluster-${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r={size} fill={colorSet.main} />
        <circle cx={cx+size/3} cy={cy-size/3} r={size*0.85} fill={colorSet.light} />
        <circle cx={cx-size/3} cy={cy+size/3} r={size*0.75} fill={colorSet.main} />
        <circle cx={cx+size/2} cy={cy+size/3} r={size*0.8} fill={colorSet.light} />
        <circle cx={cx-size/2} cy={cy-size/2} r={size*0.7} fill={colorSet.dark} opacity="0.8" />
      </g>
    );
  };

  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: bloomed ? `scale(${scale}) translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)` : 'scale(0)',
        opacity: bloomed ? 1 : 0,
        transition: 'transform 1.3s ease-out, opacity 1.3s ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70">
        {/* Hydrangea cluster with many small flowers */}
        {createCluster(35, 25, 8)}
        {createCluster(28, 20, 7)}
        {createCluster(42, 20, 7.5)}
        {createCluster(30, 30, 8)}
        {createCluster(40, 30, 7)}
        {createCluster(25, 28, 6.5)}
        {createCluster(38, 25, 6)}
        {createCluster(32, 15, 7)}
        {createCluster(45, 28, 6)}
        {createCluster(22, 20, 5.5)}
        {createCluster(27, 25, 6)}

        {/* Enhanced stem with texture */}
        <path d="M35 40L35 68" stroke="#15803d" strokeWidth="2.5" />
        <path d="M36 40L36 68" stroke="#15803d" strokeWidth="1" opacity="0.5" />

        {/* Enhanced leaves with texture and color fill */}
        <path d="M35 48C31 46 26 47 22 50" stroke="#15803d" strokeWidth="2" fill="#86efac" fillOpacity="0.3" />
        <path d="M35 56C39 54 44 55 48 58" stroke="#15803d" strokeWidth="2" fill="#86efac" fillOpacity="0.3" />

        {/* Leaf details with fill */}
        <path d="M22 50C24 48 28 48 32 51" stroke="#15803d" strokeWidth="1.5" fill="#86efac" fillOpacity="0.3" />
        <path d="M48 58C46 56 42 56 38 59" stroke="#15803d" strokeWidth="1.5" fill="#86efac" fillOpacity="0.3" />

        {/* Additional leaf details */}
        <path d="M28 50C30 49 33 50 35 51" stroke="#15803d" strokeWidth="0.7" opacity="0.8" />
        <path d="M42 57C40 56 37 57 35 58" stroke="#15803d" strokeWidth="0.7" opacity="0.8" />

        {/* Leaf texture */}
        {[...Array(5)].map((_, i) => (
          <path
            key={`vein-left-${i}`}
            d={`M${24 + i*2} ${49 + i*0.5}L${22 + i*1.5} ${51 + i*0.8}`}
            stroke="#15803d"
            strokeWidth="0.3"
            opacity="0.7"
          />
        ))}

        {[...Array(5)].map((_, i) => (
          <path
            key={`vein-right-${i}`}
            d={`M${46 - i*2} ${57 + i*0.5}L${48 - i*1.5} ${59 + i*0.8}`}
            stroke="#15803d"
            strokeWidth="0.3"
            opacity="0.7"
          />
        ))}

        {/* Subtle leaf shading for more dimension */}
        <path
          d="M28 51C30 49 32 50 34 52"
          stroke="#15803d"
          strokeWidth="0.2"
          opacity="0.5"
        />
        <path
          d="M42 57C40 56 38 57 36 59"
          stroke="#15803d"
          strokeWidth="0.2"
          opacity="0.5"
        />
      </svg>

      {/* Add dewdrops for extra life */}
      <div className="absolute top-18 left-20 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-22 left-25 w-1 h-1 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-15 left-30 w-2 h-2 bg-white rounded-full opacity-40"></div>
    </div>
  );
};