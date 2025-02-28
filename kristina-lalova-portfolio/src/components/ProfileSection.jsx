import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResearchInterests from './ResearchInterests';

const ProfileSection = ({ isLoaded }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  
  const fullText = "Currently seeking opportunities in finance, data science, data analytics, research engineering, and related fields where I can apply my analytical expertise and research experience.";
  
  useEffect(() => {
    if (isLoaded) {
      // Start typing 1.5 seconds after page loads
      const startTimer = setTimeout(() => {
        setStartTyping(true);
      }, 1250);
      
      return () => clearTimeout(startTimer);
    }
  }, [isLoaded]);
  
  useEffect(() => {
    if (startTyping && displayedText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 30); // Speed of typing - lower number is faster
      
      return () => clearTimeout(typingTimer);
    }
  }, [startTyping, displayedText, fullText]);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const downloadResume = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume PDF in the public folder
    link.download = 'Kristina_Lalova_Resume.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section className="relative pt-16 w-full">
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block absolute top-0 right-12 z-10">
          <div className={`relative ${isLoaded ? 'animate-scaleIn delay-100' : 'opacity-0'}`}>
            <div className="absolute -inset-3 bg-rose-700 rounded-full blur-md opacity-20"></div>
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              <img
                src="/propho.jpg"
                alt="Kristina's Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium">
              Ph.D.
            </div>
            
            {/* Text bubble and buttons - Desktop only */}
            <div className={`absolute top-full mt-16 w-80 ${isLoaded ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
              {/* Text bubble with typing animation */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200 mb-4 h-32">
                <p className="text-gray-700 text-sm">
                  {displayedText}
                  <span className={startTyping ? "inline-block w-1 h-4 bg-rose-500 ml-0.5 animate-blink" : "hidden"} 
                        style={{
                          animationDuration: '0.75s',
                          animationIterationCount: 'infinite',
                          verticalAlign: 'middle',
                          display: displayedText.length === fullText.length ? 'none' : 'inline-block'
                        }}>
                  </span>
                </p>
              </div>
              
              {/* Buttons - Desktop version navigates to pages */}
              <div className="flex flex-col gap-2">
                <Link 
                  to="/resume" 
                  className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-colors duration-300 text-center"
                >
                  View Resume
                </Link>
                <Link 
                  to="/research" 
                  className="bg-white hover:bg-gray-100 text-rose-700 font-medium py-2 px-4 rounded-lg border border-rose-200 shadow-sm transition-colors duration-300 text-center"
                >
                  Explore Research
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center lg:items-start page-transition ${
          isLoaded ? 'opacity-100 slide-up' : 'opacity-0 slide-up-hidden'
        }`}>
          {/* Mobile Profile Image */}
          <div className={`lg:hidden flex justify-center -mt-12 mb-8 ${
            isLoaded ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            <div className="relative">
              {/* Add scale-in animation directly to this div instead of the parent */}
              <div className={`${isLoaded ? 'animate-scaleIn delay-100' : 'opacity-0'}`}>
                <div className="absolute -inset-3 bg-rose-700 rounded-full blur-md opacity-20"></div>
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                  <img
                    src="/propho.jpg"
                    alt="Kristina's Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Ensure PhD badge is properly positioned relative to the image */}
                <div className="absolute -bottom-3 -right-3 bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium">
                  Ph.D.
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile version of text bubble and buttons in separate container */}
          <div className={`lg:hidden w-full max-w-md mx-auto mb-8 ${isLoaded ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
            {/* Fixed height text bubble */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200 mb-4" style={{ height: '110px' }}>
              <p className="text-gray-700 text-sm text-center">
                {displayedText}
                <span className={startTyping ? "inline-block w-1 h-4 bg-rose-500 ml-0.5 animate-blink" : "hidden"} 
                      style={{
                        animationDuration: '0.75s',
                        animationIterationCount: 'infinite',
                        verticalAlign: 'middle',
                        display: displayedText.length === fullText.length ? 'none' : 'inline-block'
                      }}>
                </span>
              </p>
            </div>
            
            {/* Mobile buttons: Download Resume and Scroll to Research */}
            <div className="flex gap-2">
              <button 
                onClick={downloadResume}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-2 rounded-lg shadow-sm transition-colors duration-300 text-center text-sm flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('research-papers')}
                className="flex-1 bg-white hover:bg-gray-100 text-rose-700 font-medium py-2 px-2 rounded-lg border border-rose-200 shadow-sm transition-colors duration-300 text-center text-sm"
              >
                Explore Research
              </button>
            </div>
          </div>

          {/* Bio Section */}
          <div className={`flex flex-col space-y-8 text-center lg:text-left lg:max-w-2xl ${
            isLoaded ? 'animate-fadeInUp delay-300' : 'opacity-0'
          }`}>
            <div>
              {/* Desktop header shows "Dr. Kristina Lalova" */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 lg:block hidden">Dr. Kristina Lalova</h1>
              
              {/* Mobile header shows "About Me" */}
              <h1 className="text-5xl font-bold text-gray-900 mb-4 lg:hidden">About Me</h1>
              
              <h2 className="text-2xl sm:text-3xl text-rose-700 font-light">
                Finance Ph.D. and Assistant Professor at Michigan State University's Eli Broad College of Business.
              </h2>
            </div>
            <div className="w-32 h-2 bg-rose-700 rounded-full mx-auto lg:mx-0"></div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                I am a finance scholar exploring the intricate relationships between labor dynamics
                and financial markets. My research examines how workforce trends influence corporate
                decision-making, with a specific emphasis on how employee morale shapes merger and
                acquisition trajectories, bankruptcy predictions, and organizational performance
                across different sectors, including specialized domains like European soccer.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Before joining Michigan State University in 2023, I earned my Ph.D. in Finance from
                the University of Connecticut, where I developed novel analytical frameworks for
                understanding labor-finance interactions. My academic journey began at Drexel
                University, where I graduated with a B.S.B.A. in Finance and Accounting as part of
                the prestigious Drexel Global Scholar program—an experience that shaped my
                international perspective on financial systems.
              </p>
            </div>

            {/* ResearchInterests Section */}
            <div className="w-full">
              <ResearchInterests isLoaded={isLoaded} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;