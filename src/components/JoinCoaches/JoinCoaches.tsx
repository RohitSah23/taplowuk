import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CoachImg from '../../app/assets/coach.jpg';
import Image from 'next/image';

export default function JoinCoachesSection() {
  return (
    <section id="join-coaches" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Football Cannot Happen Without You!
          </h2>
          <p className="text-xl text-red-600">
            At Taplow United FC we are on the hunt for Coaches in our Youth section for the 25/26 football season.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={CoachImg}
              alt="Youth Football Coaching"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-2xl font-bold mb-2">Youth Football Coaching</h4>
              <p className="text-lg">Inspire the next generation at Stanley Jones Field</p>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 text-red-700 text-lg leading-relaxed">
            <p>
              Want to be the next <strong>Pep Guardiola</strong>, <strong>Emma Hayes</strong>, or <strong>Gareth Southgate</strong>?
            </p>

            <p>
              Youth Football needs your help & passion to inspire young budding footballers. 
              At the Home of Taplow United FC – the Stanley Jones Field – we will assist you in achieving 
              your FA Level 1 badge, provide your equipment, excellent home ground, training facilities & Clubhouse.
            </p>

            <p>
              So if you think you have what it takes, contact us now!
            </p>

            <p>
              Have a team already and not happy where you currently are? Contact us about the possibility of moving over to Taplow United FC.
            </p>

            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Contact Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
