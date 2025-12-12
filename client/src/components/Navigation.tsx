"use client"
import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { mainLinks, topLinks } from '../data/navigationData';
import MegaDropdown from './MegaDropdown';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      
      {/* Top promotional banner */}
      <div className="bg-[#007bff] text-white py-2 text-center">
        <p className="font-sans text-sm">
          FIND THE PERFECT GIFT FOR YOU & YOURS: <a href="#" className="underline font-semibold hover:opacity-80">TAKE THE GIFT FINDER 🎁</a>
        </p>
      </div>

      {/* Secondary nav & Search Bar */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end py-2 space-x-6 text-sm text-gray-700 font-sans">
          <div className="hidden md:flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              {topLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs text-gray-600 hover:text-[#007bff] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-48 px-4 py-1.5 pr-10 text-sm border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007bff] text-white p-1 rounded-sm">
                  <Search size={14} />
                </button>
              </div>
              {/* <div className="flex items-center gap-1 text-sm font-sans text-gray-800">
                <span>English</span>
                <ChevronDown size={14} />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-[#007bff] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo area */}
            <a href="/" className="flex items-center">
              {/* Replace with your actual image logo component/asset */}
              <span className="text-3xl font-bold text-[#007bff] mr-2">Lyra DermaCosmetics</span> 
              
              {/* <span className="hidden sm:block font-sans text-[10px] text-gray-500 ml-2 uppercase tracking-wider leading-tight">
                Developed with<br/>Dermatologists
              </span> */}
            </a>

            {/* Desktop Navigation with Mega Dropdown */}
            <nav className="hidden lg:flex items-center h-full gap-6">
              {mainLinks.map((link) => (
                <div
                  key={link.name}
                  // Crucial: The parent must be relative for the absolute dropdown to position correctly
                  className="relative h-full"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`relative font-sans text-sm font-semibold transition-colors flex items-center gap-1 h-full px-2 ${
                      activeDropdown === link.name 
                        ? 'text-[#007bff] border-b-2 border-[#007bff]' 
                        : 'text-gray-800 hover:text-[#007bff]'
                    }`}
                  >
                    {link.badge && (
                      <span className="absolute top-0 right-[-15px] bg-red-500 text-white text-[8px] px-1 py-0.5 rounded font-bold">
                        {link.badge}
                      </span>
                    )}
                    {link.name}
                  </a>

                  {/* Rendering the dedicated Mega Dropdown component */}
                  <MegaDropdown
                    link={link}
                    isActive={activeDropdown === link.name}
                  />
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#"
              className="hidden md:inline-block border-2 border-[#007bff] text-[#007bff] hover:bg-[#007bff] hover:text-white transition-colors uppercase font-bold text-sm tracking-wider py-2 px-6 rounded-sm"
            >
              WHERE TO BUY
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-[80vh] pb-6 border-t border-gray-200' : 'max-h-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col space-y-3 pt-4">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-base font-semibold text-gray-800 hover:text-[#007bff] transition-colors flex items-center gap-2"
              >
                {link.name}
                {link.badge && (
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <a href="#" className="text-center mt-4 border border-[#007bff] text-[#007bff] py-2 rounded-sm font-bold">
              WHERE TO BUY
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;