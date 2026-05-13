import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 1. Create a ref for the entire nav container
  const navRef = useRef(null);

  const handleOpenContact = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('open-contact'));
  };

  const handleOpenLogin = () => {
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('open-login'));
  };

  // 2. Handle clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open and the click is NOT inside the navRef, close it
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    // 3. Attach the ref here
    <nav 
      ref={navRef} 
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 bg-opacity-95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-16 md:h-20">
          
          {/* 1. Left: Logo */}
          <div className="flex items-center space-x-1 group cursor-pointer justify-start">
            <img 
              src="/logo.png" 
              alt="podfix" 
              className="w-8 h-8 sm:w-10 sm:h-10 filter invert" 
            />
            <span className="text-lg sm:text-xl font-medium text-white">
              <span>pod</span>
              <span className="text-blue-500">fix</span>
            </span>
          </div>
            
          {/* 2. Center: Navbar Links (Desktop) */}
          <div className="hidden lg:flex justify-center">
            <div className="inline-flex px-6 py-2 rounded-full bg-blue-950/30 space-x-8 border border-white/5">
              <a href="#features" className="text-white hover:text-blue-500 transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-blue-500 transition-colors">Pricing</a>
              <a href="#contact" onClick={handleOpenContact} className="text-white hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>

          {/* 3. Right: Button + Hamburger */}
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={handleOpenLogin}
              className="hidden lg:block cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
            >
              Log In
            </button>

            <button
              className="lg:hidden cursor-pointer flex items-center p-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button> 
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md transition-all"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md transition-all"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={handleOpenContact}
              className="block w-full text-center px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md transition-all"
            >
              Contact
            </a>
            <hr className="border-slate-800 my-2 w-full" />
            <button
              onClick={handleOpenLogin}
              className="w-full cursor-pointer mt-2 px-4 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}