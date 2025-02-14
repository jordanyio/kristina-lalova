'use client'

import React, { useState, useEffect, useCallback } from 'react';

export default function FinanceBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  
  const lerp = (start, end, factor) => start + (end - start) * factor;
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setTarget({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      setMousePosition(prev => ({
        x: lerp(prev.x, target.x, 0.05),
        y: lerp(prev.y, target.y, 0.05)
      }));
      requestAnimationFrame(smoothMove);
    };

    const animation = requestAnimationFrame(smoothMove);
    return () => cancelAnimationFrame(animation);
  }, [target]);

  const getParallaxStyle = useCallback((strength = 1) => {
    const xOffset = mousePosition.x * strength * 20;
    const yOffset = mousePosition.y * strength * 20;
    
    return {
      transform: `translate3d(${xOffset}px, ${yOffset}px, 0)`
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-rose-50" />
      
      {/* Grid patterns */}
      <div className="absolute inset-0">
        {/* Vertical grid lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-screen w-px bg-rose-200/10"
            style={{
              left: `${(i + 1) * 10}%`,
              ...getParallaxStyle(0.2)
            }}
          />
        ))}
        
        {/* Horizontal grid lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-screen h-px bg-rose-200/10"
            style={{
              top: `${(i + 1) * 10}%`,
              ...getParallaxStyle(0.2)
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Chart-like shapes */}
        <svg className="absolute w-full h-full" style={getParallaxStyle(0.4)}>
          <path
            d="M0,300 Q200,280 400,320 T800,280"
            fill="none"
            stroke="rgba(225, 29, 72, 0.03)"
            strokeWidth="2"
          />
        </svg>
        
        <svg className="absolute w-full h-full" style={getParallaxStyle(0.3)}>
          <path
            d="M0,350 Q300,330 600,370 T1200,330"
            fill="none"
            stroke="rgba(225, 29, 72, 0.02)"
            strokeWidth="2"
          />
        </svg>

        {/* Geometric shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-rose-200/5 rounded-full"
          style={getParallaxStyle(0.6)} 
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-rose-200/5 rounded-full"
          style={getParallaxStyle(0.4)} 
        />
        
        {/* Angular lines */}
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-rose-200/10 to-transparent -rotate-45"
          style={getParallaxStyle(0.5)} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-80 h-px bg-gradient-to-r from-transparent via-rose-200/10 to-transparent rotate-45"
          style={getParallaxStyle(0.3)} 
        />

        {/* Candlestick-like shapes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`candle-${i}`}
            className="absolute w-1 bg-rose-200/5"
            style={{
              height: `${Math.random() * 100 + 50}px`,
              left: `${(i + 2) * 15}%`,
              top: `${Math.random() * 50 + 25}%`,
              ...getParallaxStyle(0.2 + Math.random() * 0.3)
            }}
          />
        ))}
      </div>
    </div>
  );
}