'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroBG from '../../app/assets/HeroBG.webp';

export default function Hero() {
  return (
    <section className="font-[var(--font-nunito-sans)] relative bg-white min-h-screen flex items-center">
{/* Optional Background Overlay */}
<div className="absolute inset-0">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-[url('https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg')] bg-cover bg-center opacity-20"
  ></div>

  {/* Red Glass Overlay */}
  <div className="absolute inset-0 bg-[#8E0007]/20 -z-0"></div>
</div>

      <div className="z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 py-16">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-black py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
            <span className="block font-[var(--font-oswald)] text-[#8E0007]">
              Join Taplow United FC
            </span>
            <span className="block text-gray-800 mt-2">
              Men's, Ladies & Youth Teams
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg mb-8 sm:mb-10 leading-relaxed font-medium">
            Looking for a team to join? Taplow United FC are recruiting for the 2025/26 season. 
            Get in touch now and be part of our growing football family!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
            <Link
              href="#membership"
              className="px-6 py-3 bg-[#8E0007] hover:bg-[#a2000a] text-white font-semibold rounded-full transition-all duration-300 text-center"
            >
              Membership Info
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border-2 border-[#8E0007] text-[#8E0007] hover:bg-[#8E0007] hover:text-white font-semibold rounded-full transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-lg">
            <div className="bg-[#8E0007]/10 rounded-lg py-6 px-4">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-[#8E0007]">100+</div>
              <div className="text-sm sm:text-base text-gray-700">Players Registered</div>
            </div>
            <div className="bg-[#8E0007]/10 rounded-lg py-6 px-4">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-[#8E0007]">25+</div>
              <div className="text-sm sm:text-base text-gray-700">Years Experience</div>
            </div>
            <div className="bg-[#8E0007]/10 rounded-lg py-6 px-4">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-[#8E0007]">Taplow</div>
              <div className="text-sm sm:text-base text-gray-700">Home Ground</div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96 lg:h-[400px] relative rounded-xl shadow-lg overflow-hidden">
            {/* Image */}
            <Image
              src={HeroBG}
              alt="Taplow United FC"
              fill
              className="object-cover shadow-2xl shadow-black/30"
              priority
            />
            {/* Red Overlay */}
            <div className="absolute inset-0 bg-[#8E0007]/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
