import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">About Us</h2>
          <p className="text-xl text-red-600">Welcome to Taplow United FC</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <History className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">Our Heritage</h3>
            </div>
            
            <p className="text-lg text-red-700 leading-relaxed">
              Taplow United formerly, the Old Paludians Association, was formed in 1923 by former pupils 
              of Slough Secondary School - re-named Slough Grammar School in 1936. Mr. E. Rutland-Clarke, 
              headmaster of the school in 1923 and founder member of the Club, helped in the naming of the association.
            </p>
            
            <p className="text-lg text-red-700 leading-relaxed">
              The name derived from the Latin word "PALUS" meaning marsh, bog or slough. For over 100 years, 
              we have been a cornerstone of the local football community, fostering talent and building 
              lasting friendships through the beautiful game.
            </p>
            
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Read More
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Card Image */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 relative">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg')] bg-cover bg-center opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Stanley Jones Field</h4>
                <p className="text-lg">Our home since 1923</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
