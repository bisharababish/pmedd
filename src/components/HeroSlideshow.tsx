import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import Slide3 from "./images/Slide3.png";

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Persistent countdown state
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
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Explore Programs'
    },
    {
      id: 2,
      type: 'conference',
      title: 'International Palestinian Conference',
      subtitle: 'Laboratory Medicine Excellence',
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
      cta: 'Coming Soon!'
    }
  ];

  // Countdown timer effect - runs independently of slide changes
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

    // Update immediately
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array - runs once on mount

  // Slideshow auto-advance effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Countdown component - now using persistent state
  const CountdownDisplay = () => (
    <div className="flex justify-center gap-4 md:gap-8 mb-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="text-center">
          {item.label === 'Seconds' ? (
            <motion.div
              key={item.value} // This triggers animation when seconds change
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-2 border border-white/30"
            >
              <span className="text-2xl md:text-4xl font-bold text-white block">
                {item.value.toString().padStart(2, '0')}
              </span>
            </motion.div>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-2 border border-white/30">
              <span className="text-2xl md:text-4xl font-bold text-white block">
                {item.value.toString().padStart(2, '0')}
              </span>
            </div>
          )}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-600/60" />
              </div>

              {/* Floating Particles */}
              <FloatingParticles />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-8"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-6">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                  </motion.div>

                  {/* Conference specific content */}
                  {slide.type === 'conference' && (
                    <div className="mb-12">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
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
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        <CountdownDisplay />
                      </motion.div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300"
                    >
                      <Play className="w-5 h-5" />
                      {slide.cta}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
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