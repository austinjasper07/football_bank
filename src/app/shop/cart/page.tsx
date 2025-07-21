import { FC } from 'react';
import Image from 'next/image';


const CartPage: FC = () => {
  return (
    <main className="bg-primary-bg font-inter text-primary-text">

          <section id="breadcrumb" className="py-6 border-b border-divider">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-primary-muted hover:text-accent-blue cursor-pointer">Shop</span>
                    <i className="fa-solid fa-chevron-right text-primary-muted text-xs"></i>
                    <span className="text-primary-text">Shopping Cart</span>
                </div>
            </div>
        </div>
    </section>

    {/* Cart Page */}
    <section id="cart-page" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-8 text-primary-text">Shopping Cart</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* <!-- Cart Items --> */}
                    <div id="cart-items" className="lg:col-span-2 space-y-6">
                        {/* <!-- Cart Item 1 --> */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-32 h-32">
                                    <img className="w-full h-full object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ed3b50b5f5-5d0cdc4b04a8ae60f70c.png" alt="Nike Mercurial Vapor 15" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-poppins font-semibold text-lg text-primary-text">Nike Mercurial Vapor 15</h3>
                                        <button className="text-primary-muted hover:text-accent-red transition-colors">
                                            <i className="fa-solid fa-trash text-lg"></i>
                                        </button>
                                    </div>
                                    <p className="text-primary-muted mb-2">Size: UK 8 | Color: Blue/White</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-divider rounded-lg">
                                            <button className="px-3 py-1 text-primary-text hover:text-accent-blue">-</button>
                                            <span className="px-3 py-1 border-l border-r border-divider">1</span>
                                            <button className="px-3 py-1 text-primary-text hover:text-accent-blue">+</button>
                                        </div>
                                        <span className="font-bold text-xl text-accent-blue">£189.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Cart Item 2 */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-32 h-32">
                                    <img className="w-full h-full object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/238a4b6c6d-b0b1035b9ed876992335.png" alt="Shin Guards Pro" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-poppins font-semibold text-lg text-primary-text">Shin Guards Pro</h3>
                                        <button className="text-primary-muted hover:text-accent-red transition-colors">
                                            <i className="fa-solid fa-trash text-lg"></i>
                                        </button>
                                    </div>
                                    <p className="text-primary-muted mb-2">Size: Medium | Color: Black</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-divider rounded-lg">
                                            <button className="px-3 py-1 text-primary-text hover:text-accent-blue">-</button>
                                            <span className="px-3 py-1 border-l border-r border-divider">2</span>
                                            <button className="px-3 py-1 text-primary-text hover:text-accent-blue">+</button>
                                        </div>
                                        <span className="font-bold text-xl text-accent-blue">£79.98</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Cart Item 3 --> */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-32 h-32">
                                    <img className="w-full h-full object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b57f190536-da2f0aa61b9e3f12caac.png" alt="GK Gloves Elite" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-poppins font-semibold text-lg text-primary-text">GK Gloves Elite</h3>
                                        <button className="text-primary-muted hover:text-accent-red transition-colors">
                                            <i className="fa-solid fa-trash text-lg"></i>
                                        </button>
                                    </div>
                                    <p className="text-primary-muted mb-2">Size: 9 | Color: White/Green</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-divider rounded-lg">
                                            <button className="px-3 py-1 text-primary-text hover:text-accent-blue">-</button>
                                            <span className="px-3 py-1 border-l border-r border-divider">1</span>
                                            <button className="px-3 py-1 text-primary-text hover:text-accent-blue">+</button>
                                        </div>
                                        <span className="font-bold text-xl text-accent-blue">£79.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Continue Shopping --> */}
                        <div className="flex justify-between items-center pt-6 border-t border-divider">
                            <button className="flex items-center gap-2 text-accent-blue hover:text-accent-amber transition-colors">
                                <i className="fa-solid fa-arrow-left"></i>
                                Continue Shopping
                            </button>
                            <button className="text-primary-muted hover:text-accent-red transition-colors">
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Order Summary --> */}
                    <div id="order-summary" className="space-y-6">
                        {/* <!-- Coupon Code --> */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary-text">Coupon Code</h3>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Enter coupon code" className="flex-1 bg-primary-bg border w-[60%] border-divider rounded-lg px-3 py-2 text-primary-text placeholder-primary-muted focus:border-accent-amber focus:outline-none" />
                                <button className="bg-accent-blue hover:bg-opacity-80 text-white px-4 py-3 rounded-lg font-medium transition-colors w-[30%]">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* <!-- Shipping Options --> */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary-text">Shipping Options</h3>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="radio" name="shipping" className="text-accent-blue" checked />
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <span className="font-medium text-primary-text">Standard Delivery</span>
                                            <span className="text-accent-green">FREE</span>
                                        </div>
                                        <p className="text-primary-muted text-sm">5-7 business days</p>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="radio" name="shipping" className="text-accent-blue" />
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <span className="font-medium text-primary-text">Express Delivery</span>
                                            <span className="text-primary-text">£9.99</span>
                                        </div>
                                        <p className="text-primary-muted text-sm">2-3 business days</p>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="radio" name="shipping" className="text-accent-blue" />
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <span className="font-medium text-primary-text">Next Day Delivery</span>
                                            <span className="text-primary-text">£19.99</span>
                                        </div>
                                        <p className="text-primary-muted text-sm">Order before 2PM</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Order Summary --> */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary-text">Order Summary</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-primary-muted">Subtotal (4 items)</span>
                                    <span className="text-primary-text">£349.96</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-primary-muted">Shipping</span>
                                    <span className="text-accent-green">FREE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-primary-muted">VAT (20%)</span>
                                    <span className="text-primary-text">£69.99</span>
                                </div>
                                <div className="flex justify-between text-accent-green">
                                    <span>Discount (SAVE20)</span>
                                    <span>-£69.99</span>
                                </div>
                                <div className="border-t border-divider pt-3">
                                    <div className="flex justify-between text-xl font-bold">
                                        <span className="text-primary-text">Total</span>
                                        <span className="text-accent-blue">£349.96</span>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="w-full bg-accent-blue hover:bg-opacity-80 text-white py-4 rounded-lg font-semibold text-lg mt-6 transition-colors">
                                <i className="fa-solid fa-lock mr-2"></i>
                                Proceed to Checkout
                            </button>
                            
                            {/* <!-- Trust Signals --> */}
                            <div className="grid grid-cols-3 gap-2 mt-6 text-xs text-center">
                                <div className="flex flex-col items-center gap-1">
                                    <i className="fa-solid fa-shield text-accent-green"></i>
                                    <span className="text-primary-muted">Secure</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <i className="fa-solid fa-truck text-accent-green"></i>
                                    <span className="text-primary-muted">Fast Ship</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <i className="fa-solid fa-undo text-accent-green"></i>
                                    <span className="text-primary-muted">Returns</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Payment Methods --> */}
                        <div className="bg-primary-card rounded-xl border border-divider p-6 shadow-sm">
                            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary-text">We Accept</h3>
                            <div className="flex gap-3">
                                <div className="bg-primary-bg border border-divider rounded p-2">
                                    <i className="fa-brands fa-cc-visa text-2xl text-accent-blue"></i>
                                </div>
                                <div className="bg-primary-bg border border-divider rounded p-2">
                                    <i className="fa-brands fa-cc-mastercard text-2xl text-accent-red"></i>
                                </div>
                                <div className="bg-primary-bg border border-divider rounded p-2">
                                    <i className="fa-brands fa-cc-paypal text-2xl text-accent-blue"></i>
                                </div>
                                <div className="bg-primary-bg border border-divider rounded p-2">
                                    <i className="fa-brands fa-apple-pay text-2xl text-primary-text"></i>
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

export default CartPage;
