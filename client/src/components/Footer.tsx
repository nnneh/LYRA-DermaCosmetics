import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      { name: 'Skincare', href: '#' },
      { name: 'Haircare', href: '#' },
      { name: 'Sunscreen', href: '#' },
      { name: 'Baby', href: '#' },
    ],
    about: [
      { name: 'About Lyra', href: '#' },
      { name: 'Developed with Dermatologists', href: '#' },
      { name: 'Our Ingredients', href: '#' },
      { name: 'Sustainability', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Find A Derm', href: '#' },
      { name: 'Store Locator', href: '#' },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and social */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-1">
              <span className="font-display text-2xl font-bold text-background tracking-tight">
                Lyra
              </span>
              <span className="font-display text-lg font-normal text-background/80">
                Ve
              </span>
            </div>
            <p className="font-body text-sm text-background/70 leading-relaxed max-w-sm">
              The #1 Dermatologist Recommended Skincare Brand. Developed with dermatologists, Lyra delivers effective, affordable skincare for all.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/50">
            © {new Date().getFullYear()} Lyra. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <a href="#" className="font-body text-xs text-background/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-background/50 hover:text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="font-body text-xs text-background/50 hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="font-body text-xs text-background/50 hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;