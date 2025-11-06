import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Instagram, Linkedin, Youtube } from 'lucide-react';
import './CardiologyPage.css';

import neurologyLogo from "./images/neurology.png";

const NeurologyPage = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

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

    const slideInVariants = {
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

    return (
        <div className="min-h-screen relative overflow-hidden">
            <motion.div
                className="fixed inset-0 z-0"
                style={{
                    y: backgroundY,
                    scale: backgroundScale
                }}
            >
                <motion.div
                    className="absolute top-40 right-20 text-green-400/20"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                >
                    <Brain size={60} />
                </motion.div>
                <motion.div
                    className="absolute bottom-40 left-20 text-green-400/20"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 2 }}
                >
                    <Brain size={70} />
                </motion.div>

                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                />
            </motion.div>

            <div className="relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto py-16 px-6">
                    <motion.div
                        ref={heroRef}
                        className="text-center mb-20 mt-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 relative"
                            style={{ color: '#065f46' }}
                            variants={itemVariants}
                        >
                            <motion.span
                                className="inline-block"
                                variants={shinyTextVariants}
                                initial="initial"
                                animate="animate"
                            >
                                PMED Neurology Club
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-[#065f46] via-[#059669] to-[#065f46] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 128 }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-xl md:text-2xl text-main-gray max-w-4xl mx-auto leading-relaxed font-medium"
                            variants={itemVariants}
                        >
                            Exploring the wonders of the human brain and nervous system
                        </motion.p>
                    </motion.div>

                    <motion.section
                        className="mb-20"
                        variants={slideInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-2xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 1 }}
                            />

                            <div className="text-center mb-8 relative z-10">
                                <motion.div
                                    className="inline-flex items-center justify-center mb-6"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img 
                                        src={neurologyLogo} 
                                        alt="Neurology Logo" 
                                        className="w-16 h-16 mr-3 object-contain"
                                    />
                                    <span className="text-[#065f46] font-bold text-lg">Coming Soon</span>
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold text-main-gray mb-6">PMED Neurology Club</h2>
                            </div>
                            
                            <motion.div
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border-2 border-green-200/50 shadow-lg relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p className="text-lg md:text-xl leading-relaxed text-center text-gray-800 font-medium">
                                    Get ready to explore the wonders of the human brain!<br /><br />
                                    A space dedicated to curiosity, learning, and discovering the fascinating world of neuroscience.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.section>

                    <motion.section
                        className="mt-20"
                        variants={slideInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="bg-card-bg rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden border border-border-gray"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />

                            <motion.div
                                className="inline-flex items-center justify-center mb-8 relative z-10"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Brain className="w-8 h-8 text-[#065f46] mr-3" />
                                <h2 className="text-3xl md:text-4xl font-bold text-main-gray">Stay Connected</h2>
                            </motion.div>

                            <motion.div
                                className="text-lg md:text-xl text-main-gray space-y-6 leading-relaxed mb-8 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    Follow our <span className="text-[#065f46] font-bold">official social media channels</span> to stay updated on the latest news about the PMED Neurology Club launch and exclusive updates.
                                </p>
                            </motion.div>

                            <div className="relative z-10">
                                <motion.h3
                                    className="text-2xl font-bold text-main-gray mb-6"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Follow Us
                                </motion.h3>
                                <div className="flex justify-center space-x-8">
                                    {[
                                        { icon: Youtube, color: "text-red-600 hover:text-red-800", bg: "hover:bg-red-50", href: "https://www.youtube.com/@pmedclubchannel", label: 'YouTube' },
                                        { icon: Instagram, color: "text-pink-600 hover:text-pink-800", bg: "hover:bg-pink-50", href: "https://www.instagram.com/pmed.club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: 'Instagram' },
                                        { icon: Linkedin, color: "text-blue-700 hover:text-blue-900", bg: "hover:bg-blue-50", href: "https://www.linkedin.com/in/pmed-club-211a16372/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: 'LinkedIn' },
                                    ].map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${social.color} ${social.bg} p-4 rounded-2xl transition-all duration-300 shadow-lg`}
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 5,
                                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon size={32} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default NeurologyPage;

