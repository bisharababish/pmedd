import React from 'react';
import { motion } from 'framer-motion';
import { Globe , Group, Lightbulb, Handshake, Activity, UserCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  // Features: What We Do
  const features = [
    {
      icon: <Group className="w-8 h-8" />, // Specialty groups
      title: 'Specialty Interest Groups',
      description: 'We build medical specialty interest groups — Cardiology, Neurology, Surgery, and more — each acting as a focused sub-club empowering students to explore, grow, and lead in their field of interest.',
      color: 'from-blue-800 to-blue-600'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />, // Workshops, seminars
      title: 'Workshops & Seminars',
      description: 'We host workshops, seminars, medical simulations, and awareness campaigns throughout the year, providing hands-on learning and leadership opportunities.',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: <Handshake className="w-8 h-8" />, // Mentorship
      title: 'Mentorship & Guidance',
      description: 'We guide students through medical school admissions, interviews, and career planning, connecting them with mentors and real-world experiences.',
      color: 'from-emerald-700 to-emerald-500'
    },
    {
      icon: <Activity className="w-8 h-8" />, // Competitions
      title: 'Competitions & Global Opportunities',
      description: 'We prepare our members to compete internationally and stand out as the best versions of themselves — both scientifically and professionally.',
      color: 'from-crimson-600 to-red-500'
    },
    {
      icon: <Globe className="w-8 h-8" />, // Collaborations
      title: 'Collaborations & Impact',
      description: 'We collaborate with hospitals, NGOs, and global partners to create real-world impact and foster international partnerships.',
      color: 'from-gold-400 to-yellow-500'
    },
    {
      icon: <UserCheck className="w-8 h-8" />, // Leadership
      title: 'Community Leadership',
      description: 'We encourage community leadership, ethical responsibility, and medical excellence, shaping doctors who are scientifically competent, ethically grounded, and socially responsible.',
      color: 'from-blue-600 to-emerald-600'
    }
  ];

  // Stats (example, can be updated with real data)
  const stats = [
    { number: 'Soon+', label: 'Medical Students Empowered', color: 'text-blue-800' },
    { number: 'Soon+', label: 'Workshops & Events', color: 'text-crimson-600' },
    { number: 'Soon+', label: 'Specialty Groups', color: 'text-emerald-700' },
    { number: 'Soon+', label: 'International Partners', color: 'text-gold-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-700 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-700 bg-clip-text text-transparent mb-6"
          >
            About PMED
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-blue-800">PMED</span> is a student-led, multidisciplinary club rooted in the values of equity and excellence. We connect high-potential students with real medical experiences, workshops, and mentors. Our network spans local universities and international partnerships. We believe medicine is not only a science but a tool for <span className="text-crimson-600 font-bold">justice</span>, <span className="text-crimson-600 font-bold">hope</span>, and nation-building.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid: What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 w-full bg-gradient-to-r ${feature.color} rounded-full mt-6 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-800 to-emerald-700 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our Mission
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left space-y-4 list-disc list-inside"
              >
                <li>Empower medical students through structured exposure to real-world clinical and academic environments.</li>
                <li>Provide mentorship, training, and resources to support their personal and professional growth.</li>
                <li>Shape the complete doctor character — scientifically competent, ethically grounded, and socially responsible.</li>
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;