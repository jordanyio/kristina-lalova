import { useState, useEffect } from "react";
import ParallaxBackground from "../util/ParallaxBackground";
import ProfileSection from '../components/ProfileSection';
import SocialLinks from '../components/SocialLinks';
import ResearchPapers from '../components/ResearchPapers';
import MediaMentions from "../components/MediaMentions";
import TeachingExperience from "../components/TeachingExperience";
import ResumePage from "./ResumePage";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
    <>
      {/* Background */}
      <ParallaxBackground />
      {/* Main Content */}
      <main className="relative min-h-screen">
        <div className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <ProfileSection isLoaded={isLoaded} />
          {/* Only show these sections on mobile */}
          {isMobile && (
            <>
              <ResearchPapers isLoaded={isLoaded} isMobile={isMobile} />
              <MediaMentions isLoaded={isLoaded} isMobile={isMobile} />
              <TeachingExperience isLoaded={isLoaded} />
              
              {/* Download Resume button after Teaching Experience */}
              <div className={`py-10 px-6 flex justify-center ${
                isLoaded ? 'animate-fadeInUp' : 'opacity-0'
              }`} style={{ animationDelay: '400ms' }}>
                <button 
                  onClick={downloadResume}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-center flex items-center justify-center max-w-xs w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download My Resume
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}