import React, { useState } from 'react';

// Main App Component
const App = () => {
  // State to manage the current active page for navigation (though now always home)
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle navigation clicks (now simplified as only home is available)
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gray-50 text-gray-800">
      {/* Header Component */}
      <Header navigateTo={navigateTo} currentPage={currentPage} />

      {/* Main Content Area - Always renders HeroSection */}
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ navigateTo, currentPage }) => {
  // Helper function to determine active link styling (navigation buttons removed)
  const getNavLinkClass = (pageName) => {
    return `px-4 py-2 rounded-md transition-colors duration-200 ${
      currentPage === pageName
        ? 'bg-teal-600 text-white shadow-md'
        : 'text-gray-700 hover:bg-gray-200'
    }`;
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand Name updated to use the provided image URL from GitHub */}
        <div className="mb-4 sm:mb-0">
          <img
            src="https://raw.githubusercontent.com/AnkushKvashisht/NuvynAIwebsiteAssets/raw/d32c7055bdbdf65add768a2d819151bc7f15d6e4/Nuvynai.logo.png" // This is the corrected raw GitHub image URL
            alt="Nuvyn.ai Logo"
            className="h-10 sm:h-12 w-auto rounded-md" // Adjust height and width as needed
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/180x40/E0F2F7/00796B?text=Nuvyn.ai+Logo+Fallback"; }} // Fallback in case of image load error
          />
        </div>

        {/* Navigation Links - Removed as only one page is displayed now */}
        {/*
        <nav>
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <li>
              <button onClick={() => navigateTo('home')} className={getNavLinkClass('home')}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('about')} className={getNavLinkClass('about')}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('services')} className={getNavLinkClass('services')}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('contact')} className={getNavLinkClass('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
        */}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16 text-center my-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Revolutionize Your Data Warehouse with AI Automation
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
        Accelerate development, ensure full automated operations from day one, and unlock the true potential of your data with our intelligent platform.
      </p>
      {/* Updated button text and color */}
      <button className="bg-white text-teal-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300">
        Coming soon, watch this space for more updates
      </button>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nuvyn.ai. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default App; // Export the main App component as default
