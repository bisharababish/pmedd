import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import Slide3 from "./images/Slide3.png";
import Slide1 from "./images/Slide1.png";

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const slides = [
    {
      id: 1,
      type: 'welcome',
      title: 'Welcome to PMED',
      subtitle: 'Palestine Medical Education & Development Club',
      description: 'Empowering the next generation of medical professionals through medical specialty interest groups, exposure to real-world clinical and research opportunities.',
      image: Slide1,
      cta: 'Explore Programs'
    },
    {
      id: 2,
      type: 'conference',
      title: 'International Palestinian Conference',
      subtitle: 'Medical Research and Laboratory Excellence',
      description: 'Join leading medical professionals from around the world for three days of cutting-edge research presentations and networking.',
      image: 'https://www.exordo.com/hubfs/Imported_Blog_Media/Resized-image-4.jpg',
      date: 'August 21-23, 2025',
      location: 'Palestine Medical Center',
      cta: 'Register Now'
    },
    {
      id: 3,
      type: 'education',
      title: 'PMED Cardiology Club',
      subtitle: 'PMED Official Division',
      description: 'An official PMED division offering 10 annual seats for students to explore cardiology through expert-led research, clinical exposure, and mentorship.',
      image: Slide3,
      cta: 'Cardiology Club!'
    }
  ];

  useEffect(() => {
    const targetDate = new Date('2025-08-21T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 18000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CountdownDisplay = () => (
    <div className="flex justify-center gap-4 md:gap-8 mb-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="text-center">
          <motion.div
            key={item.value}
            initial={{ scale: 1.2, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18, duration: 0.4 }}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-2 border border-white/30 shadow-lg"
          >
            <span className="text-2xl md:text-4xl font-bold text-white block">
              {item.value.toString().padStart(2, '0')}
            </span>
          </motion.div>
          <span className="text-blue-200 text-sm md:text-base font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.98, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -60 }}
              transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 18 }}
              className="absolute inset-0"
            >
              { }
              <div className="absolute inset-0">
                {slide.id === 3 ? (
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    style={{ willChange: 'transform, opacity' }}
                  />
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                )}
                { }
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-600/60"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 0.85, 0.7] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ willChange: 'opacity' }}
                />
              </div>

              { }
              <FloatingParticles />

              { }
              <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 80 }}
                    className="mb-8"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 90 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.7 }}
                      className="text-xl md:text-2xl text-blue-100 mb-6"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.7 }}
                      className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                  </motion.div>

                  { }
                  {slide.type === 'conference' && (
                    <div className="mb-12">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8"
                      >
                        <div className="flex items-center gap-2 text-white">
                          <Calendar className="w-5 h-5" />
                          <span className="text-lg">{slide.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <MapPin className="w-5 h-5" />
                          <span className="text-lg">{slide.location}</span>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      >
                        <CountdownDisplay />

                      </motion.div>
                    </div>
                  )}

                  {/* Coming Soon Button */}
                  {slide.type === 'education' && (
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                      className="mt-8"
                    >
                      <button
                        onClick={() => window.location.href = '/cardiology'}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {slide.cta}
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      { }
      <motion.button
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.35)' }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.35)' }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      { }
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.07, duration: 0.4 }}
            whileHover={{ scale: 1.25, backgroundColor: '#fff' }}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white shadow-lg'
              : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;