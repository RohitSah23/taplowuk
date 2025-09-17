'use client';

import { ArrowRight, Play, MapPin, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/50 to-black/80"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-12 animate-fade-in py-20 sm:py-28 md:py-32">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              Branch Out Consultancy:
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r py-2 from-red-600 via-red-400 to-white">
                Your Bridge to Maltese
              </span>
              <span className="block text-white">Education and Employment</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Expert visa facilitation, placement with Malta&#39;s top schools and employers, and end-to-end support fully compliant with Maltese law.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-10">
            <button
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base sm:text-lg font-bold rounded-full shadow-xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 group"
            >
              <span>Our Services</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
            </button>

            <button
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border-2 border-white text-white text-base sm:text-lg font-bold rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
              <span>About Us</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 pt-12 sm:pt-16 max-w-5xl mx-auto">
            {[
              { icon: Users, value: '25+', label: 'Years Experience' },
              { icon: Award, value: '100%', label: 'Legal Compliance' },
              { icon: MapPin, value: 'Malta', label: 'EU Gateway' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center space-y-2 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl mx-auto flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
