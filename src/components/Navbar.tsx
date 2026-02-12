import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick: (section: string) => void;
}

export function Navbar({ onNavClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00A3FF] flex items-center justify-center text-white text-xl font-bold shadow-lg">
              V
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => onNavClick('home')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => onNavClick('work')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Work
            </button>
            <button 
              onClick={() => onNavClick('about')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => onNavClick('contact')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => onNavClick('about')}
            className="bg-[#007BFF] text-white px-6 py-3 rounded-full hover:bg-[#0066DD] transition-all hover:scale-105 hover:shadow-xl font-medium"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
