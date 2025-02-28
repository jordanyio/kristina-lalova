import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ResearchPage from './pages/ResearchPage';
import TeachingPage from './pages/TeachingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import SocialLinks from './components/SocialLinks';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="*" element={<div className="flex items-center justify-center h-screen">Page not found</div>} />
      </Routes>
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
          
      <Footer />
    </Router>
  );
}

export default App;