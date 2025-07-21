// pages/order-summary.tsx
import Head from "next/head";

export default function OrderSummary() {
  return (
    <>
      <Head>
        <title>Order Summary|FootballBank</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="bg-primary-bg font-inter text-primary-text">
    
        <main className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                Order Summary
              </h1>
              <p className="text-primary-muted text-lg">
                Review the details of your order below
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Order Info */}
                <section className="bg-primary-secondary rounded-2xl border border-divider p-8 shadow-2xl">
                  <div className="flex justify-between mb-6 pb-6 border-b border-divider">
                    <h2 className="font-poppins font-semibold text-2xl">
                      Order Information
                    </h2>
                    <div className="flex items-center gap-2 bg-accent-amber/20 px-4 py-2 rounded-full">
                      <i className="fa-solid fa-clock text-accent-amber"></i>
                      <span className="text-accent-amber font-medium">
                        Pending
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-primary-muted text-sm font-medium block mb-1">
                          Order ID
                        </label>
                        <span className="font-mono text-accent-blue font-semibold text-lg">
                          #FB-0251938
                        </span>
                      </div>
                      <div>
                        <label className="text-primary-muted text-sm font-medium block mb-1">
                          Order Date
                        </label>
                        <span className="text-primary-text">
                          December 15, 2024 at 3:45 PM
                        </span>
                      </div>
                      <div>
                        <label className="text-primary-muted text-sm font-medium block mb-1">
                          Estimated Delivery
                        </label>
                        <span className="text-primary-text">
                          December 22–25, 2024
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-primary-muted text-sm font-medium block mb-1">
                          Shipping Method
                        </label>
                        <span className="text-primary-text">
                          Standard - 5 to 7 Days
                        </span>
                      </div>
                      <div>
                        <label className="text-primary-muted text-sm font-medium block mb-1">
                          Contact Email
                        </label>
                        <span className="text-primary-text">
                          player@example.com
                        </span>
                      </div>
                      <div>
                        <label className="text-primary-muted text-sm font-medium block mb-1">
                          Billing Address
                        </label>
                        <span className="text-primary-text">
                          123 Football St, Soccer City, FC 12345
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Product List */}
                <section className="bg-primary-secondary rounded-2xl border border-divider p-8 shadow-2xl">
                  <h2 className="font-poppins font-semibold text-2xl mb-6">
                    Order Items
                  </h2>
                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="flex items-center gap-6 p-6 bg-primary-bg rounded-xl border border-divider">
                      <div className="w-20 h-20 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-crown text-accent-blue text-2xl"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg mb-1">
                          Premium Player Submission
                        </h3>
                        <p className="text-primary-muted text-sm mb-2">
                          Enhanced profile visibility with priority placement
                        </p>
                        <div className="flex items-center gap-4 text-sm text-primary-muted">
                          <span>Duration: 6 months</span>
                          <span>•</span>
                          <span>Includes: Analytics dashboard</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary-muted text-sm mb-1">
                          Qty: 1
                        </div>
                        <div className="font-semibold text-lg">$49.99</div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-6 p-6 bg-primary-bg rounded-xl border border-divider">
                      <div className="w-20 h-20 bg-accent-amber/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-chart-line text-accent-amber text-2xl"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg mb-1">
                          Advanced Analytics Package
                        </h3>
                        <p className="text-primary-muted text-sm mb-2">
                          Detailed performance metrics and insights
                        </p>
                        <div className="flex items-center gap-4 text-sm text-primary-muted">
                          <span>Duration: 3 months</span>
                          <span>•</span>
                          <span>
                            Features: Performance tracking, Scout views
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary-muted text-sm mb-1">
                          Qty: 1
                        </div>
                        <div className="font-semibold text-lg">$29.99</div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-6 p-6 bg-primary-bg rounded-xl border border-divider">
                      <div className="w-20 h-20 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-tshirt text-accent-green text-2xl"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg mb-1">
                          FootballBank Training Jersey
                        </h3>
                        <p className="text-primary-muted text-sm mb-2">
                          Official branded training wear
                        </p>
                        <div className="flex items-center gap-4 text-sm text-primary-muted">
                          <span>Size: Large</span>
                          <span>•</span>
                          <span>Color: Navy Blue</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary-muted text-sm mb-1">
                          Qty: 2
                        </div>
                        <div className="font-semibold text-lg">$21.98</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
                {/* Right Column */}
                <div className="lg:col-span-1">
                  <section className="bg-primary-secondary rounded-2xl border border-divider p-8 shadow-2xl sticky top-24">
                    <h2 className="font-poppins font-semibold text-2xl mb-6">
                      Price Breakdown
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-primary-text">
                        <span>Subtotal</span>
                        <span>$101.96</span>
                      </div>
                      <div className="flex justify-between text-accent-green">
                        <span>Discount (FIRST20)</span>
                        <span>-$20.39</span>
                      </div>
                      <div className="flex justify-between text-primary-text">
                        <span>Shipping</span>
                        <span>$5.99</span>
                      </div>
                      <div className="flex justify-between text-primary-text">
                        <span>Tax</span>
                        <span>$8.73</span>
                      </div>
                      <div className="border-t border-divider pt-4">
                        <div className="flex justify-between text-2xl font-bold text-primary-text">
                          <span>Total</span>
                          <span>$96.29</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-primary-bg rounded-lg p-4 mb-6 border border-divider">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <i className="fa-brands fa-cc-visa text-accent-blue text-xl"></i>
                          <div>
                            <div className="font-medium">Visa</div>
                            <div className="text-primary-muted text-sm">
                              **** **** **** 4242
                            </div>
                          </div>
                        </div>
                        <button className="text-accent-blue hover:text-accent-amber text-sm font-medium">
                          Change
                        </button>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-4">
                      <button className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-3 transform hover:scale-105">
                        <i className="fa-solid fa-credit-card"></i>
                        Confirm &amp; Pay
                      </button>
                      <button className="w-full bg-primary-bg hover:bg-primary-bg/80 text-primary-text border border-divider py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-3 hover:border-accent-blue">
                        <i className="fa-solid fa-shopping-cart"></i>
                        Return to Cart
                      </button>
                    </div>

                    {/* Support */}
                    <div className="mt-8 pt-6 border-t border-divider text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <i className="fa-solid fa-headset text-accent-amber"></i>
                        <span className="text-primary-muted text-sm">
                          Need help with your order?
                        </span>
                      </div>
                      <button className="text-accent-blue hover:text-accent-amber font-medium text-sm transition-colors">
                        Contact Support
                      </button>
                    </div>
                  </section>
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
