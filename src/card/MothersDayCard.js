import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Rose, Tulip, Daisy, Sunflower, Lily, Carnation, Hydrangea } from './FlowerComponents';
import { flowerPositions } from './flowerPositioning';
import './styles.css';

const MothersDayCard = () => {
  const [loading, setLoading] = useState(true);
  const [bloomed, setBloomed] = useState(false);
  const [showText, setShowText] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);
  const [noteAnimating, setNoteAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Initial loading animation
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Sequence of animations after loading
    const bloomTimer = setTimeout(() => {
      setBloomed(true);
    }, 2500);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 4000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(bloomTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const toggleNote = () => {
    if (noteVisible) {
      // If note is visible, start close animation
      setNoteAnimating(true);
      setIsClosing(true);

      // Wait for animation to complete before hiding
      setTimeout(() => {
        setNoteVisible(false);
        setNoteAnimating(false);
        setIsClosing(false);
      }, 300); // Match this to the CSS animation duration
    } else {
      // If note is hidden, show it first then animate
      setNoteVisible(true);
      setIsClosing(false);

      // Small delay to ensure DOM update before animation
      setTimeout(() => {
        setNoteAnimating(true);
      }, 10);

      // Clear animation class after animation completes
      setTimeout(() => {
        setNoteAnimating(false);
      }, 310);
    }
  };

  // Add flower variation factor to make them look more natural
  const getRandomOffset = () => {
    return (Math.random() - 0.5) * 3;
  };

  const getRandomScale = () => {
    return 0.8 + Math.random() * 0.4; // Scale between 0.8 and 1.2
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-4 overflow-hidden">
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-blue-100 z-50 flex flex-col items-center justify-center">
          <div className="w-20 h-20 border-t-4 border-pink-500 border-solid rounded-full animate-spin mb-4"></div>
          <div className="text-xl text-pink-600 font-bold animate-pulse">Loading Mother's Day card</div>
        </div>
      )}

      {/* Background decorative elements - more particles with animation */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`decoration-${i}`}
          className={`absolute opacity-${20 + Math.floor(Math.random() * 40)} w-${1 + Math.floor(Math.random() * 3)} h-${1 + Math.floor(Math.random() * 3)} ${Math.random() > 0.7 ? 'bg-pink-200' : Math.random() > 0.5 ? 'bg-blue-200' : 'bg-green-200'} rounded-full animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}

      {/* Display all flower types in a more natural, garden-like arrangement */}
      {/* Front row - left side */}
      <Rose bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={200} position={flowerPositions[0]} />
      <Tulip bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={240} position={flowerPositions[1]} />
      <Daisy bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={280} position={flowerPositions[2]} />
      <Sunflower bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={320} position={flowerPositions[3]} />
      <Lily bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={360} position={flowerPositions[4]} />
      <Carnation bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={400} position={flowerPositions[5]} />
      <Hydrangea bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={440} position={flowerPositions[6]} />

      {/* Front row - right side */}
      <Rose bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={480} position={flowerPositions[7]} />
      <Tulip bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={520} position={flowerPositions[8]} />
      <Daisy bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={560} position={flowerPositions[9]} />
      <Sunflower bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={600} position={flowerPositions[10]} />
      <Lily bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={640} position={flowerPositions[11]} />
      <Carnation bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={680} position={flowerPositions[12]} />
      <Hydrangea bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={720} position={flowerPositions[13]} />

      {/* Middle row */}
      <Rose bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={760} position={flowerPositions[14]} />
      <Tulip bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={800} position={flowerPositions[15]} />
      <Daisy bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={840} position={flowerPositions[16]} />
      <Sunflower bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={880} position={flowerPositions[17]} />
      <Lily bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={920} position={flowerPositions[18]} />
      <Carnation bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={960} position={flowerPositions[19]} />
      <Hydrangea bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1000} position={flowerPositions[20]} />
      <Rose bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1040} position={flowerPositions[21]} />
      <Tulip bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1080} position={flowerPositions[22]} />

      {/* Back row - fill in remaining positions */}
      <Daisy bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1120} position={flowerPositions[23]} />
      <Sunflower bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1160} position={flowerPositions[24]} />
      <Lily bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1200} position={flowerPositions[25]} />
      <Carnation bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1240} position={flowerPositions[26]} />
      <Hydrangea bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1280} position={flowerPositions[27]} />
      <Rose bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1320} position={flowerPositions[28]} />
      <Tulip bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1360} position={flowerPositions[29]} />
      <Daisy bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1400} position={flowerPositions[30]} />
      <Sunflower bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1440} position={flowerPositions[31]} />
      <Lily bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1480} position={flowerPositions[32]} />
      <Carnation bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1520} position={flowerPositions[33]} />
      <Hydrangea bloomed={bloomed} getRandomScale={getRandomScale} getRandomOffset={getRandomOffset} delay={1560} position={flowerPositions[34]} />

      {/* Main title with enhanced styling and letter-by-letter animation */}
      <div
        className="relative z-10 text-center transform transition-all duration-1000 ease-in-out mb-24 shadow-lg animate-bounce"
        style={{
          opacity: showText ? 1 : 0,
          transform: showText ? 'translateY(0)' : 'translateY(20px)',
          animationDelay: '3s'
        }}
      >
        <h1 className="text-5xl font-bold text-pink-600 tracking-wide mb-2 drop-shadow-md">
          {showText && 'HAPPY'.split('').map((letter, index) => (
            <span key={`happy-${index}`} className="letter">{letter}</span>
          ))}
        </h1>
        <h1 className="text-6xl font-bold text-pink-700 tracking-wide mb-2 drop-shadow-lg">
          {showText && "MOTHER'S DAY MOM".split('').map((letter, index) => (
            <span key={`mothers-day-${index}`} className="letter">{letter}</span>
          ))}
        </h1>
      </div>

      {/* Note button - more decorative with enhanced hover effects */}
      <button
        onClick={toggleNote}
        className="relative z-10 flex items-center justify-center p-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg shadow-md border-2 border-pink-300 hover:bg-pink-200 transition-all duration-300 ease-in-out note-button"
        style={{
          opacity: showText ? 1 : 0,
          transform: showText ? 'scale(1)' : 'scale(0)'
        }}
      >
        <Heart
          size={24}
          color="#ec4899"
          className={`mr-2 ${noteVisible ? 'animate-bounce' : 'animate-pulse'}`}
          fill="#ec4899"
        />
        <span className="text-pink-700 font-medium">
          {noteVisible ? 'Close note' : 'Click to read your note'}
        </span>
      </button>

      {/* The note content - enhanced with more decorative elements and animations */}
      {noteVisible && (
        <div
          className={`mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md border-2 border-pink-200 relative z-10 ${isClosing ? 'animate-scale-out' : noteAnimating ? 'animate-scale-in' : ''}`}
        >
          {/* Decorative corner flowers with more detail and animation */}
          <div className="absolute -top-4 -left-4 animate-pulse" style={{animationDuration: '3s'}}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="6" fill="#f9a8d4" />
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx={20 + 10 * Math.cos(i * Math.PI / 6)}
                  cy={20 + 10 * Math.sin(i * Math.PI / 6)}
                  rx="4"
                  ry="2.5"
                  fill="#fce7f3"
                  transform={`rotate(${i * 30 + 90}, ${20 + 10 * Math.cos(i * Math.PI / 6)}, ${20 + 10 * Math.sin(i * Math.PI / 6)})`}
                />
              ))}
              <circle cx="20" cy="20" r="3" fill="#fbcfe8" />
            </svg>
          </div>
          <div className="absolute -top-4 -right-4">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="6" fill="#f9a8d4" />
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx={20 + 10 * Math.cos(i * Math.PI / 6)}
                  cy={20 + 10 * Math.sin(i * Math.PI / 6)}
                  rx="4"
                  ry="2.5"
                  fill="#fce7f3"
                  transform={`rotate(${i * 30 + 90}, ${20 + 10 * Math.cos(i * Math.PI / 6)}, ${20 + 10 * Math.sin(i * Math.PI / 6)})`}
                />
              ))}
              <circle cx="20" cy="20" r="3" fill="#fbcfe8" />
            </svg>
          </div>
          <div className="absolute -bottom-4 -left-4 animate-pulse" style={{ animationDelay: "1s" }}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="6" fill="#f9a8d4" />
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx={20 + 10 * Math.cos(i * Math.PI / 6)}
                  cy={20 + 10 * Math.sin(i * Math.PI / 6)}
                  rx="4"
                  ry="2.5"
                  fill="#fce7f3"
                  transform={`rotate(${i * 30 + 90}, ${20 + 10 * Math.cos(i * Math.PI / 6)}, ${20 + 10 * Math.sin(i * Math.PI / 6)})`}
                />
              ))}
              <circle cx="20" cy="20" r="3" fill="#fbcfe8" />
            </svg>
          </div>
          <div className="absolute -bottom-4 -right-4">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="6" fill="#f9a8d4" />
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx={20 + 10 * Math.cos(i * Math.PI / 6)}
                  cy={20 + 10 * Math.sin(i * Math.PI / 6)}
                  rx="4"
                  ry="2.5"
                  fill="#fce7f3"
                  transform={`rotate(${i * 30 + 90}, ${20 + 10 * Math.cos(i * Math.PI / 6)}, ${20 + 10 * Math.sin(i * Math.PI / 6)})`}
                />
              ))}
              <circle cx="20" cy="20" r="3" fill="#fbcfe8" />
            </svg>
          </div>

          {/* Note content with enhanced decorative border */}
          <div className="border-4 border-pink-100 p-6 rounded-lg bg-gradient-to-br from-white to-pink-50 shadow-inner">
            {/* Decorative top flourish */}
            <div className="flex justify-center mb-4">
              <svg width="120" height="20" viewBox="0 0 120 20">
                <path d="M10 10 Q 60 -10 110 10" stroke="#fda4af" strokeWidth="2" fill="none" />
                <path d="M10 10 Q 60 30 110 10" stroke="#fda4af" strokeWidth="2" fill="none" />
                <circle cx="60" cy="10" r="5" fill="#f9a8d4" />
                <circle cx="30" cy="10" r="3" fill="#fda4af" />
                <circle cx="90" cy="10" r="3" fill="#fda4af" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-pink-600 mb-4">Dear Mom,</h3>
            <p className="text-gray-700 leading-relaxed">
              Thank you for always being there for me, for your endless love and support.
              You have done anything and everything just to see me and brayden smile.
              Sometimes i may not act like it, but I would do anything to see you smile in return.
              You have given me life, chances, opportunists i wouldn't have ever gotten anywhere else.
               You are the worlds greatest mom and i dont know where i would be without you.
              The world is always brighter when i get to wake up and call you, or go in the back
              to speak with you about my day or how im feeling. Greatest mom award goes to YOU!
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              I'm so grateful to have you as my mother. I love you more than words can express.
            </p>

            {/* bottom flourish */}
            <div className="flex justify-center my-4">
              <svg width="100" height="15" viewBox="0 0 100 15">
                <path d="M5 7 Q 50 -5 95 7" stroke="#fda4af" strokeWidth="1.5" fill="none" />
                <path d="M5 7 Q 50 19 95 7" stroke="#fda4af" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="7" r="3" fill="#fda4af" />
              </svg>
            </div>

            <p className="text-pink-600 font-medium mt-4 text-right">
              With all my love,
            </p>
            <p className="text-pink-600 font-medium text-right">
              Your fav first born, cayden
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MothersDayCard;