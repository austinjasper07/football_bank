import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import axios from "axios";
import { Player, Post } from "@/lib/types";

export const metadata: Metadata = {
  title: "FootballBank | Global Football Representation Platform",
  description:
    "Empowering football talent worldwide through professional representation and global exposure.",
};

export default async function HomePage() {
  const featuredPosts = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/featured`)
    .then((res) => res.data);
  const featuredPlayers = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/players/featured`)
    .then((res) => res.data);

  const playerOfTheWeek = featuredPlayers.find(
    (player: Player) => player.playerOfTheWeek === true
  );

  return (
    <div className="bg-[#F9FAFB]">
      {/* Hero Section */}
      <div className="px-10 flex flex-row relative h-[600px] items-center bg-gradient-to-br from-primary-bg via-gray-50 to-blue-50 overflow-hidden">
        <section className="w-[50%] flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-64 h-64 rounded-full bg-accent-red blur-3xl -top-20 -left-20"></div>
            <div className="absolute w-64 h-64 rounded-full bg-accent-green blur-3xl bottom-20 right-20"></div>
          </div>
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-6 text-primary-text">
                Empowering Football{" "}
                <span className="text-accent-red">Talent</span> Worldwide
              </h1>
              <p className="text-primary-muted text-lg mb-8 font-inter">
                Connecting exceptional players with opportunities. Showcase your
                skills, get discovered, and take your football career to the
                next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/submit-profile">
                  <span className="bg-accent-red text-white px-6 py-3 rounded-md font-medium text-center transition-colors hover:bg-blue-600 cursor-pointer">
                    Submit Your Profile
                  </span>
                </Link>
                <Link href="/players">
                  <span className="border border-divider hover:border-accent-red text-primary-text px-6 py-3 rounded-md font-medium text-center transition-colors cursor-pointer">
                    Browse Players
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-[50%] h-full  mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-white h-full w-full p-8 rounded-xl shadow-lg text-center hover:shadow-md transition-all flex flex-row-reverse gap-8">
            <div className="absolute top-1 right-0 rounded-2xl bg-accent-red/80 text-white p-2 flex items-center justify-center">
              Player of the Moment
            </div>

            <div className="relative w-[70%] h-full bg-[#1F6FEB]/10 rounded-md mb-6">
              <Image
                src={playerOfTheWeek?.imageUrl}
                alt={`${playerOfTheWeek?.firstName} ${playerOfTheWeek?.lastName}`}
                width={64}
                height={64}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text-left h-full w-[30%] overflow-hidden">
              <h3 className="text-2xl font-poppins font-bold text-[#111827] mb-2">
                {`${playerOfTheWeek?.firstName} ${playerOfTheWeek?.lastName}`}
              </h3>
              <p className="text-primary-muted text-lg">
                {playerOfTheWeek?.position}
              </p>
              <p>
                {playerOfTheWeek?.summary?.slice(0, 100) + "..."}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why FootballBank */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-poppins font-bold text-[#111827] mb-4">
              Why FootballBank?
            </h2>
            <div className="w-24 h-1 bg-[#1F6FEB] mx-auto mb-10" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "fa-certificate",
                  title: "FIFA-Certified Agent",
                  desc: "Licensed professional representation ensuring compliance with international football regulations.",
                },
                {
                  icon: "fa-globe",
                  title: "Global Club Network",
                  desc: "Extensive connections with top clubs across Europe, Asia, and the Americas.",
                },
                {
                  icon: "fa-bolt",
                  title: "Rapid Profile Visibility",
                  desc: "Fast-track your talent exposure to scouts and clubs worldwide within 48 hours.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-8 rounded-xl shadow-sm border border-[#E5E7EB] text-center hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 bg-[#1F6FEB] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1F6FEB]">
                    <i className={`fa-solid ${icon} text-white text-2xl`} />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-[#111827] mb-4">
                    {title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Players */}
        <section className="py-16 bg-primary-bg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-poppins font-bold text-3xl text-primary-text">
                Featured Players
              </h2>
              <Link
                href="/players"
                className="text-accent-red hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                View All <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPlayers.map((player: Player) => (
                <div
                  key={player.id}
                  className="bg-primary-card rounded-lg overflow-hidden border border-divider shadow-sm"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={player.imageUrl}
                      alt={`Player ${player.firstName} ${player.lastName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-poppins font-semibold text-xl mb-1 text-primary-text">
                      {player.firstName} {player.lastName}
                    </h3>
                    <p className="text-primary-muted text-sm mb-4">
                      Short player description goes here.
                    </p>
                    <Link href={`/players/player-${player.id}`}>
                      <span className="block text-center bg-accent-red text-white py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer">
                        View Profile
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Scores Section */}
        <section className="py-16 bg-primary-secondary border-y border-divider">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-text">
                Live Scores
              </h2>
              <Link
                href="/live-scores"
                className="text-accent-red hover:text-accent-amber flex items-center gap-2 transition-colors"
              >
                View All <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            {false ? (
              <div className="bg-primary-bg rounded-lg border border-divider p-6 shadow-lg space-y-6">
                {[
                  {
                    league: "Premier League",
                    teams: ["Manchester United", "Liverpool"],
                    score: [2, 1],
                    flags: ["gb-eng", "gb-eng"],
                    minute: "65'",
                  },
                  {
                    league: "La Liga",
                    teams: ["Barcelona", "Real Madrid"],
                    score: [0, 0],
                    flags: ["es", "es"],
                    minute: "32'",
                  },
                ].map(({ league, teams, score, flags, minute }, index) => (
                  <div
                    key={index}
                    className="bg-primary-secondary rounded-lg p-4 border border-divider"
                  >
                    <div className="flex justify-between items-center text-xs mb-3">
                      <span className="text-primary-muted">
                        {league} • {minute}
                      </span>
                      <span className="bg-accent-amber/20 text-accent-amber px-2 py-1 rounded">
                        LIVE
                      </span>
                    </div>
                    {[0, 1].map((i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center mt-3"
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={`https://flagcdn.com/w40/${flags[i]}.png`}
                            alt={teams[i]}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                          <span className="font-medium">{teams[i]}</span>
                        </div>
                        <span className="font-poppins font-bold text-xl">
                          {score[i]}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <h3 className="font-poppins font-bold  text-primary-text text-center">
                Coming Soon
              </h3>
            )}
          </div>
        </section>

        {/* Affiliate CTA Banner */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-transparent to-primary-bg z-10"></div>
              <Image
                className="w-full h-64 object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1fe97496d6-4f61a53610d5c5887618.png"
                alt="Affiliate"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg">
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">
                      Pro Equipment, Pro Performance
                    </h2>
                    <p className="text-blue-100 mb-6">
                      Get 15% off on professional football gear with code:
                      FOOTBALLBANK15
                    </p>
                    <Link href="/shop">
                      <span className="inline-block bg-accent-amber hover:bg-opacity-80 text-primary-bg font-medium px-6 py-3 rounded-md transition-colors cursor-pointer">
                        Shop Now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-[#111827] mb-4">
                From Our Blog
              </h2>
              <div className="w-24 h-1 bg-accent-red mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {featuredPosts.map((post: Post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-all"
                >
                  <Image
                    src={`https://${post?.imageUrl[0]}`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-[#6B7280] mb-2">
                      {post?.createdAt}
                    </div>
                    <h3 className="font-poppins font-semibold text-[#111827] mb-3">
                      {post?.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm mb-4">
                      {post?.content.slice(0, 100)}
                    </p>
                    <Link href={`/posts/${post?.id}`}>
                      <span className="text-accent-red font-medium hover:underline cursor-pointer">
                        Read More
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <span className="bg-accent-red text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer">
                  Visit Blog
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="py-20 mb-16 bg-accent-red/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-red/80 to-accent-red/40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">
              Club or Brand Looking to Collaborate?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We connect talent with trusted organizations.
            </p>
            <Link href="/contact">
              <span className="bg-white text-accent-red px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                Get in Touch
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
