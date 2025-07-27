import Image from 'next/image'
import { notFound } from 'next/navigation'
import PlayerTabs from '@/app/players/[id]/PlayerTabs'
import { Player } from '@/lib/types'
import axios from 'axios'
import Head from 'next/head'


export default async function PlayerPage({ params }: { params: { id: string } }) {

  let player: Player;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/players/${params.id}`)
    if (!res.data) return notFound()
    player = res.data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (err) {
  return notFound()
}

  const age = new Date().getFullYear() - new Date(player.dob).getFullYear();

  

  return (
    <>
      <Head>
        <title>{player.firstName} {player.lastName} | FootballBank.soccer</title>
        <meta name="description" content="Empowering football talent worldwide through visibility and opportunity." />
      </Head>
      <main className="bg-primary-bg text-primary-text font-inter">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-bg to-[hsl(113,63%,95%)]">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            <div className="shadow-md p-10 rounded-xl">
              <div className="flex gap-4 mb-6">
                <span className="badge">Available</span>
                <span className="badge-secondary">Featured Player</span>
              </div>
              <h1 className="text-5xl font-poppins font-bold mb-4">{player.firstName} {player.lastName}</h1>
              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Image
                    src={`https://flagcdn.com/w40/${player.countryCode.toLowerCase()}.png`}
                    alt={player.country}
                    width={24} height={16}
                    className="rounded"
                  />
                  <span className="text-primary-muted">{player.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-map-marker-alt text-accent-red"></i>
                  <span className="text-primary-muted">—</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <DetailCard label="Position" value={player.position} />
                <DetailCard label="Age" value={`${age} years`} />
              </div>
              <p className="mb-6">{player.description}</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  <i className="fa-solid fa-envelope mr-2" /> Contact Agent
                </button>
                <a href={`/api/players/${player.id}/cv`} className="btn-outline" download>
                  <i className="fa-solid fa-download mr-2" /> Download CV
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-divider">
              <Image
                src={`/players/${player.id}/photo`}
                alt={`${player.firstName} ${player.lastName}`}
                width={600} height={500}
                className="object-cover w-full h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <PlayerTabs player={player} />

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-accent-red to-accent-red/25 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6">Ready to Scout {player.firstName}?</h2>
            <p className="mb-8 opacity-90">Contact us today to learn more, arrange trials, or request additional information.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-light">
                <i className="fa-solid fa-envelope mr-2"></i> Contact Agent
              </button>
              <button className="btn-outline">
                <i className="fa-solid fa-calendar mr-2"></i> Schedule Meeting
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-primary-secondary rounded-lg p-4 border border-divider">
      <span className="text-primary-muted text-sm">{label}</span>
      <p className="font-semibold text-lg">{value}</p>
    </div>
  )
}
