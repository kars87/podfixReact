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

      <div className="relative max-w-3xl text-center bottom-45">
        <h1 className="text-3xl sm:text-4xl font-bold text-white py-5">Professional podcast sound at your fingertips</h1>
        <div>
          <p>Automatically enhance your audio quality with our cutting-edge technology. We fix your audio so that you can focus on content.</p>
        </div>
        <div className="bg-gradient-to-r from-gray900/20 to gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors mt-6">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
