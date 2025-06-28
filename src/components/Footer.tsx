import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoo from './images/logo1.png';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/pmed.club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram', external: true },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    //  { title: 'Programs', href: '/programs' },
    // { title: 'Research', href: '/research' },
    //  { title: 'Events', href: '/events' },
    { title: 'Contact', href: '/contact' }
  ];

  // const programs = [
  //   { title: 'Basic Medical Education', href: '#' },
  //   { title: 'Laboratory Medicine', href: '#' },
  //   { title: 'Clinical Specialization', href: '#' },
  //   { title: 'Research & Development', href: '#' }
  // ];


  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <img src={logoo} alt="PMED Logo" className="w-full h-full object-cover rounded-xl" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    PMED
                  </h3>
                  <p className="text-sm text-gray-300">Medical Club</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Palestine Medical Education & Development Club - Empowering the next generation of
                medical professionals through  medical specialty interest groups, exposure to real-world clinical and research opportunities.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300"
                    aria-label={social.label}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ x: 5, color: '#60A5FA' }}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity"></span>
                      <Link to={link.href}>{link.title}</Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <motion.li
                    key={program.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={program.href}
                      whileHover={{ x: 5, color: '#60A5FA' }}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity"></span>
                      {program.title}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div> */}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-gray-300"
                >
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p>Palestine, Jersualem</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <a href="tel:+972-56-698-6006" className="hover:text-blue-400 transition-colors">+972-56-698-6006</a>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p>Soon</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>©  PMED. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Website by</span>
              <span className="font-semibold">Codefusion</span>
              <span>|</span>
              <a href="https://instagram.com/codefusionn.ps" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline">@codefusionn.ps</a>
              <span>|</span>
              <a href="tel:+972599203857" className="hover:text-blue-400">+972599203857</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;