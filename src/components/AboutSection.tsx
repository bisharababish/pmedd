import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-700 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
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
            <span className="font-semibold text-blue-800">PMED</span> is a student-led, multidisciplinary club rooted in the values of equity and excellence. We connect high-potential students with real medical experiences, workshops, and mentors. Our network spans local universities and international partnerships. We believe medicine is not only a science but a tool for <span className="text-red-600 font-bold">justice</span>, <span className="text-red-600 font-bold">hope</span>, and nation-building.
          </motion.p>
        </motion.div>

        {/* What We Do Section */}
        {/* Removed What We Do Section */}

        {/* Our Team Section */}
        {/* Removed Our Team Section */}

        {/* Mission Statement */}
        <motion.div
          id="mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }} className="mt-20 text-center flex justify-center items-center min-h-[60vh] scroll-mt-24"
        >
          <div className="bg-gradient-to-r from-blue-800 to-emerald-700 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden w-full max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our Mission & Vision
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-2xl font-semibold mb-4">Mission</h4>
                  <ul className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left space-y-4 list-disc list-inside">
                    <li>Empower medical students through structured exposure to real-world clinical and academic environments.</li>
                    <li>Provide mentorship, training, and resources to support their personal and professional growth.</li>
                    <li>Shape the complete doctor character — scientifically competent, ethically grounded, and socially responsible.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4">Vision</h4>
                  <ul className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left space-y-4 list-disc list-inside">
                    <li>To lead the development of a new generation of Palestinian doctors, scientifically exceptional, ethically grounded, and socially responsible.</li>
                    <li>We envision accessible, world-class training and mentorship that empowers medical students to heal, lead, and elevate both their communities and Palestine's global standing in medicine.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* What We Do Section (restored inline) */}
        <div className="pt-16">
          <motion.div
            id="whatwedo"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto scroll-mt-24"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-left text-blue-800">What We Do</h3>
            <div className="w-16 h-1 bg-blue-800 mb-6 rounded" />
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="text-lg md:text-xl leading-relaxed pl-6 space-y-3 list-disc list-inside text-gray-800"
            >
              {[
                'We build medical specialty interest groups — such as Cardiology, Neurology, Surgery, and more — each acting like a focused sub-club that empowers students to explore, grow, and lead in their field of interest.',
                'These groups offer everything a future doctor needs: training, mentorship, clinical exposure, competitions, and global-standard opportunities.',
                'We prepare our members to compete internationally and stand out as the best versions of themselves — both scientifically and professionally.',
                'We host workshops, seminars, medical simulations, and awareness campaigns throughout the year.',
                'We guide students through medical school admissions, interviews, and career planning.',
                'We collaborate with hospitals, NGOs, and global partners to create real-world impact.',
                'We encourage community leadership, ethical responsibility, and medical excellence.'
              ].map((text, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                >
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;