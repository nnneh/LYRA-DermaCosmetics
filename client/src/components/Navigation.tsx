"use client"
import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Find A Derm', href: '#' },
    { name: 'For Health Care Providers', href: '#' },
  ];

  const mainLinks = [
    { name: 'NEW & TRENDING', href: '#products' },
    { name: 'SKINCARE', href: '#products' },
    { name: 'HAIRCARE', href: '#products', badge: 'NEW' },
    { name: 'EDUCATION', href: '#ingredients' },
    { name: 'ABOUT LYRA', href: '#story' },
    { name: 'FIND MY ROUTINE', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-soft">
      {/* Top promotional banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center">
        <p className="font-body text-sm">
          FIND THE PERFECT GIFT FOR YOU & YOURS: <a href="#" className="underline font-semibold hover:opacity-80">TAKE THE GIFT FINDER 🎁</a>
        </p>
      </div>

      {/* Secondary nav */}
      <div className="border-b border-border">
        <div className="container-wide">
          <div className="hidden md:flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              {topLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-48 px-4 py-1.5 pr-10 text-sm border border-border rounded-sm bg-muted/50 font-body focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-1 rounded-sm">
                  <Search size={14} />
                </button>
              </div>
              <div className="flex items-center gap-1 text-sm font-body text-foreground">
                <span>English</span>
                {/* <ChevronDown size={14} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="flex items-center gap-1">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary tracking-tight">
                  LYRA
                </span>
                <span className="font-display text-lg md:text-xl font-normal text-primary">
                  DermaCosmetics
                </span>
              </div>
              {/* <span className="hidden sm:block font-body text-[10px] text-muted-foreground ml-2 uppercase tracking-wider leading-tight">
                Developed with<br/>Dermatologists
              </span> */}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {mainLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-display text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.badge && (
                    <span className="absolute -top-2 -left-1 bg-primary text-primary-foreground text-[8px] px-1 py-0.5 rounded font-bold">
                      {link.badge}
                    </span>
                  )}
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#"
              className="hidden md:inline-block btn-outline !py-2 !px-6"
            >
              WHERE TO BUY
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="container-wide flex flex-col space-y-3 pt-4">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                {link.name}
                {link.badge && (
                  <span className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <a href="#" className="btn-outline text-center mt-4">
              WHERE TO BUY
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;