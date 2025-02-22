import React, { useState, useEffect } from 'react';

const BarChart = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('profile-content');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setVisible(isVisible);
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className="hidden lg:flex absolute bottom-8 right-8 gap-4 h-48">
      {[180, 140, 160].map((height, index) => (
        <div
          key={index}
          className="w-8 relative"
          style={{ height }}
        >
          <div 
            className={`absolute bottom-0 w-full bg-rose-500/30 rounded-t transition-transform duration-700 ease-out`}
            style={{ 
              height: '100%',
              transformOrigin: 'bottom',
              transform: `scaleY(${visible ? 1 : 0})`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BarChart;