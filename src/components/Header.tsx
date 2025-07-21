import React from 'react'

export default function Header() {
  return (
    <header className="bg-primary-card sticky px-4 md:px-16 top-0 z-50 border-b border-divider shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <span className="font-poppins font-bold text-2xl text-accent-blue cursor-pointer">
            FootballBank<span className="text-accent-green">.soccer</span>
                </span>
                <nav className="hidden md:flex space-x-6">
                  {['Home', 'Players', 'Live Scores', 'Submit Profile', 'About', 'Contact', 'Blog', 'Shop'].map((item) => (
                    <span
                      key={item}
                      className={`cursor-pointer transition-colors ${
                        item === 'About' ? 'text-accent-blue font-medium' : 'text-primary-text hover:text-accent-blue'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </nav>
                <div className="flex items-center space-x-4">
                  <span className="hidden md:block bg-accent-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
                    Sign Up
                  </span>
                  <button className="md:hidden text-primary-text">
                    <i className="fa-solid fa-bars text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </header>
  )
}
