import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* TOP */}
        <div className="flex flex-col items-center mb-12 max-w-md mx-auto">
          
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-8"
          >
            {/* LOGO */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">SS</span>
              </div>
              <div>
                <span className="text-2xl font-bold block">Sejahtera Service</span>
                <p className="text-sm text-center text-red-400">Solusi Kualitas Service</p>
              </div>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-6">Kontak</h3>

            <ul className="space-y-6">
              {/* EMAIL */}
              <li className="flex flex-col items-center gap-2 text-center">
                <Mail className="w-6 h-6 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:irfanramadhan.dev@gmail.com"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  irfanramadhan.dev@gmail.com
                </a>
              </li>

              {/* TELEPON */}
              <li className="flex flex-col items-center gap-2 text-center">
                <Phone className="w-6 h-6 text-red-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6281392813981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  0813-9281-3981
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Sejahtera Service Electronic.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;