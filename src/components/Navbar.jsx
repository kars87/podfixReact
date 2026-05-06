import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Wrapper: Use a 3-column grid for perfect centering */}
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-16 md:h-20">
          
          {/* 1. Left: Logo */}
          <div className="flex items-center space-x-1 group cursor-pointer justify-start">
            <img 
              src="/logo.png" 
              alt="podfix" 
              className="w-8 h-8 sm:w-10 sm:h-10 filter invert" 
            />
            <span className="text-lg sm:text-xl font-medium text-white">
              <span className="text-white">pod</span>
              <span className="text-blue-500">fix</span>
            </span>
          </div>
            
          {/* 2. Center: Navbar Links (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center">
            <div className="inline-flex px-6 py-2 rounded-full bg-blue-950/30 space-x-8 border border-white/5">
              <a href="#features" className="text-white hover:text-blue-500 transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-blue-500 transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>

          {/* 3. Right: Button + Hamburger */}
          <div className="flex items-center justify-end space-x-4">
            {/* Login Button (Hidden on Mobile) */}
            <button className="hidden lg:block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium">
              Log In
            </button>

            {/* Hamburger Toggle (Visible on Mobile) */}
            <button 
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button> 
          </div>
        </div>
      </div>

      {/* Mobile Menu logic remains the same below... */}
    </nav>
  );
}