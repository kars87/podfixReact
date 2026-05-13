import { Mic2, Zap, Volume2, BarChart3, Upload, Wand2, CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Noise Reduction",
      description: "Remove background noise and hiss for cleaner, professional sound.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Equalization",
      description: "Balance frequencies to enhance vocals and bring out clarity.",
      icon: <Mic2 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Compression",
      description: "Smooth out volume levels for a more polished, radio-ready sound.",
      icon: <Volume2 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Loudness Normalization",
      description: "Ensure consistent volume across your episodes and platforms.",
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    },
  ];
  const steps = [
    {
      id: 1,
      title: "Upload Your Audio",
      description: "Drag and drop your podcast file or paste a link. Supports all major audio formats.",
      icon: <Upload className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Podfix Does the Magic",
      description: "We analyzes and processes your audio, fixing all common issues automatically.",
      icon: <Wand2 className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Download & Publish",
      description: "Get your professionally processed audio file ready to upload to any podcast platform.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
    },
  ];
  return (
    <>
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful Audio Processing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our advanced algorithms analyze your audio and apply a range of 
            enhancements to improve clarity, compression, and balance levels.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-24 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-25">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Simple Three-Step Process
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl">
            From raw audio to polished podcast ready for download
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-blue-500 transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Optional: Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}