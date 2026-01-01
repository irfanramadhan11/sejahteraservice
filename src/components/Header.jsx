import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background when scrolled
      setIsScrolled(currentScrollY > 20);
      
      // Hide header on mobile when scrolling down
      if (window.innerWidth < 1024) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div 
                className="absolute w-0 h-0 top-0"
                style={{
                  borderLeft: '24px solid transparent',
                  borderRight: '24px solid transparent',
                  borderTop: '40px solid #dc2626',
                  filter: 'drop-shadow(0 2px 4px rgba(220, 38, 38, 0.2))'
                }}
              />
              <span className="relative z-10 text-white font-bold text-lg tracking-wide" style={{ marginTop: '-18px' }}>
                SS
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Sejahtera Service</h2>
              <p className="text-xs text-center text-red-600">Solusi Kualitas Service</p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              BERANDA
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              LAYANAN
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              BOOKING
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              KONTAK
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/6281392813981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0813-9281-3981
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium">
                BERANDA
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium">
                LAYANAN
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium">
                BOOKING
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium">
                KONTAK
              </button>
              <a 
                href="https://wa.me/6281392813981"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0813-9281-3981
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;