import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img 
                src="/logo.png" 
                alt="podfix" 
                className="w-8 h-8 sm:w-10 sm:h-10 filter invert group-hover:transition duration-300" 
              />
            </div>
            <span className="text-lg  sm:text-xl font-meduim text-white">
              <span className="text-white">pod</span>
              <span className="text-blue-500">fix</span>
            </span>
          </div>
            
            {/* Navbar links */}
            <div className="hidden inline-block px-4 py-2 rounded-full bg-blue-950/30 space-x-6 lg:flex space-x-8">
              <a 
                href="#features" 
                className="text-white hover:text-blue-500 transition-colors">
                Features</a>
              <a 
                href="#pricing" 
                className="text-white hover:text-blue-500 transition-colors">
                Pricing</a>
              <a 
                href="#contact" 
                className="text-white hover:text-blue-500 transition-colors">
                Contact</a>
            </div>
            <div className="hidden space-x-6 lg:flex space-x-8">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Log In
              </button>
            </div>

            <button 
              className="lg:hidden flex items-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                  ) : ( 
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                )}
            </button> 
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 animate-in slide-in-from-top">
          <div className="px-2 pt-2 pb-4 space-y-1 flex flex-col items-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Log In
            </button>
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-white hover:text-blue-500 transition-colors duration-300">
              Features</a>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-white hover:text-blue-500 transition-colors duration-300">
              Pricing</a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-white hover:text-blue-500 transition-colors duration-300">
              Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}