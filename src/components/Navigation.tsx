import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoo from './images/logo1.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    const handleHashOnLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          // Add delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 500);
        }
      }
    };

    // Run on component mount
    handleHashOnLoad();

    // Also run when the hash changes
    window.addEventListener('hashchange', handleHashOnLoad);

    return () => {
      window.removeEventListener('hashchange', handleHashOnLoad);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About', href: '/about', dropdown: [
        { label: 'Our Mission & Vision', href: '/about#mission' },
        { label: 'What We Do', href: '/about#whatwedo' },
        { label: 'Our Team', href: '/team' },
      ]
    },
    // { label: 'Programs', href: '/programs' },
    // { label: 'Research', href: '/research' },
    // { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' }
  ];

  // Handle smooth scrolling to sections
  const handleSectionLink = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMenuOpen(false);
    setAboutOpen(false);

    // If we're not on the about page, navigate there first
    if (window.location.pathname !== '/about') {
      // Navigate to the about page with the hash
      window.location.href = href;
      return;
    }

    // If we're already on the about page, just scroll to the section
    const sectionId = href.split('#')[1];
    const element = document.getElementById(sectionId);

    if (element) {
      // Add a small delay to ensure page is fully loaded
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

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
                <Link to={item.href} className="inline-flex items-center gap-1">
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
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
                      sub.href.startsWith('/about#') ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleSectionLink(sub.href, e)}
                          className="px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-left font-medium rounded-lg transition-colors duration-200"
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-left font-medium rounded-lg transition-colors duration-200"
                          onClick={() => { setIsMenuOpen(false); setAboutOpen(false); }}
                        >
                          {sub.label}
                        </Link>
                      )
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
                    className={`block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ${item.dropdown ? 'cursor-pointer' : ''} flex items-center justify-between`}
                    onClick={() => {
                      if (item.dropdown) {
                        setAboutOpen((open) => !open);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {!item.dropdown ? (
                      <Link to={item.href} className="w-full">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen && item.dropdown ? 'rotate-180' : ''}`} />
                      </span>
                    )}
                  </motion.div>
                  {/* Mobile About Dropdown */}
                  {item.dropdown && aboutOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleSectionLink(sub.href, e)}
                          className="px-4 py-2 rounded-lg text-gray-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 font-medium transition-colors duration-200"
                        >
                          {sub.label}
                        </a>
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