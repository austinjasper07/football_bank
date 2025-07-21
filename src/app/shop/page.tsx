import Image from 'next/image';

export default function ShopPage() {
  return (
    <main className="bg-primary-bg font-inter text-primary-text">
      {/* Shop Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Football Gear Shop</h1>
          <p className="text-primary-muted text-lg mb-8">
            Premium football equipment and gear curated for players at every level.
          </p>
          <div className="max-w-md mx-auto mb-2 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3 pl-12 text-primary-text placeholder-primary-muted focus:border-accent-amber focus:outline-none"
            />
            <i className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-muted"></i>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 mb-12">
            {['All Products', 'Football Boots', 'Jerseys', 'Balls', 'Training Gear', 'Accessories'].map((cat, idx) => (
              <span
                key={cat}
                className={`${
                  idx === 0 ? 'bg-accent-blue text-white' : 'bg-primary-card border border-divider text-primary-text hover:text-accent-blue'
                } px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-poppins font-bold text-3xl mb-8">Featured Products</h2>
          {/* You would dynamically map products here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Product Card */}
            <div className="bg-primary-card rounded-xl border border-divider shadow-lg overflow-hidden hover:border-accent-blue transition-colors">
              <div className="relative h-64">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ed3b50b5f5-5d0cdc4b04a8ae60f70c.png"
                  alt="Nike Mercurial Vapor 15"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent-green text-white px-2 py-1 rounded text-xs font-medium">Best Seller</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-lg mb-2">Nike Mercurial Vapor 15</h3>
                <p className="text-primary-muted text-sm mb-4">Professional football boots with advanced traction technology</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent-blue font-bold text-xl">£189.99</span>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-accent-amber text-sm"></i>
                    <span className="text-primary-muted text-sm">4.8 (124)</span>
                  </div>
                </div>
                <button className="w-full bg-accent-blue hover:bg-opacity-90 text-white py-3 rounded-lg font-medium transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}
