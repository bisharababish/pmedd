import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = 20;

const getRandomParticles = (count: number) => {
  // Generate random positions and animation targets once per mount
  const width = typeof window !== 'undefined' ? window.innerWidth : 375;
  const height = typeof window !== 'undefined' ? window.innerHeight : 667;
  return Array.from({ length: count }, () => ({
    initial: {
      x: Math.random() * width,
      y: Math.random() * height,
    },
    animate: {
      x: Math.random() * width,
      y: Math.random() * height,
    },
    duration: Math.random() * 20 + 10,
  }));
};

const FloatingParticles: React.FC = () => {
  // Memoize particle positions to avoid recalculating on every render
  const particles = useMemo(() => getRandomParticles(PARTICLE_COUNT), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={particle.initial}
          animate={particle.animate}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{ willChange: 'transform, opacity' }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;