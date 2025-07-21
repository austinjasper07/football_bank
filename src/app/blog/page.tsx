import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | FootballBank',
  description: 'Insights, player spotlights, and football talent updates.',
};

const BlogPage = () => {
  return (
    <main className="bg-primary-bg text-primary-text font-inter">
      {/* Hero */}
      <section className="py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Football Talent Hub</h1>
          <p className="text-primary-muted text-lg mb-8">
            Latest insights, player spotlights, and transfer updates from the world of football talent scouting.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {['All Posts', 'Player Spotlights', 'Transfer News', 'Career Tips', 'Success Stories'].map((cat) => (
              <span
                key={cat}
                className={`${
                  cat === 'All Posts'
                    ? 'bg-accent-blue text-white'
                    : 'bg-primary-white border border-divider text-primary-text hover:text-accent-blue hover:border-accent-blue'
                } px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary-white rounded-xl border border-divider shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ba48a86f0a-ae89721a666aa38840f5.png"
                alt="Featured player"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-accent-green text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-accent-blue text-sm font-medium">Player Spotlight</span>
                <span className="text-primary-muted text-sm">Dec 15, 2024</span>
              </div>
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl mb-4">Rising Star: Marcus Silva&apos;s Journey</h2>
              <p className="text-primary-muted mb-6">
                At just 19, Marcus Silva has caught the attention of top European clubs. His journey from São Paulo&apos;s youth academy to professional football is inspiring.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-medium">Read Full Story</button>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-eye text-primary-muted" />
                  <span className="text-primary-muted text-sm">2.4k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="pb-16 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-primary-white rounded-xl border border-divider shadow-sm hover:shadow-lg hover:border-accent-blue transition-all"
              >
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                  <div className="absolute top-3 left-3">
                    <span className={`bg-${post.badgeColor} ${post.badgeTextColor} px-2 py-1 rounded text-xs font-medium`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-primary-muted">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3 text-primary-text">{post.title}</h3>
                  <p className="text-primary-muted text-sm mb-4">{post.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-blue text-sm font-medium cursor-pointer hover:underline">Read More</span>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-heart text-primary-muted text-sm" />
                      <span className="text-primary-muted text-sm">{post.likes}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-primary-white hover:bg-accent-blue border border-divider hover:border-accent-blue text-primary-text hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-16 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-white rounded-xl border border-divider shadow-lg p-8 md:p-12 text-center">
            <h2 className="font-poppins font-bold text-3xl mb-4">Stay Updated</h2>
            <p className="text-primary-muted text-lg mb-8">
              Get the latest football insights, player spotlights, and news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-white border border-divider rounded-lg px-4 py-3 text-primary-text placeholder-primary-muted focus:border-accent-amber focus:outline-none"
              />
              <button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const blogPosts = [
  {
    id: 1,
    title: 'Premier League Club Signs Promising Striker from FootballBank',
    date: 'Dec 12, 2024',
    readTime: '3 min read',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b0c04f6a4f-1656af3cc29344a245ca.png',
    summary: '21-year-old striker Alex Thompson secures a move to a top-tier club after discovery via our platform.',
    category: 'Transfer News',
    badgeColor: 'accent-amber',
    badgeTextColor: 'text-primary-text',
    likes: 156,
  },
  {
    id: 2,
    title: '5 Essential Skills Every Young Footballer Must Master',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b9eae14f30-cc2667aeba441fabffea.png',
    summary: 'Discover key attributes that separate good players from great ones in modern football.',
    category: 'Career Tips',
    badgeColor: 'accent-green',
    badgeTextColor: 'text-white',
    likes: 243,
  },
  {
    id: 3,
    title: 'How Modern Scouting is Changing Football Recruitment',
    date: 'Dec 8, 2024',
    readTime: '4 min read',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b0f174bb7d-aa0152ff27894568dd6f.png',
    summary: 'Technology and analytics are revolutionizing how clubs discover and evaluate talent.',
    category: 'Industry Insights',
    badgeColor: 'accent-blue',
    badgeTextColor: 'text-white',
    likes: 189,
  },
  {
    id: 4,
    title: "From Platform to Pitch: Sarah's Professional Debut",
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f4b92067ad-d9c12d78ed14d8201fd9.png',
    summary: 'Sarah used FootballBank to showcase her skills and earn her first pro contract.',
    category: 'Success Story',
    badgeColor: 'accent-green',
    badgeTextColor: 'text-white',
    likes: 312,
  },
  {
    id: 5,
    title: 'The Rise of Data-Driven Player Development',
    date: 'Dec 3, 2024',
    readTime: '7 min read',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e986713e7f-8fffc92483a4ae267fa3.png',
    summary: 'Analytics and tracking tech are shaping football training and recruitment.',
    category: 'Analysis',
    badgeColor: 'accent-amber',
    badgeTextColor: 'text-primary-text',
    likes: 198,
  },
  {
    id: 6,
    title: 'Building Mental Resilience in Young Athletes',
    date: 'Dec 1, 2024',
    readTime: '4 min read',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b1ea53e2c0-dc774abdd5e6661c1797.png',
    summary: 'Psychological development is crucial for youth players to achieve long-term success.',
    category: 'Youth Focus',
    badgeColor: 'accent-blue',
    badgeTextColor: 'text-white',
    likes: 267,
  },
];

export default BlogPage;
