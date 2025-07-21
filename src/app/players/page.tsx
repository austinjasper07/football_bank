'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';

const players = [
  {
    id: 1,
    name: 'Carlos Silva',
    age: 23,
    position: 'Striker',
    country: 'Brazil',
    countryCode: 'br',
    status: 'Available',
    statusColor: 'bg-accent-green',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/671365cf49-56362be5268e9c0ce8db.png',
    description: 'Dynamic striker with exceptional pace and clinical finishing ability.',
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    age: 21,
    position: 'Midfielder',
    country: 'Spain',
    countryCode: 'es',
    status: 'Available',
    statusColor: 'bg-accent-green',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d7a2602c6e-a1254a5f757aefad6d24.png',
    description: 'Creative midfielder with excellent vision and passing range.',
  },
  {
    id: 3,
    name: 'James Thompson',
    age: 26,
    position: 'Defender',
    country: 'England',
    countryCode: 'gb-eng',
    status: 'Contracted',
    statusColor: 'bg-primary-muted',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5412ccabb8-a3f8f9cd74575ac3c357.png',
    description: 'Solid centre-back with strong aerial ability and leadership qualities.',
  },
  {
    id: 4,
    name: 'Antoine Dubois',
    age: 24,
    position: 'Winger',
    country: 'France',
    countryCode: 'fr',
    status: 'Available',
    statusColor: 'bg-accent-green',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b0dfb59df6-feaa5bc29b7a0697a112.png',
    description: 'Pacey winger with excellent dribbling skills and crossing ability.',
  },
  {
    id: 5,
    name: 'Marco Rossi',
    age: 28,
    position: 'Goalkeeper',
    country: 'Italy',
    countryCode: 'it',
    status: 'Available',
    statusColor: 'bg-accent-green',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4b7d7759d9-6136d0b33b2c3f769c8f.png',
    description: 'Experienced goalkeeper with excellent shot-stopping and distribution.',
  },
  {
    id: 6,
    name: 'Leon Mueller',
    age: 25,
    position: 'Midfielder',
    country: 'Germany',
    countryCode: 'de',
    status: 'Available',
    statusColor: 'bg-accent-green',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c4a851256a-fabe3c308c4f23220f8b.png',
    description: 'Box-to-box midfielder with strong work rate and tactical awareness.',
  },
];

export default function PlayerPortfolioPage() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  const router = useRouter();

  const perPage = 6; // Number of players per page

  const filteredPlayers = players.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = selectedCountry ? p.country.toLowerCase() === selectedCountry : true;
    const matchesPosition = selectedPosition ? p.position.toLowerCase() === selectedPosition : true;
    return matchesSearch && matchesCountry && matchesPosition;
  });

  const totalPages = Math.ceil(filteredPlayers.length / perPage);
  const paginatedPlayers = filteredPlayers.slice((currentPage - 1) * perPage, currentPage * perPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <main className="container mx-auto px-4">
      <section className="py-16 text-center">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-primary-text">Player Portfolio</h1>
        <p className="text-primary-muted text-lg max-w-2xl mx-auto">
          Discover talented football players from around the world. Find your next signing or explore career opportunities.
        </p>
      </section>

      <section className="py-8 bg-primary-card border-y border-divider">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-primary-card border border-divider text-primary-text px-4 py-3 pr-10 rounded-md min-w-[160px]"
            >
              <option value="">All Countries</option>
              <option value="brazil">Brazil</option>
              <option value="argentina">Argentina</option>
              <option value="england">England</option>
              <option value="spain">Spain</option>
              <option value="france">France</option>
              <option value="germany">Germany</option>
            </select>

            <select
              value={selectedPosition}
              onChange={(e) => {
                setSelectedPosition(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-primary-card border border-divider text-primary-text px-4 py-3 pr-10 rounded-md min-w-[160px]"
            >
              <option value="">All Positions</option>
              <option value="goalkeeper">Goalkeeper</option>
              <option value="defender">Defender</option>
              <option value="midfielder">Midfielder</option>
              <option value="striker">Striker</option>
              <option value="winger">Winger</option>
            </select>
          </div>

          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search players..."
              className="w-full bg-primary-card border border-divider text-primary-text px-4 py-3 pl-12 rounded-md"
            />
            <i className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-muted" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-primary-card rounded-xl cursor-pointer overflow-hidden border border-divider hover:border-accent-blue transition-colors shadow-sm hover:shadow-md"
              onClick={()=> router.push(`/players/${player.id}`)}
            >
              <div className="relative w-full h-[320px]">
                <Image
                  src={player.image}
                  alt={player.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 left-4 bg-primary-card/95 rounded-full px-3 py-1 text-sm flex items-center gap-2 shadow-sm">
                  <Image
                    src={`https://flagcdn.com/w20/${player.countryCode}.png`}
                    alt={player.country}
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <span className="text-primary-text">{player.country}</span>
                </div>
                <div className={`absolute top-4 right-4 text-white rounded-full px-3 py-1 text-sm font-medium ${player.statusColor}`}>
                  {player.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-2 text-primary-text">{player.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-sm font-medium">
                    {player.position}
                  </span>
                  <span className="text-primary-muted text-sm">Age: {player.age}</span>
                </div>
                <p className="text-primary-muted text-sm mb-4">{player.description}</p>
                <button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white py-2 rounded-md font-medium transition-colors cursor-pointer">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
              />
            </PaginationItem>

            {pageNumbers.map((num) => (
              <PaginationItem key={num}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === num}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(num);
                  }}
                >
                  {num}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
}
