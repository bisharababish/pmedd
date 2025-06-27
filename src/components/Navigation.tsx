import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoo from './images/logo1.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About', href: '/about', dropdown: [
        { label: 'Our Mission', href: '/about#mission' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'History', href: '/about#history' },
      ]
    },
    // { label: 'Programs', href: '/programs' },
    // { label: 'Research', href: '/research' },
    // { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center"
            >
              <img src={logoo} alt="PMED Logo" className="w-full h-full object-cover rounded-xl" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                PMED
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Medical Club</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-blue-600 group"
              >
                <Link to={item.href}>{item.label}</Link>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Dropdown for About */}
                {item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 flex flex-col items-stretch opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-left font-medium rounded-lg transition-colors duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ${item.dropdown ? 'cursor-pointer' : ''}`}
                    onClick={() => {
                      if (item.dropdown) {
                        setAboutOpen((open) => !open);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                  </motion.div>
                  {/* Mobile About Dropdown */}
                  {item.dropdown && aboutOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="px-4 py-2 rounded-lg text-gray-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 font-medium transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;