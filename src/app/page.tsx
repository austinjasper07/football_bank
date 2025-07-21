
import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FootballBank | Global Football Representation Platform</title>
        <meta
          name="description"
          content="Empowering football talent worldwide through professional representation and global exposure. Join FootballBank today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="FootballBank" />
        <meta
          property="og:description"
          content="Professional football representation and exposure for players worldwide."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/uxpilot-auth.appspot.com/77745a6748-9bba35cee02478f4c3b0.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://footballbank.soccer" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FootballBank" />
        <meta
          name="twitter:description"
          content="Join FootballBank to showcase your football profile globally."
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/uxpilot-auth.appspot.com/77745a6748-9bba35cee02478f4c3b0.png"
        />
      </Head>

      <div className="bg-[#F9FAFB]">
        {/* <!-- Hero Section --> */}
        <section
          id="hero"
          className="relative h-[600px] flex items-center bg-gradient-to-br from-primary-bg via-gray-50 to-blue-50 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-64 h-64 rounded-full bg-accent-blue blur-3xl -top-20 -left-20"></div>
            <div className="absolute w-64 h-64 rounded-full bg-accent-green blur-3xl bottom-20 right-20"></div>
          </div>
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-primary-text">
                Empowering Football{" "}
                <span className="text-accent-green">Talent</span> Worldwide
              </h1>
              <p className="text-primary-muted text-lg md:text-xl mb-8 font-inter">
                Connecting exceptional players with opportunities. Showcase your
                skills, get discovered, and take your football career to the
                next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <span className="bg-accent-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center transition-colors cursor-pointer">
                  Submit Your Profile
                </span>
                <span className="border border-divider hover:border-accent-blue text-primary-text px-6 py-3 rounded-md font-medium text-center transition-colors cursor-pointer">
                  Browse Players
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="why-footballbank" className="py-16 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-[#111827] mb-4">
                Why FootballBank?
              </h2>
              <div className="w-24 h-1 bg-[#1F6FEB] mx-auto" />
            </div>
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
                  <div className="w-16 h-16 bg-[#1F6FEB] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1F6FEB] transition-colors">
                    <i
                      className={`fa-solid ${icon} text-2xl text-white`}
                    />
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

        {/* <!-- Featured Players Section --> */}
        <section id="featured-players" className="py-16 bg-primary-bg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-text">
                Featured Players
              </h2>
              <span className="text-accent-blue hover:text-blue-600 flex items-center gap-2 transition-colors cursor-pointer">
                View All <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* <!-- Player Card 1 --> */}
              <div
                id="player-card-1"
                className="bg-primary-card rounded-lg overflow-hidden border border-divider shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fcd8adb17f-52dc957e0cbbaa719d66.png"
                    alt="professional football player in dark jersey, dramatic lighting, studio photography"
                  />
                  <div className="absolute top-4 left-4 bg-primary-card bg-opacity-90 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <img
                      src="https://flagcdn.com/w20/br.png"
                      alt="Brazil"
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="text-primary-text">Brazil</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent-green text-white rounded-full px-3 py-1 text-sm">
                    Available
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-xl mb-1 text-primary-text">
                    Carlos Silva
                  </h3>
                  <div className="flex items-center gap-2 text-primary-muted mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Striker
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Age: 23
                    </span>
                  </div>
                  <p className="text-primary-muted text-sm mb-4">
                    Former U21 international with exceptional finishing skills
                    and pace.
                  </p>
                  <span className="w-full block text-center bg-accent-blue hover:bg-blue-600 text-white py-2 rounded transition-colors cursor-pointer">
                    View Profile
                  </span>
                </div>
              </div>

              {/* <!-- Player Card 2 --> */}
              <div
                id="player-card-2"
                className="bg-primary-card rounded-lg overflow-hidden border border-divider shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c47a1440c2-0c6bc677896f13732a3e.png"
                    alt="female football player in professional jersey, athletic pose, studio lighting"
                  />
                  <div className="absolute top-4 left-4 bg-primary-card bg-opacity-90 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <img
                      src="https://flagcdn.com/w20/fr.png"
                      alt="France"
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="text-primary-text">France</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent-green text-white rounded-full px-3 py-1 text-sm">
                    Available
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-xl mb-1 text-primary-text">
                    Marie Laurent
                  </h3>
                  <div className="flex items-center gap-2 text-primary-muted mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Midfielder
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Age: 24
                    </span>
                  </div>
                  <p className="text-primary-muted text-sm mb-4">
                    Creative playmaker with excellent vision and passing
                    accuracy.
                  </p>
                  <span className="w-full block text-center bg-accent-blue hover:bg-blue-600 text-white py-2 rounded transition-colors cursor-pointer">
                    View Profile
                  </span>
                </div>
              </div>

              {/* <!-- Player Card 3 --> */}
              <div
                id="player-card-3"
                className="bg-primary-card rounded-lg overflow-hidden border border-divider shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/466cd0fd8c-c0139b2d109580ee130b.png"
                    alt="african football player in professional kit, confident pose, dramatic lighting"
                  />
                  <div className="absolute top-4 left-4 bg-primary-card bg-opacity-90 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <img
                      src="https://flagcdn.com/w20/ng.png"
                      alt="Nigeria"
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="text-primary-text">Nigeria</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent-green text-white rounded-full px-3 py-1 text-sm">
                    Available
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-xl mb-1 text-primary-text">
                    Adebayo Okonkwo
                  </h3>
                  <div className="flex items-center gap-2 text-primary-muted mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Defender
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Age: 26
                    </span>
                  </div>
                  <p className="text-primary-muted text-sm mb-4">
                    Powerful center-back with leadership qualities and aerial
                    dominance.
                  </p>
                  <span className="w-full block text-center bg-accent-blue hover:bg-blue-600 text-white py-2 rounded transition-colors cursor-pointer">
                    View Profile
                  </span>
                </div>
              </div>

              {/* <!-- Player Card 4 --> */}
              <div
                id="player-card-4"
                className="bg-primary-card rounded-lg overflow-hidden border border-divider shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/75061db071-5ed6dbd32cb30dedfc3d.png"
                    alt="spanish goalkeeper in professional kit, athletic stance, studio photography"
                  />
                  <div className="absolute top-4 left-4 bg-primary-card bg-opacity-90 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    <img
                      src="https://flagcdn.com/w20/es.png"
                      alt="Spain"
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="text-primary-text">Spain</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent-green text-white rounded-full px-3 py-1 text-sm">
                    Available
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-xl mb-1 text-primary-text">
                    Javier Mendez
                  </h3>
                  <div className="flex items-center gap-2 text-primary-muted mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Goalkeeper
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Age: 28
                    </span>
                  </div>
                  <p className="text-primary-muted text-sm mb-4">
                    Experienced shot-stopper with excellent reflexes and
                    distribution.
                  </p>
                  <span className="w-full block text-center bg-accent-blue hover:bg-blue-600 text-white py-2 rounded transition-colors cursor-pointer">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE SCORES SECTION */}
        <section
          id="live-scores"
          className="py-16 bg-primary-secondary border-y border-divider"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl">
                Live Scores
              </h2>
              <span className="text-accent-blue hover:text-accent-amber flex items-center gap-2 transition-colors cursor-pointer">
                View All <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>

            <div className="bg-primary-bg rounded-lg border border-divider p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                  <span className="text-accent-green font-medium">
                    Live Now
                  </span>
                </div>
                <div className="flex gap-2">
                  <select className="bg-primary-secondary text-primary-text border border-divider rounded px-3 py-2 focus:border-accent-amber focus:outline-none">
                    <option>Premier League</option>
                    <option>La Liga</option>
                    <option>Bundesliga</option>
                    <option>Serie A</option>
                    <option>Ligue 1</option>
                  </select>
                </div>
              </div>

              {/* <!-- Match Cards --> */}
              <div className="space-y-4">
                {/* Match 1 */}
                <div
                  id="match-1"
                  className="bg-primary-secondary rounded-lg p-4 border border-divider"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-primary-muted">
                      Premier League • 65&apos;
                    </div>
                    <div className="text-xs bg-accent-amber/20 text-accent-amber px-2 py-1 rounded">
                      LIVE
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://flagcdn.com/w40/gb-eng.png"
                        alt="Team 1"
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium">Manchester United</span>
                    </div>
                    <span className="font-poppins font-bold text-xl">2</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://flagcdn.com/w40/gb-eng.png"
                        alt="Team 2"
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium">Liverpool</span>
                    </div>
                    <span className="font-poppins font-bold text-xl">1</span>
                  </div>
                </div>

                {/* Match 2 */}
                <div
                  id="match-2"
                  className="bg-primary-secondary rounded-lg p-4 border border-divider"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-primary-muted">
                      La Liga • 32&apos;
                    </div>
                    <div className="text-xs bg-accent-amber/20 text-accent-amber px-2 py-1 rounded">
                      LIVE
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://flagcdn.com/w40/es.png"
                        alt="Team 1"
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium">Barcelona</span>
                    </div>
                    <span className="font-poppins font-bold text-xl">0</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://flagcdn.com/w40/es.png"
                        alt="Team 2"
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium">Real Madrid</span>
                    </div>
                    <span className="font-poppins font-bold text-xl">0</span>
                  </div>
                </div>

                {/* Match 3 */}
                <div
                  id="match-3"
                  className="bg-primary-secondary rounded-lg p-4 border border-divider"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-primary-muted">
                      Bundesliga • 78&apos;
                    </div>
                    <div className="text-xs bg-accent-amber/20 text-accent-amber px-2 py-1 rounded">
                      LIVE
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://flagcdn.com/w40/de.png"
                        alt="Team 1"
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium">Bayern Munich</span>
                    </div>
                    <span className="font-poppins font-bold text-xl">3</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://flagcdn.com/w40/de.png"
                        alt="Team 2"
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-medium">Borussia Dortmund</span>
                    </div>
                    <span className="font-poppins font-bold text-xl">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AFFILIATE BANNER */}
        <section id="affiliate-banner" className="py-16 bg-white">
          <section id="affiliate-banner" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-transparent to-primary-bg z-10"></div>
                <img
                  className="w-full h-64 object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1fe97496d6-4f61a53610d5c5887618.png"
                  alt="football equipment and gear on dark background, professional sports equipment, moody lighting"
                />
                <div className="absolute inset-0 flex items-center z-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-lg">
                      <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
                        Pro Equipment, Pro Performance
                      </h2>
                      <p className="text-primary-muted mb-6">
                        Get 15% off on professional football gear with code:
                        FOOTBALLBANK15
                      </p>
                      <span className="inline-block bg-accent-amber hover:bg-opacity-80 text-primary-bg font-medium px-6 py-3 rounded-md transition-colors cursor-pointer">
                        Shop Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Adidas Boots",
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8c1a4269ac-b670fac6f87e55969575.png",
                },
                {
                  title: "Nike Jerseys",
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6c28632ffe-9e5fe7a65de64543d244.png",
                },
                {
                  title: "Puma Gear",
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9bd4876477-5160907c79f8d5f948ff.png",
                },
                {
                  title: "Accessories",
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/86487f9fe6-9b97f3aaeab42eaf8317.png",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F9FAFB] rounded-xl p-6 text-center hover:shadow-md transition-all cursor-pointer"
                >
                  <Image
                    className="w-16 h-16 mx-auto mb-4 rounded-lg"
                    src={item.img}
                    alt={item.title}
                    objectFit="cover"
                    width={64}
                    height={64}
                  />
                  <h3 className="font-medium text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-shopping-cart text-[#1F6FEB] mr-2" />
                    <span className="text-sm text-[#6B7280]">Shop Now</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section id="blog" className="py-20 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-[#111827] mb-4">
                From Our Blog
              </h2>
              <div className="w-24 h-1 bg-[#1F6FEB] mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  date: "January 15, 2024",
                  title: "Transfer Window Updates: Key Moves This Season",
                  summary:
                    "Latest transfer news and how our represented players are making moves across top European leagues.",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/69d86694c6-8ea5f39a5bd899b2ff94.png",
                },
                {
                  date: "January 12, 2024",
                  title: "Youth Development: Building Tomorrow's Stars",
                  summary:
                    "How our academy partnerships are nurturing the next generation of football talent worldwide.",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/4e1ef6dd3d-e168ae79ffa2999e1fca.png",
                },
                {
                  date: "January 10, 2024",
                  title: "Agent Insights: Navigating Professional Contracts",
                  summary:
                    "Essential tips for players entering professional football and understanding contract negotiations.",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/2129b30536-ab02298a9adfd2271ffc.png",
                },
              ].map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-all"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="p-6">
                    <div className="text-sm text-[#6B7280] mb-2">
                      {post.date}
                    </div>
                    <h3 className="font-poppins font-semibold text-[#111827] mb-3">
                      {post.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm mb-4">
                      {post.summary}
                    </p>
                    <button className="text-[#1F6FEB] font-medium hover:underline">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-[#1F6FEB] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Visit Blog
              </button>
            </div>
          </div>
        </section>

        {/* PARTNER CTA */}
        <section
          id="partner-cta"
          className="py-20 bg-[#1F6FEB] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F6FEB] to-blue-600"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">
              Club or Brand Looking to Collaborate?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We connect talent with trusted organizations.
            </p>
            <button className="bg-white text-[#1F6FEB] px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
