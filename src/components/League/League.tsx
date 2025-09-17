import Image from 'next/image';

const leagues = [
  {
    name: "Thames Valley Premier League",
    logo: "/assets/leagues/tvpl.webp",
  },
  {
    name: "Thames Valley Counties Women's Football League",
    logo: "/assets/leagues/tvcwfl.webp",
  },
  {
    name: "Thames Valley Football Development League",
    logo: "/assets/leagues/tvfdl.webp",
  },
  {
    name: "South Bucks Minor League",
    logo: "/assets/leagues/sbml.webp",
  },
  {
    name: "Wycombe And South Bucks Minor Football League",
    logo: "/assets/leagues/wsbml.webp",
  },
  {
    name: "East Berkshire Football Alliance",
    logo: "/assets/leagues/ebfa.webp",
  },
];

export default function LeaguesSection() {
  return (
    <section id="leagues" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-red-800 text-center mb-12">
          LEAGUES
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {leagues.map((league) => (
            <div
              key={league.name}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={league.logo}
                  alt={league.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center text-red-700 font-semibold text-sm md:text-base">
                {league.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
