import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParallaxBackground from "../util/ParallaxBackground";
import ResearchPapers from "../components/ResearchPapers";
import MediaMentions from "../components/MediaMentions";

export default function ResearchPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      
      // Redirect to home if on mobile
      if (isMobileDevice) {
        navigate('/', { replace: true });
      }
    };
    
    // Check on mount
    checkScreenSize();
    
    // Set up listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [navigate]);
  
  // If mobile, this component won't render (redirect happens first)
  if (isMobile) return null;
  
  return (
    <>
      {/* Background */}
      <ParallaxBackground />
      
      {/* Main Content */}
      <main className="relative min-h-screen">
        <div className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <ResearchPapers isLoaded={isLoaded} isMobile={isMobile} />
          <MediaMentions isLoaded={isLoaded} isMobile={isMobile}/>
        </div>
      </main>
    </>
  );
}