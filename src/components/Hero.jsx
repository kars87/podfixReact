import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative bg-slate-900 min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 40%)`,}}></div>

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-95 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">My Landing Page</h1>
          <div className="bg-gradient-to-r from-gray900/20 to gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden">
          
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8"> 
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
