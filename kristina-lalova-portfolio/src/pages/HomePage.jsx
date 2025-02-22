import { useState, useEffect } from "react";
import ParallaxBackground from "../util/ParallaxBackground";
import ProfileSection from '../components/ProfileSection';
import SocialLinks from '../components/SocialLinks';
import ResearchPapers from '../components/ResearchPapers';
import MediaMentions from "../components/MediaMentions";
import TeachingExperience from "../components/TeachingExperience";
import Footer from '../components/Footer';

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
          
          <div className="relative py-6 flex justify-center overflow-hidden">
            <div className="absolute left-0 right-0 flex justify-center">
              <div className="w-px h-16 bg-rose-200"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-500 mt-8"></div>
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-500 mt-8"></div>
            </div>
          </div>

          <SocialLinks isLoaded={isLoaded} />
          <ResearchPapers isLoaded={isLoaded} isMobile={isMobile} />
          <MediaMentions isLoaded={isLoaded} isMobile={isMobile} />
          <TeachingExperience isLoaded={isLoaded} />
          <Footer />
        </div>
      </main>
    </>
  );
}