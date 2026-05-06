import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <img 
              src="/logo.png" 
              alt="podfix" 
              className="w-8 h-8 sm:w-10 sm:h-10 filter invert group-hover:transition duration-300" 
            />
            <span className="text-lg sm:text-xl font-medium text-white">
              <span>pod</span>
              <span className="text-blue-500">fix</span>
            </span>
          </div>
            
          {/* Desktop Links (Hidden on small screens) */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="px-6 py-2 rounded-full bg-blue-950/30 space-x-8">
              <a href="#features" className="text-white hover:text-blue-500 transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-blue-500 transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-blue-500 transition-colors">Contact</a>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Log In
            </button>
          </div>

          {/* Hamburger Toggle (Visible on small screens) */}
          <button 
            className="lg:hidden flex items-center p-2 text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button> 
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a 
              href="#features" 
              onClick={closeMenu}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md transition-all"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={closeMenu}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md transition-all"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-slate-800 rounded-md transition-all"
            >
              Contact
            </a>
            <hr className="border-slate-800 my-2" />
            <button className="w-full mt-2 px-4 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}