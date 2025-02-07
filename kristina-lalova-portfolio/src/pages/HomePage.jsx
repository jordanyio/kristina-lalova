import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="fixed inset-0 top-16 bg-gradient-to-b from-white to-rose-50 overflow-hidden" style={{ zoom: '150%' }}>
      <main className="h-full w-full flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          {/* Profile Section */}
          <div className="text-center mt-8 sm:mt-0 mb-6 sm:mb-8">
            {/* Headshot - smaller on mobile, larger on desktop */}
            <div className="mb-4 sm:mb-6">
              <div className="rounded-full overflow-hidden border-4 border-rose-100 shadow-lg w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                <img
                  src="/api/placeholder/400/400"
                  alt="Dr. Kristina Lalova"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title - adjusted font sizes for mobile */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Dr. Kristina Lalova
            </h1>
            <h2 className="text-lg sm:text-xl text-rose-700 mb-4 sm:mb-6 font-light">
              Financial Economics Researcher
            </h2>
          </div>

          {/* Introduction - adjusted text size and margins for mobile */}
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8 px-2 sm:px-4">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Welcome to my academic portfolio. I am a Finance PhD specializing in behavioral economics 
              and market microstructure. My research focuses on understanding how psychological factors 
              and market design influence financial decision-making and market efficiency.
            </p>
          </div>

          {/* Call to Action Buttons - stacked on mobile, side by side on desktop */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 px-4">
            <Link
              to="/research"
              className="inline-flex items-center justify-center bg-rose-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-rose-800 transition-colors shadow-sm hover:shadow-md text-sm sm:text-base"
            >
              View Research Papers
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-rose-700 text-rose-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-rose-50 transition-colors text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;