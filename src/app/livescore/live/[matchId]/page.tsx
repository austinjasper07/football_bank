import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Live Match | FootballBank.soccer',
  description: 'Empowering football talent worldwide through visibility and opportunity.',
};

export default function LiveMatchPage() {
  return (
    <div className="bg-primary-bg font-inter text-primary-text py-16">
      {/* Match Header */}
      <section
        id="match-header"
        className="py-6 bg-primary-secondary border-b border-divider"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Team A"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl">
                    Real Madrid
                  </div>
                  <div className="text-primary-muted text-sm">HOME</div>
                </div>
              </div>

              <div className="mx-6 text-center">
                <div className="font-poppins font-bold text-4xl text-accent-green">
                  2 - 1
                </div>
                <div className="text-accent-amber text-sm">78&apos; LIVE</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl">
                    Barcelona
                  </div>
                  <div className="text-primary-muted text-sm">AWAY</div>
                </div>
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                  alt="Team B"
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle text-xs animate-pulse" /> LIVE
              </span>
              <span className="text-primary-muted">
                La Liga • Santiago Bernabéu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stream & Sidebar */}
      <section id="stream-section" className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-3">
              {/* Video Player */}
              <div className="bg-black rounded-xl overflow-hidden mb-6 relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-green/20 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fa-solid fa-play-circle text-6xl text-white mb-4 cursor-pointer hover:text-accent-blue transition-colors" />
                    <p className="text-white text-xl font-semibold">
                      Live Stream
                    </p>
                    <p className="text-white/70">Real Madrid vs Barcelona</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <i className="fa-solid fa-play cursor-pointer hover:text-accent-blue" />
                      <i className="fa-solid fa-volume-high cursor-pointer hover:text-accent-blue" />
                      <span className="text-sm">78:32 / LIVE</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <i className="fa-solid fa-expand cursor-pointer hover:text-accent-blue" />
                      <i className="fa-solid fa-cog cursor-pointer hover:text-accent-blue" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Timeline */}
              <div className="bg-primary-secondary rounded-xl p-6 mb-6">
                <h3 className="font-poppins font-bold text-xl mb-4">
                  Match Timeline
                </h3>
                <div className="space-y-4">
                  {[
                    [
                      "78'",
                      "Goal! Benzema scores for Real Madrid",
                      "fa-futbol",
                      "text-accent-green",
                    ],
                    [
                      "65'",
                      "Yellow card for Pedri (Barcelona)",
                      "fa-square",
                      "text-accent-amber",
                    ],
                    [
                      "52'",
                      "Goal! Lewandowski equalizes for Barcelona",
                      "fa-futbol",
                      "text-accent-blue",
                    ],
                    [
                      "23'",
                      "Goal! Vinícius Jr. opens scoring",
                      "fa-futbol",
                      "text-accent-green",
                    ],
                  ].map(([time, desc, icon, color], i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 bg-primary-bg rounded-lg"
                    >
                      <span className="text-accent-amber font-bold min-w-[40px]">
                        {time}
                      </span>
                      <i className={`fa-solid ${icon} ${color}`} />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Match Stats */}
              <div className="bg-primary-secondary rounded-xl p-6">
                <h3 className="font-poppins font-bold text-xl mb-4">
                  Match Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Possession</span>
                      <span className="font-semibold">58% - 42%</span>
                    </div>
                    <div className="w-full bg-primary-bg rounded-full h-2">
                      <div
                        className="bg-accent-green h-2 rounded-full"
                        style={{ width: "58%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      ["Shots on Target", "7 - 4"],
                      ["Corners", "5 - 3"],
                      ["Fouls", "12 - 8"],
                    ].map(([label, value], i) => (
                      <div
                        className="flex justify-between items-center"
                        key={i}
                      >
                        <span>{label}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Sidebar */}
            <div className="lg:col-span-1">
              {/* Live Chat */}
              <div className="bg-primary-secondary rounded-xl p-4 mb-6 h-96">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-bold">Live Chat</h3>
                  <span className="text-accent-green text-sm">
                    1,247 watching
                  </span>
                </div>
                <div className="space-y-3 h-64 overflow-y-auto mb-4">
                  {[
                    [
                      "MadridFan",
                      "What a goal by Benzema! 🔥",
                      "text-accent-blue",
                    ],
                    [
                      "FootballExpert",
                      "Barcelona needs to press higher",
                      "text-accent-amber",
                    ],
                    ["CuleBarca", "Come on Barça! ⚡", "text-accent-green"],
                  ].map(([user, msg, color], i) => (
                    <div className="text-sm" key={i}>
                      <span className={`${color} font-semibold`}>{user}:</span>{" "}
                      <span className="text-primary-muted">{msg}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-primary-bg border border-divider rounded-lg px-3 py-2 text-sm focus:border-accent-amber focus:outline-none"
                  />
                  <button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-3 py-2 rounded-lg">
                    <i className="fa-solid fa-paper-plane" />
                  </button>
                </div>
              </div>

              {/* Upcoming Matches */}
              <div className="bg-primary-secondary rounded-xl p-4">
                <h3 className="font-poppins font-bold mb-4">
                  Upcoming Streams
                </h3>
                {[
                  ["Man City vs Arsenal", "20:00", "Premier League"],
                  ["PSG vs Bayern", "21:00", "Champions League"],
                  ["Juventus vs Milan", "22:30", "Serie A"],
                ].map(([match, time, league], i) => (
                  <div className="bg-primary-bg rounded-lg p-3 mb-3" key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm">{match}</span>
                      <span className="text-accent-amber text-xs">{time}</span>
                    </div>
                    <div className="text-primary-muted text-xs">{league}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Highlights */}
      <section id="related-highlights" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl mb-8">
            Related Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [
                "El Clásico Best Goals",
                "2.1M views • 2 days ago",
                "from-accent-blue/20 to-accent-green/20",
              ],
              [
                "Benzema Hat-trick",
                "890K views • 1 week ago",
                "from-accent-amber/20 to-accent-red/20",
              ],
              [
                "Barcelona Comeback",
                "1.5M views • 3 days ago",
                "from-accent-green/20 to-accent-blue/20",
              ],
            ].map(([title, views, gradient], i) => (
              <div
                key={i}
                className="bg-primary-secondary rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center`}
                >
                  <i className="fa-solid fa-play-circle text-4xl text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-primary-muted text-sm">{views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
