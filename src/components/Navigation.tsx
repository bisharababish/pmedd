import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoo from './images/logo1.png';
import LoadingSkeleton from './LoadingSkeleton';

const SearchEngine = lazy(() => import('./SearchEngine'));

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  const isCardiologyPage = location.pathname === '/cardiology';
  useEffect(() => {
    const handleHashOnLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 500);
        }
      }
    };

    handleHashOnLoad();

    window.addEventListener('hashchange', handleHashOnLoad);

    return () => {
      window.removeEventListener('hashchange', handleHashOnLoad);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Divisions', href: '/divisions', dropdown: [
        { label: 'PMED Cardiology Club', href: '/cardiology' },
        { label: 'PMED Podcast Club', href: '/podcast' },
      ]
    },
    {
      label: 'About', href: '/about', dropdown: [
        { label: 'About Us', href: '/about' },

        { label: 'Mission and Vision', href: '/about_mission' },
        { label: 'Our Deliverables', href: '/about_deliverables' },
        { label: 'Meet The Team', href: '/team' },
      ]
    },

    { label: 'Contact Us', href: '/contact' }
  ];

  const handleSectionLink = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    setIsMenuOpen(false);
    setAboutOpen(false);
    setDivisionsOpen(false);

    if (window.location.pathname !== '/about') {
      window.location.href = href;
      return;
    }

    const sectionId = href.split('#')[1];
    const element = document.getElementById(sectionId);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNav ? '' : '-translate-y-full'} ${isCardiologyPage ? '' : 'bg-[#1C2E4A]'} shadow-lg`} style={isCardiologyPage ? { backgroundColor: '#990000' } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          { }
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.12 }}
                transition={{ duration: 0.6 }}
className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10 shadow-xl ring-4 ring-white/30 hover:ring-white/60 transition-all duration-300"              >
                <img src={logoo} alt="PMED Logo" className="w-full h-full object-cover rounded-2xl" />
              </motion.div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">
                  PMED
                </h1>
                <p className="text-sm italic font-light text-white/80 drop-shadow-md mt-0.5 tracking-wide">
                  Medical Club
                </p>
              </div>
            </motion.div>
          </Link>

          { }
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white/90 group"
              >
                {item.dropdown ? (
                  <span
                    className="inline-flex items-center gap-1 cursor-pointer select-none"
                    tabIndex={0}
                    onClick={e => e.preventDefault()}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </span>
                ) : (
                  <Link to={item.href} className="inline-flex items-center gap-1">
                    {item.label}
                  </Link>
                )}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-white/80 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                { }
                {item.dropdown && (
                  <div
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 w-60 bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A]/90 text-white rounded-xl shadow-xl border border-white/20 py-2 flex flex-col items-stretch opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50"
                  >
                    {item.dropdown.map((sub) => (
                      sub.href.startsWith('/about#') ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleSectionLink(sub.href, e)}
                                                   >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="px-5 py-3 text-white hover:bg-secondary-blue hover:text-very-light-blue text-left font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                          onClick={() => { setIsMenuOpen(false); setAboutOpen(false); setDivisionsOpen(false); }}
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

          { }
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <Suspense fallback={<LoadingSkeleton />}>
              <SearchEngine />
            </Suspense>
          </motion.div>

          { }
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      { }
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden text-white backdrop-blur-lg border-t ${isCardiologyPage ? 'border-red-300' : 'bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A]/90 border-white/20'}`}
            style={isCardiologyPage ? { background: 'linear-gradient(to bottom right, #990000, #770000)' } : { background: 'linear-gradient(to bottom right, #1C2E4A, rgba(28, 46, 74, 0.9))' }}
          >
            <div className="px-4 py-6 space-y-3">
              { }
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <Suspense fallback={<LoadingSkeleton />}>
                  <SearchEngine />
                </Suspense>
              </motion.div>

              {navItems.map((item, index) => (
                <div key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-4 py-3 text-white font-medium rounded-lg hover:bg-secondary-blue hover:text-very-light-blue transition-all duration-300 ${item.dropdown ? 'cursor-pointer' : ''} flex items-center justify-between`}
                    onClick={() => {
                      if (item.dropdown) {
                        if (item.label === 'About') {
                          setAboutOpen((open) => !open);
                          setDivisionsOpen(false);
                        } else if (item.label === 'Divisions') {
                          setDivisionsOpen((open) => !open);
                          setAboutOpen(false);
                        }
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
                      <span className="inline-flex items-center gap-1 select-none">
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${(item.label === 'About' && aboutOpen) ||
                          (item.label === 'Divisions' && divisionsOpen)
                          ? 'rotate-180' : ''
                          }`} />
                      </span>
                    )}
                  </motion.div>
                  { }
                  {item.dropdown && (
                    (item.label === 'About' && aboutOpen) ||
                    (item.label === 'Divisions' && divisionsOpen)
                  ) && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => handleSectionLink(sub.href, e)}
                            className="px-4 py-2 rounded-lg text-white bg-secondary-blue hover:bg-light-blue hover:text-primary-blue font-medium transition-colors duration-200"
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