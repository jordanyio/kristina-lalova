import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParallaxBackground from "../util/ParallaxBackground";
import PDFViewer from "../components/PDFViewer";

export default function ResumePage() {
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
      <main className="relative min-h-screen mb-32">
        <div className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
              <div className="w-24 h-1 bg-rose-700 rounded-full"></div>
            </div>
            
            <div className="h-[calc(100vh-300px)]">
              <PDFViewer 
                pdfPath="/resume/Kristina-Lalova-Resume-2025.pdf"
                title="My Professional Resume"
              />
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}