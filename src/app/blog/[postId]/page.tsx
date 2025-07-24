// pages/blog.tsx
import Head from 'next/head';

export default function BlogArticle() {
  return (
    <>
      <Head>
        <title>The Modern Football Scout | FootballBank Blog</title>
        <meta name="description" content="How technology is revolutionizing football scouting" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <main className="bg-primary-bg font-inter text-primary-text">
        {/* Header is assumed to be handled elsewhere */}

        {/* Breadcrumb */}
        <section className="py-6 border-b border-divider">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-center space-x-2 text-sm">
              <span className="text-primary-muted hover:text-accent-red cursor-pointer">Home</span>
              <i className="fa-solid fa-chevron-right text-primary-muted text-xs" />
              <span className="text-primary-muted hover:text-accent-red cursor-pointer">Blog</span>
              <i className="fa-solid fa-chevron-right text-primary-muted text-xs" />
              <span className="text-primary-text">Football Scouting</span>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-accent-red text-white px-3 py-1 rounded-full text-sm font-medium">Scouting</span>
                  <span className="text-primary-muted text-sm">8 min read</span>
                  <span className="text-primary-muted text-sm">Dec 15, 2024</span>
                </div>

                <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-6">
                  The Modern Football Scout: How Technology is Revolutionizing Player Discovery
                </h1>

                <p className="text-xl text-primary-muted leading-relaxed mb-8">
                  Discover how data analytics, AI, and modern scouting techniques are transforming how football clubs identify and recruit talent.
                </p>

                <div className="flex items-center gap-4 pb-8 border-b border-divider">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Marcus Thompson"
                  />
                  <div>
                    <div className="font-medium">Marcus Thompson</div>
                    <div className="text-primary-muted text-sm">Senior Football Analyst</div>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <button className="text-primary-muted hover:text-accent-red">
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </button>
                    <button className="text-primary-muted hover:text-accent-red">
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </button>
                    <button className="text-primary-muted hover:text-accent-red">
                      <i className="fa-solid fa-share text-lg"></i>
                    </button>
                  </div>
                </div>
              </header>
              {/* Featured Image */}
              <div className="mb-12">
                <img
                  className="w-full h-[400px] object-cover rounded-xl"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2ee014f0e2-bdcf368d1b14ebf708d1.png"
                  alt="Modern football scout using tablet"
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-invert max-w-none space-y-12">
                {/* Intro Paragraphs */}
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    The world of football scouting has undergone a dramatic transformation in recent years. Gone are the days
                    when scouts relied solely on their eyes and instincts to identify promising talent. Today’s football scouts
                    are armed with sophisticated data analytics tools, AI algorithms, and comprehensive databases.
                  </p>
                  <p>
                    This technological revolution has not only changed how scouts work but has also democratized talent
                    discovery, allowing clubs of all sizes to compete for the best players regardless of traditional scouting
                    networks.
                  </p>
                </div>

                {/* Key Statistics */}
                <section className="bg-primary-secondary rounded-xl p-8 border border-divider space-y-8">
                  <h3 className="font-poppins font-semibold text-2xl text-accent-red flex items-center">
                    <i className="fa-solid fa-chart-line mr-3"></i>
                    Key Statistics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      ['89%', 'of top clubs now use data analytics'],
                      ['67%', 'reduction in scouting costs'],
                      ['156%', 'increase in global talent discovery'],
                      ['43%', 'faster player identification'],
                    ].map(([stat, desc]) => (
                      <div key={stat} className="text-center">
                        <div className="text-3xl font-bold text-accent-green mb-2">{stat}</div>
                        <div className="text-primary-muted">{desc}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Data Revolution */}
                <section>
                  <h2 className="font-poppins font-bold text-2xl mb-6">The Data Revolution in Football Scouting</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Modern football scouting has embraced big data in ways that were unimaginable just a decade ago. Advanced
                    metrics track everything from sprint speed and passing accuracy to decision-making and injury risk factors.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Companies like Opta, StatsBomb, and Wyscout allow scouts to analyze thousands of players simultaneously,
                    filtering by specific criteria and identifying patterns that aren’t visible to the naked eye.
                  </p>
                </section>

                {/* Expert Insight */}
                <section className="bg-accent-red/10 rounded-xl p-8 border border-accent-red border-opacity-20">
                  <h3 className="font-poppins font-semibold text-xl mb-4 text-accent-red flex items-center">
                    <i className="fa-solid fa-lightbulb mr-3"></i>
                    Expert Insight
                  </h3>
                  <blockquote className="italic text-lg">
                    “The integration of AI and machine learning has allowed us to identify players who might have been
                    overlooked by traditional scouting methods. We&apos;re now finding gems in leagues that were previously off our
                    radar.”
                  </blockquote>
                  <cite className="block text-primary-muted mt-4">- Sarah Mitchell, Head of Analytics at Premier League Club</cite>
                </section>
                {/* AI and Machine Learning */}
                <section>
                  <h2 className="font-poppins font-bold text-2xl mb-6">AI and Machine Learning Applications</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Artificial intelligence is taking football scouting to the next level. Machine learning algorithms can now
                    predict a player&apos;s potential, injury likelihood, and fit with different playing styles.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Performance prediction models based on historical data',
                      'Automated video analysis for tactical understanding',
                      'Injury risk assessment through biomechanical analysis',
                      'Market value predictions and transfer recommendations',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="fa-solid fa-check text-accent-green mt-1"></i>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Advantages and Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-primary-secondary rounded-xl p-6 border border-divider">
                    <h3 className="font-poppins font-semibold text-xl mb-4 text-accent-green flex items-center">
                      <i className="fa-solid fa-thumbs-up mr-3"></i>
                      Advantages
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Global reach and accessibility',
                        'Objective performance analysis',
                        'Cost-effective talent discovery',
                        'Faster decision-making process',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <i className="fa-solid fa-plus text-accent-green text-sm mt-1"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary-secondary rounded-xl p-6 border border-divider">
                    <h3 className="font-poppins font-semibold text-xl mb-4 text-accent-amber flex items-center">
                      <i className="fa-solid fa-exclamation-triangle mr-3"></i>
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Over-reliance on data vs. human judgment',
                        'Context and situational factors',
                        'Technology adaptation costs',
                        'Data quality and availability',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <i className="fa-solid fa-minus text-accent-amber text-sm mt-1"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* The Future */}
                <section>
                  <h2 className="font-poppins font-bold text-2xl mb-6">The Future of Football Scouting</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    As we look toward the future, the integration of technology in football scouting will only deepen. Virtual
                    reality, biometric monitoring, and more sophisticated AI models will continue to reshape the talent
                    pipeline.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    However, the human element remains vital. The most successful clubs will blend innovative tools with expert
                    human judgment — a hybrid model that enhances, not replaces, traditional scouting.
                  </p>
                </section>

                {/* Tags */}
                <section className="mt-12 pt-8 border-t border-divider">
                  <h3 className="font-poppins font-semibold text-lg mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Football Scouting',
                      'Data Analytics',
                      'AI in Sports',
                      'Player Development',
                      'Technology',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-secondary text-accent-red px-3 py-1 rounded-full text-sm hover:bg-accent-red hover:text-white cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Author Bio */}
                <section className="mt-12 bg-primary-secondary rounded-xl p-8 border border-divider">
                  <div className="flex items-start gap-6">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="Marcus Thompson"
                    />
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-xl mb-2">Marcus Thompson</h3>
                      <p className="text-primary-muted mb-4">
                        Senior Football Analyst with over 15 years of experience in sports data analytics and player scouting.
                        Marcus has worked with several Premier League clubs and contributes to football analytics publications.
                      </p>
                      <div className="flex gap-4">
                        <button className="text-primary-muted hover:text-accent-red transition-colors">
                          <i className="fa-brands fa-twitter text-lg"></i>
                        </button>
                        <button className="text-primary-muted hover:text-accent-red transition-colors">
                          <i className="fa-brands fa-linkedin text-lg"></i>
                        </button>
                        <button className="text-primary-muted hover:text-accent-red transition-colors">
                          <i className="fa-solid fa-envelope text-lg"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </article>
              {/* Related Articles */}
              <section className="mt-16">
                <h2 className="font-poppins font-bold text-2xl mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      tag: 'Youth Development',
                      tagColor: 'bg-accent-green',
                      title: 'Building the Next Generation: Modern Youth Academy Systems',
                      desc: 'How top clubs are revolutionizing youth development through advanced training methodologies...',
                      date: 'Dec 10, 2024',
                      readTime: '6 min read',
                      image:
                        'https://storage.googleapis.com/uxpilot-auth.appspot.com/723b0481ce-4af03db653b192006603.png',
                    },
                    {
                      tag: 'Transfer Market',
                      tagColor: 'bg-accent-amber',
                      title: 'Transfer Market Trends: What Data Tells Us About Player Values',
                      desc: 'An in-depth analysis of how market values are determined in modern football...',
                      date: 'Dec 8, 2024',
                      readTime: '7 min read',
                      image:
                        'https://storage.googleapis.com/uxpilot-auth.appspot.com/a824ebc5b3-7cb7cc9b946912b0e400.png',
                    },
                  ].map((article, i) => (
                    <article
                      key={i}
                      className="bg-primary-secondary rounded-xl border border-divider overflow-hidden hover:border-accent-red transition-colors cursor-pointer"
                    >
                      <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
                      <div className="p-6">
                        <span className={`${article.tagColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {article.tag}
                        </span>
                        <h3 className="font-poppins font-semibold text-xl mt-4 mb-3">{article.title}</h3>
                        <p className="text-primary-muted mb-4">{article.desc}</p>
                        <div className="flex items-center gap-4 text-sm text-primary-muted">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Footer is assumed globally handled */}
      </main>
    </>
  );
}
