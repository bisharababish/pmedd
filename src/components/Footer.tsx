import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoo from './images/logo1.png';

const Footer: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const springScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const backgroundY = useTransform(springScrollY, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(springScrollY, [0, 0.5, 1], [1, 1.05, 1.1]);

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/pmed.club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      label: 'Instagram',
      external: true,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'from-pink-600 to-purple-700'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/pmed-club-211a16372/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      label: 'LinkedIn',
      external: true,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://www.youtube.com/@pmedclubchannel',
      label: 'YouTube',
      external: true,
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700'
    },
    {
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>,
      href: 'https://www.facebook.com/people/PMED-CLUB/61578151663247/?mibextid=wwXIfr&rdid=btIuNx9fbs3zQg6S&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ANVnug2rd%2F%3Fmibextid%3DwwXIfr',
      label: 'Facebook',
      external: true,
      color: 'from-blue-700 to-blue-900',
      hoverColor: 'from-blue-800 to-blue-900'
    }
  ];

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.08,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.22,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
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

  const slideInVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.22,
        ease: "easeOut"
      }
    }
  };

  const staggerListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.06
      }
    }
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -15,
      scale: 0.92
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.18,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-primary-blue text-light-gray relative overflow-hidden">
      { }
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-light-blue rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-blue rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-very-light-blue rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.div>

      { }
      <motion.div
        className="absolute top-32 left-10 text-blue-400/10"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <Mail size={60} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-purple-400/10"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Globe size={50} />
      </motion.div>

      { }
      { }

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        { }
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            { }
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1"
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                  />
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logoo} alt="PMED Logo" className="w-full h-full object-cover rounded-xl relative z-10" />
                  </Link>
                </motion.div>
                <div>
                  <motion.h3
                    className="text-2xl font-bold relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] inline-block"
                      variants={shinyTextVariants}
                      initial="initial"
                      animate="animate"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      PMED
                    </motion.span>
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-300"
                    whileHover={{ color: "#d1d5db" }}
                  >
                    Medical Club
                  </motion.p>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                Palestine Medical Education & Development Club - Empowering the next generation of
                medical professionals through medical specialty interest groups, exposure to real-world clinical and research opportunities.
              </motion.p>

              <motion.div
                className="flex space-x-3"
                variants={staggerListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    variants={listItemVariants}
                    whileHover={{
                      scale: 1.28,
                      y: -8,
                      rotateZ: 8,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.32)"
                    }}
                    whileTap={{ scale: 0.93 }}
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-100 relative overflow-hidden`}
                    aria-label={social.label}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      whileHover={{ opacity: 0.32 }}
                      transition={{ duration: 0.13, ease: "easeOut" }}
                    />
                    <div className="relative z-10">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            { }
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4
                className="text-lg font-bold mb-6 text-white relative"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                }}
              >
                Quick Links
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h4>
              <motion.ul
                className="space-y-3"
                variants={staggerListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.title}
                    variants={listItemVariants}
                  >
                    <motion.div
                      whileHover={{
                        x: 8,
                        color: '#60A5FA',
                        scale: 1.08
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-150 flex items-center group cursor-pointer"
                    >
                      <motion.span
                        className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-150"
                        whileHover={{ scale: 1.32 }}
                      />
                      <Link
                        to={link.href}
                        onClick={e => {
                          if (
                            e.ctrlKey ||
                            e.metaKey ||
                            e.shiftKey ||
                            e.button === 1
                          ) {
                            return;
                          }
                          window.scrollTo(0, 0);
                        }}
                        className="relative"
                      >
                        {link.title}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-400 rounded"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        />
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            { }
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.h4
                className="text-lg font-bold mb-6 text-white relative"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                }}
              >
                Contact Info
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h4>
              <motion.div
                className="space-y-4"
                variants={staggerListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={listItemVariants}
                  whileHover={{
                    x: 8,
                    scale: 1.06
                  }}
                  className="flex items-start space-x-3 text-gray-300 group"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.18,
                      color: "#60a5fa"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <motion.p
                      whileHover={{ color: "#d1d5db" }}
                    >
                      Palestine, Jerusalem
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div
                  variants={listItemVariants}
                  whileHover={{
                    x: 8,
                    scale: 1.06
                  }}
                  className="flex items-center space-x-3 text-gray-300 group"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.18,
                      color: "#10b981"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <motion.a
                      href="tel:+972-56-698-6006"
                      className="hover:text-emerald-400 transition-colors relative"
                      whileHover={{ color: "#10b981" }}
                    >
                      +972-56-698-6006
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 rounded"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      />
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  variants={listItemVariants}
                  whileHover={{
                    x: 8,
                    scale: 1.06
                  }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.18,
                      color: "#8b5cf6"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <motion.a
                      href="mailto:info@pmed.club"
                      className="hover:text-purple-400 transition-colors relative"
                      whileHover={{ color: "#a78bfa" }}
                    >
                      info@pmed.club
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-purple-400 rounded"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        { }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8 relative"
        >
          { }
          <motion.div
            className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-300"
              whileHover={{ scale: 1.08 }}
            >
              <motion.span
                whileHover={{ color: "#d1d5db" }}
              >
                © PMED. All rights reserved.
              </motion.span>
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              >

              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-x-2 gap-y-1 text-gray-300 text-sm text-center sm:text-left"
              variants={staggerListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={listItemVariants}
                whileHover={{ color: "#d1d5db" }}
              >
                Developed by <span className="font-semibold">Codefusion</span>
              </motion.span>
              <span className="hidden sm:inline">|</span>

              <motion.a
                href="https://instagram.com/codefusionn.ps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 flex items-center gap-1 transition-colors duration-150"
                variants={listItemVariants}
                whileHover={{
                  scale: 1.08,
                  color: "#f472b6"
                }}
              >
                <Instagram className="w-4 h-4" />
                <span>@codefusionn.ps</span>
              </motion.a>

              <motion.a
                href="https://codefusion.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-center gap-1 transition-colors duration-150"
                variants={listItemVariants}
                whileHover={{
                  scale: 1.08,
                  color: "#60a5fa"
                }}
              >
                <Globe className="w-4 h-4" />
                <span>codefusion.me</span>
              </motion.a>

              <span className="hidden sm:inline">|</span>

              <motion.a
                href="tel:+972599203857"
                className="hover:text-emerald-400 flex items-center gap-1 transition-colors duration-150"
                variants={listItemVariants}
                whileHover={{
                  scale: 1.08,
                  color: "#10b981"
                }}
              >
                <Phone className="w-4 h-4" />
                <span>+972599203857</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;