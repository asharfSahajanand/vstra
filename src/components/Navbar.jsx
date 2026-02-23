import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-lg sticky top-0 z-50 rounded-b-lg">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight"
          >
          Ecamly
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/FAQ" className="nav-link">FAQ</a>
            <a href="/about-us" className="nav-link">About</a>
            <a href="/contact-us" className="nav-link">Contact</a>
            <a href="/policy" className="nav-link">Policy</a>
      
          </nav>

          {/* Cart + Mobile Button */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <a href="#" className="relative">
              <svg
                className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.19.982.707.982H19.5a1 1 0 00.993-.883L21 11H7m-2 4h14M7 19a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Menu</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="p-6 space-y-2">
          <a href="/" className="mobile-link">Home</a>
          <a href="/faq" className="mobile-link">FAQ</a>
          <a href="/about" className="mobile-link">About Us</a>
          <a href="/contact-us" className="mobile-link">Contact Us</a>
          <a href="/policy" className="mobile-link">Policy</a>
        </nav>
      </aside>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </>
  );
}
