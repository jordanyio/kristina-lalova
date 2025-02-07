import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-rose-700 font-medium' : 'text-gray-600';
  };

  // Only apply fixed positioning to home page
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? "fixed inset-0 overflow-hidden" : "min-h-screen"} >
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-50" style={{ zoom: '150%' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-rose-700 text-xl font-semibold hover:text-rose-800">
                Dr. Kristina Lalova
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/research" 
                className={`${isActive('/research')} hover:text-rose-700 transition-colors`}
              >
                Research
              </Link>
              <Link 
                to="/experience" 
                className={`${isActive('/experience')} hover:text-rose-700 transition-colors`}
              >
                Experience
              </Link>
              <Link 
                to="/achievements" 
                className={`${isActive('/achievements')} hover:text-rose-700 transition-colors`}
              >
                Achievements
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact')} hover:text-rose-700 transition-colors`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-rose-700 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/research"
                className={`block px-4 py-2 ${isActive('/research')} hover:bg-rose-50 hover:text-rose-700`}
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                to="/experience"
                className={`block px-4 py-2 ${isActive('/experience')} hover:bg-rose-50 hover:text-rose-700`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/achievements"
                className={`block px-4 py-2 ${isActive('/achievements')} hover:bg-rose-50 hover:text-rose-700`}
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-2 ${isActive('/contact')} hover:bg-rose-50 hover:text-rose-700`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;