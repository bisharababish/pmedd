import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CircularText from './CircularText';

const AboutSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const springScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const backgroundY = useTransform(springScrollY, [0, 1], ['0%', '50%']);
  const backgroundScale = useTransform(springScrollY, [0, 0.5, 1], [1, 1.1, 1.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10, 10, -10],
      rotate: [0, 2, -2, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const slideInLeftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -45
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotateY: 45
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const gradientVariants = {
    initial: {
      backgroundPosition: '0% 50%',
      scale: 1
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      scale: [1, 1.02, 1],
      transition: {
        backgroundPosition: {
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  const shinyTextVariants = {
    initial: {
      backgroundPosition: '-200% 0',
    },
    animate: {
      backgroundPosition: '200% 0',
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-very-light-blue relative overflow-hidden">
      {}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-blue rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-red rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-blue rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="flex justify-center mb-6"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          >
            <CircularText text="•PMED•ABOUT" radius={90} className="text-primary-blue" />
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-main-gray max-w-4xl mx-auto leading-relaxed relative"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              className="font-semibold text-primary-blue relative inline-block bg-gradient-to-r from-primary-blue via-white to-primary-blue bg-clip-text text-transparent bg-[length:200%_100%]"
              variants={shinyTextVariants}
              initial="initial"
              animate="animate"
              style={{
                backgroundImage: 'linear-gradient(90deg, #1e40af 0%, #ffffff 50%, #1e40af 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 20px rgba(30, 64, 175, 0.5)",
                transition: { duration: 0.2 }
              }}
            >
              PMED
            </motion.span>
            <motion.span
              className="relative inline-block bg-gradient-to-r from-main-gray via-light-gray to-main-gray bg-clip-text text-transparent bg-[length:200%_100%]"
              variants={shinyTextVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #1f2937 0%, #e5e7eb 50%, #1f2937 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {' '}PMED is student-led and rooted in our values: excellence, compassion, and justice. Through hands-on clinical experiences, skill-building workshops, and effective mentoring, we open new horizons—not just for careers, but for positive impact.

              Our community spans universities and borders, united by one dream: to become physicians who care with their skills and their souls.

              If you believe that medicine can build a better world,  you belong here.
            </motion.span>
          </motion.p>
        </motion.div>

        {}
        <motion.div
          id="mission"
          className="mt-20 text-center flex justify-center items-center min-h-[60vh] scroll-mt-24"
          variants={slideInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-3xl p-12 md:p-16 text-white relative overflow-hidden w-full max-w-3xl mx-auto"
            variants={gradientVariants}
            initial="initial"
            animate="animate"
            style={{ backgroundSize: '200% 200%' }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-main-gray/10"
              whileHover={{ opacity: 0.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, rotateX: -45 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                }}
              >
                Mission and Vision
              </motion.h3>
              <motion.div
                className="space-y-6"
                variants={staggerListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={listItemVariants}>
                  <motion.h4
                    className="text-2xl font-semibold mb-4"
                    whileHover={{
                      scale: 1.05,
                      color: "#fbbf24",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Mission
                  </motion.h4>
                  <motion.ul
                    className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left space-y-4 list-disc list-inside"
                    variants={staggerListVariants}
                  >
                    {[
                      'To empower medical students by systematically exposing them to realistic clinical and academic environments.',
                      'To provide the necessary mentoring, training, and resources to support their personal and professional growth.',
                      'To build the well-rounded physician—scientifically competent, ethically committed, and socially responsible.'
                    ].map((text, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemVariants}
                        whileHover={{
                          x: 10,
                          color: "#fbbf24",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                <motion.div variants={listItemVariants}>
                  <motion.h4
                    className="text-2xl font-semibold mb-4"
                    whileHover={{
                      scale: 1.05,
                      color: "#fbbf24",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Vision
                  </motion.h4>
                  <motion.ul
                    className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left space-y-4 list-disc list-inside"
                    variants={staggerListVariants}
                  >
                    {[
                      'To lead the development of a new generation of Palestinian doctors, scientifically exceptional, ethically grounded, and socially responsible.',
                      'We envision accessible, world-class training and mentorship that empowers medical students to heal, lead, and elevate both their communities and Palestine\'s global standing in medicine.'
                    ].map((text, idx) => (
                      <motion.li
                        key={idx}
                        variants={listItemVariants}
                        whileHover={{
                          x: 10,
                          color: "#fbbf24",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {}
        <motion.div className="pt-16">
          <motion.div
            id="whatwedo"
            className="mb-20 max-w-4xl mx-auto scroll-mt-24"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-2 text-left text-primary-blue"
              whileHover={{
                scale: 1.05,
                color: "#1e40af",
                textShadow: "0 0 20px rgba(30, 64, 175, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              Our Deliverables
            </motion.h3>
            <motion.div
              className="w-16 h-1 bg-primary-blue mb-6 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ width: 120, backgroundColor: "#1e40af" }}
            />
            <motion.ul
              className="text-lg md:text-xl leading-relaxed pl-6 space-y-3 list-disc list-inside text-main-gray"
              variants={staggerListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'We build medical specialty interest groups — such as Cardiology, Neurology, Surgery, and more — each acting like a focused sub-club that empowers students to explore, grow, and lead in their field of interest.',
                'These groups offer everything a future doctor needs: training, mentorship, clinical exposure, competitions, and global-standard opportunities.',
                'We prepare our members for international competition and excellence, both academically and professionally.',
                'We hold workshops, seminars, medical simulations, and campaigns to raise awareness all year long.',
                'We help students get into medical school, prepare for interviews, and plan their careers.',
                'We work with hospitals, NGOs, and partners around the world to make a real difference.',
                'We encourage people to be leaders in their communities, act ethically, and do great work in medicine.'
              ].map((text, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                  whileHover={{
                    x: 15,
                    scale: 1.02,
                    color: "#1e40af",
                    backgroundColor: "rgba(30, 64, 175, 0.05)",
                    borderRadius: "8px",
                    padding: "8px",
                    boxShadow: "0 4px 12px rgba(30, 64, 175, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                  className="cursor-pointer p-2 -m-2 rounded-lg"
                >
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default AboutSection;