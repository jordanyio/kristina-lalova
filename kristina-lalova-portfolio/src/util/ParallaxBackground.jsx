import React, { useState, useEffect } from 'react';

const ParallaxBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgb(244, 63, 94)"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Bell Curve */}
      <div className="absolute bottom-32 right-0 w-2/3 h-1/2 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bellCurveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
              <stop offset={`${Math.max(0, scrollProgress - 10)}%`} stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
              <stop offset={`${scrollProgress}%`} stopColor="rgb(244, 63, 94)" stopOpacity="0.7" />
              <stop offset={`${Math.min(100, scrollProgress + 10)}%`} stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Main bell curve */}
          <path
            d="M 100 200 
               C 200 200, 300 50, 600 50 
               C 800 50, 850 150, 1000 150"
            fill="none"
            stroke="url(#bellCurveGradient)"
            strokeWidth="2.5"
            style={{
              strokeDasharray: '2000',
              strokeDashoffset: `${2000 - (scrollProgress * 40)}`,
              transition: 'stroke-dashoffset 0.05s ease-out'
            }}
          />
          
          {/* Additional curves with similar style */}
          <path
            d="M 200 300 
               C 300 300, 400 200, 600 200 
               C 750 200, 800 250, 900 250"
            fill="none"
            stroke="rgb(244, 63, 94)"
            strokeWidth="2"
            className="opacity-30"
            style={{
              strokeDasharray: '1000',
              strokeDashoffset: `${1000 - (scrollProgress * 45)}`,
              transition: 'stroke-dashoffset 0.04s ease-out'
            }}
          />
          
          <path
            d="M 300 350 
               C 400 350, 500 250, 700 250 
               C 800 250, 850 300, 950 300"
            fill="none"
            stroke="rgb(244, 63, 94)"
            strokeWidth="2"
            className="opacity-30"
            style={{
              strokeDasharray: '1000',
              strokeDashoffset: `${1000 - (scrollProgress * 35)}`,
              transition: 'stroke-dashoffset 0.06s ease-out'
            }}
          />
          
          <path
            d="M 250 400 
               C 350 400, 450 300, 650 300 
               C 750 300, 800 350, 900 350"
            fill="none"
            stroke="rgb(244, 63, 94)"
            strokeWidth="1.8"
            className="opacity-25"
            style={{
              strokeDasharray: '900',
              strokeDashoffset: `${900 - (scrollProgress * 42)}`,
              transition: 'stroke-dashoffset 0.03s ease-out'
            }}
          />
          
          <path
            d="M 350 450 
               C 450 450, 550 350, 750 350 
               C 850 350, 900 400, 950 400"
            fill="none"
            stroke="rgb(244, 63, 94)"
            strokeWidth="1.8"
            className="opacity-25"
            style={{
              strokeDasharray: '800',
              strokeDashoffset: `${800 - (scrollProgress * 38)}`,
              transition: 'stroke-dashoffset 0.05s ease-out'
            }}
          />
          <defs>
            <linearGradient id="bellCurveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
              <stop offset={`${Math.max(0, scrollProgress - 10)}%`} stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
              <stop offset={`${scrollProgress}%`} stopColor="rgb(244, 63, 94)" stopOpacity="0.7" />
              <stop offset={`${Math.min(100, scrollProgress + 10)}%`} stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(244, 63, 94)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Main bell curve */}
          <path
            d="M 100 300 
               C 200 300, 300 50, 600 50 
               C 800 50, 850 250, 1000 250"
            fill="none"
            stroke="url(#bellCurveGradient)"
            strokeWidth="2.5"
            style={{
              strokeDasharray: '2000',
              strokeDashoffset: `${2000 - (scrollProgress * 40)}`, // Increased from 20 to 40
              transition: 'stroke-dashoffset 0.05s ease-out' // Reduced from 0.1s to 0.05s
            }}
          />
          
          {/* Shadow curves for depth */}
          <path
            d="M 150 280 
               C 250 280, 350 70, 650 70 
               C 850 70, 900 230, 1050 230"
            fill="none"
            stroke="rgb(244, 63, 94)"
            strokeWidth="2"
            className="opacity-30"
          />
          
          <path
            d="M 50 320 
               C 150 320, 250 30, 550 30 
               C 750 30, 800 270, 950 270"
            fill="none"
            stroke="rgb(244, 63, 94)"
            strokeWidth="1.5"
            className="opacity-25"
          />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/90 pointer-events-none" />
    </div>
  );
};

export default ParallaxBackground;