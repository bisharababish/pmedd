import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageCircle, Building, CheckCircle, Copy, AlertCircle } from 'lucide-react';

// Supabase client setup
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://xmjjucxmxdusmehukxlv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtamp1Y3hteGR1c21laHVreGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1Nzg2NjIsImV4cCI6MjA2ODE1NDY2Mn0.6a_31fznl3KHA-WnHAMiw45vcBjr_3PEvNRgBTFUv8k';
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const userAgent = navigator.userAgent;

      // Insert into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            organization: formData.organization || null,
            subject: formData.subject,
            message: formData.message,
            user_agent: userAgent,
            source: 'contact_form'
          }
        ]);

      if (error) {
        throw error;
      }

      // Send email notification
      await sendEmailNotification(formData, { id: 'submitted', created_at: new Date().toISOString() });

      setIsSubmitted(true);
      console.log('Form submitted successfully:', data);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          subject: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmailNotification = async (
    formData: {
      name: string;
      email: string;
      phone: string;
      organization: string;
      subject: string;
      message: string;
    },
    submissionData: {
      id: string;
      created_at: string;
    }
  ) => {
    try {
      const API_URL = window.location.hostname === 'localhost'
        ? 'http://localhost:3001'
        : 'https://pmedd.onrender.com';

      const response = await fetch(`${API_URL}/api/send-notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'bisharababish@gmail.com',
          subject: `New Contact Form Submission: ${formData.subject}`,
          formData: formData,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Contact Form Submission</h2>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                <p><strong>Organization:</strong> ${formData.organization || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${formData.message}</p>
              </div>
              <hr>
              <p><small>Submission ID: ${submissionData.id}</small></p>
              <p><small>Submitted at: ${new Date(submissionData.created_at).toLocaleString()}</small></p>
            </div>
          `
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email notification');
      }
    } catch (error) {
      console.error('Error sending email notification:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Email Address',
      subtitle: 'Get in touch via email',
      details: ['info@pmed.club'],
      value: 'info@pmed.club',
      href: 'mailto:info@pmed.club',
      type: 'email',
      action: 'Send Email',
      gradient: 'from-blue-600 via-blue-700 to-indigo-800',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      accentColor: 'border-blue-200'
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: 'Phone Number',
      subtitle: 'Call us directly',
      details: ['+972-56-698-6006'],
      value: '+972566986006',
      type: 'phone',
      action: 'Call Now',
      href: 'tel:+972566986006',
      gradient: 'from-emerald-600 via-green-700 to-teal-800',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-50',
      accentColor: 'border-emerald-200'
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Location',
      subtitle: 'Visit our office',
      details: ['Palestine, Jerusalem'],
      value: 'Palestine, Jerusalem',
      type: 'address',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=Palestine,Jerusalem',
      gradient: 'from-purple-600 via-violet-700 to-purple-800',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-violet-50',
      accentColor: 'border-purple-200'
    }
  ];

  const departments = [
    'General Inquiry',
    'Admissions',
    'Research Collaboration',
    'Event Registration',
    'Media Relations',
    'Partnership Opportunities',
    'Other'
  ];

  // Enhanced animation variants
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
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
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
        repeatDelay: 1
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.div>

      {/* Floating Contact Icons */}
      <motion.div
        className="absolute top-32 left-10 text-blue-400/20"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <Mail size={60} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-purple-400/20"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Phone size={50} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-emerald-400/20"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        <MessageCircle size={55} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 relative"
            variants={itemVariants}
          >
            <motion.span
              className="text-primary-blue inline-block"
              variants={shinyTextVariants}
              initial="initial"
              animate="animate"
            >
              Contact Us
            </motion.span>
          </motion.h2>

          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-1 bg-secondary-blue rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Get in touch with us for inquiries, partnerships, or to learn more about our programs
          </motion.p>
        </motion.div>

        {/* Contact Form and Info Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  Stay in touch
                </motion.h3>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{submitError}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerListVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <motion.input
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                        }}
                        whileHover={{ scale: 1.01 }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <motion.input
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                        }}
                        whileHover={{ scale: 1.01 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerListVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <motion.input
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                        }}
                        whileHover={{ scale: 1.01 }}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Organization
                      </label>
                      <motion.input
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                        }}
                        whileHover={{ scale: 1.01 }}
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder="Your organization"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Subject
                    </label>
                    <motion.select
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                      }}
                      whileHover={{ scale: 1.01 }}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      required
                    >
                      <option value="">Select a subject</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </motion.select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                      }}
                      whileHover={{ scale: 1.01 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    ></motion.textarea>
                  </motion.div>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <CheckCircle className="w-5 h-5" />
                        </motion.div>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Professional Contact Info Cards */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className={`group relative overflow-hidden rounded-2xl border-2 ${info.accentColor} ${info.bgPattern} shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Header section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-lg`}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-sm text-gray-600">{info.subtitle}</p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCopy(info.value, info.type)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {copiedItem === info.type ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-green-600"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Copy className="w-4 h-4 text-gray-600" />
                      )}
                    </motion.button>
                  </div>

                  {/* Contact details */}
                  <div className="mb-6">
                    {info.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${info.gradient}`} />
                        <p className="text-gray-700 font-medium text-lg">{detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action button (not shown for address/location) */}
                  {info.type !== 'address' && (
                    <motion.a
                      href={info.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${info.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm`}
                    >
                      {info.action}
                    </motion.a>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${info.gradient} rounded-full blur-2xl transform translate-x-6 -translate-y-6`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;