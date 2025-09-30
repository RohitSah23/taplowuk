'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import TeamRecruit from '../../app/assets/teamRecruit.webp';
import Enquiry from '../../app/assets/enquiry.webp';
import Trial from '../../app/assets/trial.webp';

const slides = [
  {
    id: 1,
    title: 'Looking for a team to join?',
    desc: `Taplow United FC are recruiting for men's, ladies and youth teams for the 2025/26 season. Get in touch now!`,
    img: TeamRecruit,
    alt: 'Taplow United players recruiting',
    buttons: [{ label: 'Membership Info', href: '#membership', style: 'primary' }],
  },
  {
    id: 2,
    title: 'Have an enquiry?',
    desc: `Here at Taplow United FC we welcome all forms of enquiries including club house and pitch hire, so feel free to contact us and we would be happy to help.`,
    img: Enquiry,
    alt: 'Taplow United clubhouse enquiries',
    buttons: [{ label: 'Contact Us', href: '#contact', style: 'primary' }],
  },
  {
    id: 3,
    title: 'Request a trial',
    desc: `If you would like to come for a trial for the 2025/26 season, get in touch with us now!`,
    img: Trial,
    alt: 'Taplow United trial session',
    buttons: [
      { label: 'Request a Trial', href: '#trial', style: 'primary' },
      { label: 'Contact Us', href: '#contact', style: 'outline' },
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full pt-28 md:pt-0 min-h-screen flex flex-col items-center justify-between py-10 bg-gradient-to-br from-[#8E0007] via-[#4B0000] to-[#000]">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[length:20px_20px] opacity-30 z-0" />

      <div className="flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10">
          {/* Left */}
          <div className="w-full md:w-1/2 text-black">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block font-[var(--font-oswald)] text-yellow-500">Join Taplow United FC</span>
              <span className="block text-[#E2DDB4] mt-2">Men&apos;s, Ladies & Youth Teams</span>
            </h1>

            <h2 className="text-2xl md:text-3xl leading-tight mb-6 text-yellow-500 font-[var(--font-oswald)]">
              {slides[current].title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#E2DDB4] font-medium mb-8 whitespace-pre-line">
              {slides[current].desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {slides[current].buttons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center ${
                    btn.style === 'primary'
                      ? 'bg-yellow-500/80 hover:bg-yellow-600 text-white'
                      : 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                  }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl shadow-xl overflow-hidden">
              {slides.map((slide, index) => (
                <Image
                  key={slide.id}
                  src={slide.img}
                  alt={slide.alt}
                  fill
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    index === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-yellow-600 rounded-full p-2 shadow-md"
                aria-label="Previous slide"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-yellow-600 rounded-full p-2 shadow-md"
                aria-label="Next slide"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-yellow-500 scale-110' : 'bg-gray-500 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
