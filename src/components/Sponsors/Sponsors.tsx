import Image from 'next/image';

const sponsors = [
  {
    logo: "/assets/sponsors/sytherg.webp",
  },
  {
    logo: "/assets/sponsors/angled.webp",
  },
  {
    logo: "/assets/sponsors/joseph.webp",
  },
  {
    logo: "/assets/sponsors/yfood.webp",
  },
  {
    logo: "/assets/sponsors/maurice.webp",
  },

];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-red-800 text-center mb-12">
          SPONSORS
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsors) => (
            <div
              key={sponsors.logo}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={sponsors.logo}
                  alt={sponsors.logo}
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
