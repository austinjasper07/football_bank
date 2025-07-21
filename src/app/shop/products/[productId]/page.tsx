import Image from 'next/image';
import { FC } from 'react';

const ProductDetailsPage: FC = () => {
  return (
    <main className="bg-primary-bg font-inter text-primary-text">
      {/* Product Details */}
      <section id="product-details" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div id="product-images" className="space-y-4">
                <div className="relative">
                  <Image
                    id="main-image"
                    className="w-full h-96 md:h-[500px] object-cover rounded-xl bg-primary-card border border-divider"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ed3b50b5f5-5d0cdc4b04a8ae60f70c.png"
                    alt="Nike Mercurial Vapor 15 football boots"
                    width={500}
                    height={500}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-green text-white px-3 py-1 rounded-full text-sm font-medium">Best Seller</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-card/90 text-primary-text p-3 rounded-full cursor-pointer hover:text-accent-red transition-colors border border-divider">
                      <i className="fa-solid fa-heart text-lg" />
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {Array(4).fill(null).map((_, i) => (
                    <Image
                      key={i}
                      className={`w-full h-20 object-cover rounded-lg bg-primary-card cursor-pointer border-2 ${i === 0 ? 'border-accent-blue' : 'border-divider hover:border-accent-blue transition-colors'}`}
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ed3b50b5f5-5d0cdc4b04a8ae60f70c.png"
                      alt={`Boot view ${i + 1}`}
                      width={80}
                      height={80}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div id="product-info" className="space-y-6">
                <div>
                  <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-primary-text">Nike Mercurial Vapor 15</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {Array(5).fill(null).map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-accent-amber" />
                      ))}
                      <span className="text-primary-muted ml-2">4.8 (124 reviews)</span>
                    </div>
                    <span className="text-primary-muted">|</span>
                    <span className="text-accent-green font-medium">In Stock</span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-accent-blue font-bold text-3xl">£189.99</span>
                    <span className="text-primary-muted line-through text-xl">£249.99</span>
                    <span className="bg-accent-green text-white px-2 py-1 rounded text-sm font-medium">24% OFF</span>
                  </div>
                </div>

                <div className="border-t border-divider pt-6">
                  <p className="text-primary-muted mb-6">Professional football boots with advanced traction technology. Engineered for speed and precision on firm ground surfaces. Features Nike&apos;s latest innovation in boot design.</p>

                  {/* Size Selection */}
                  <div className="mb-6">
                    <h3 className="font-poppins font-semibold text-lg mb-3 text-primary-text">Size (UK)</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {[6, 7, 8, 9, 10, 11, 12, 13].map((size) => (
                        <button
                          key={size}
                          className={`border py-2 px-3 rounded-lg transition-colors ${size === 8 ? 'border-accent-blue bg-accent-blue text-white' : size === 13 ? 'border-divider bg-primary-card text-primary-muted cursor-not-allowed opacity-50' : 'border-divider bg-primary-card text-primary-text hover:border-accent-blue'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <span className="text-accent-blue text-sm cursor-pointer hover:underline mt-2 inline-block">Size Guide</span>
                  </div>

                  {/* Quantity */}
                  <div className="mb-6">
                    <h3 className="font-poppins font-semibold text-lg mb-3 text-primary-text">Quantity</h3>
                    <div className="flex items-center border border-divider rounded-lg w-32 bg-primary-card">
                      <button className="px-3 py-2 text-primary-text hover:text-accent-blue">-</button>
                      <span className="px-3 py-2 border-l border-r border-divider text-center flex-1">1</span>
                      <button className="px-3 py-2 text-primary-text hover:text-accent-blue">+</button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 mb-6">
                    <button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white py-4 rounded-lg font-semibold text-lg transition-colors">
                      <i className="fa-solid fa-cart-shopping mr-2" />
                      Add to Cart
                    </button>
                    <button className="w-full bg-primary-card border border-divider hover:border-accent-blue text-primary-text hover:text-accent-blue py-4 rounded-lg font-semibold transition-colors">
                      Buy Now
                    </button>
                  </div>

                  {/* Trust Signals */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-truck-fast text-accent-green" />
                      <span className="text-primary-muted">Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-shield text-accent-green" />
                      <span className="text-primary-muted">2 Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-undo text-accent-green" />
                      <span className="text-primary-muted">30 Day Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
