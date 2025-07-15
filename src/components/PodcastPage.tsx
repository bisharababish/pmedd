import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, Instagram, Linkedin, Youtube, Radio, Headphones } from 'lucide-react';

import ahmadRomana from "./teampics/ahmad.jpeg";
import lamar from "./teampics/Lamar.jpeg";
import meray from "./teampics/MerayDour.jpeg";
import abduallah from "./teampics/abdallah.jpeg";

import Slide4 from "./images/Slide4.jpg";
import './CardiologyPage.css';

// Define PodcastTeamMember type
interface PodcastTeamMember {
    name: string;
    role: string;
    img: string;
}

// Data for the 6 podcast team members
const podcastTeam: PodcastTeamMember[] = [
    { name: 'Ahmad Romana', role: 'Host & Producer', img: ahmadRomana },
    { name: 'Lamar Dahlia', role: 'Host & Producer', img: lamar },
    { name: 'Meray Dour', role: 'Host & Producer', img: meray },
    { name: 'Abdallah  Elayyan', role: 'Director', img: abduallah },

];

const PodcastPage = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

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

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95,
            rotateY: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
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
        <div className="min-h-screen relative overflow-hidden">
            {/* Enhanced Background with Parallax */}
            <motion.div
                className="fixed inset-0 z-0"
                style={{
                    y: backgroundY,
                    scale: backgroundScale
                }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${Slide4})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-purple-50/85 to-pink-50/80 backdrop-blur-[2px]" />

                {/* Floating Podcast Icons */}
                <motion.div
                    className="absolute top-40 right-20 text-pink-400/20"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                >
                    <Radio size={60} />
                </motion.div>
                <motion.div
                    className="absolute bottom-40 left-20 text-purple-400/20"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 2 }}
                >
                    <Headphones size={70} />
                </motion.div>

                {/* Animated Background Shapes */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                />
            </motion.div>

            <div className="relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6">

                    {/* Enhanced Hero Section */}
                    <motion.div
                        ref={heroRef}
                        className="text-center mb-16 md:mb-20 mt-16 md:mt-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-4xl md:text-7xl font-bold mb-6 relative text-primary-blue"
                            variants={itemVariants}
                        >
                            <motion.span
                                className="inline-block"
                                variants={shinyTextVariants}
                                initial="initial"
                                animate="animate"
                            >
                                PMED Podcast Club
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="w-32 h-1 bg-secondary-blue rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 128 }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
                            variants={itemVariants}
                        >
                            Where medical science meets storytelling - exploring breakthroughs, sharing stories, and inspiring the future of healthcare
                        </motion.p>
                    </motion.div>

                    {/* Enhanced About Section */}
                    <motion.section
                        className="mb-16 md:mb-20"
                        variants={slideInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="bg-card-bg backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 border border-border-gray relative overflow-hidden"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-blue/10 to-secondary-blue/10 rounded-full blur-2xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary-blue/10 to-primary-blue/10 rounded-full blur-2xl"
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
                                    <Radio className="w-8 h-8 text-primary-blue mr-3" />
                                    <span className="text-primary-blue font-bold text-lg">Medical Storytelling</span>
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Podcast</h2>
                            </div>
                            <motion.p
                                className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                The <span className="font-semibold text-primary-blue relative">PMED Podcast Club</span> is where medical science meets storytelling. We explore the latest breakthroughs, share inspiring stories from healthcare professionals, and discuss the challenges and triumphs of medicine. Our mission is to create engaging, informative content that educates and entertains. Join our community to dive deep into the world of medicine, one episode at a time.
                            </motion.p>
                        </motion.div>
                    </motion.section>

                    {/* Enhanced Team Section */}
                    <motion.section
                        className="mb-16 md:mb-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>


                            <motion.h2
                                className="text-3xl md:text-5xl font-bold mb-6 text-primary-blue"
                                variants={itemVariants}
                            >
                                <motion.span
                                    className="inline-block"
                                    variants={shinyTextVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    MEET OUR TEAM
                                </motion.span>
                            </motion.h2>

                            <motion.div
                                className="w-32 h-1 bg-secondary-blue mx-auto rounded-full mb-6"
                                initial={{ width: 0 }}
                                whileInView={{ width: 128 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />

                            <motion.p
                                className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium"
                                variants={itemVariants}
                            >
                                Meet the passionate team of hosts, producers, and editors dedicated to bringing you insightful conversations from the world of medicine.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={staggerListVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
                        >
                            {podcastTeam.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    className="group relative flex flex-col items-center bg-white/90 rounded-3xl shadow-xl border border-border-gray p-8 transition-all duration-500 hover:shadow-2xl"
                                    style={{ minHeight: 320 }}
                                >
                                    <div className="mb-6">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-primary-blue/20 bg-gradient-to-br from-primary-blue/10 to-secondary-blue/10"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://via.placeholder.com/150/E5E7EB/6B7280?text=Member';
                                            }}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                                        <p className="text-lg font-semibold text-primary-blue bg-primary-blue/10 rounded-full px-4 py-1 inline-block shadow-sm">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* Enhanced How to Apply/Join Section */}
                    <section className="mt-16 md:mt-20">
                        <motion.div
                            className="bg-card-bg backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 max-w-3xl mx-auto text-center relative overflow-hidden border border-border-gray"
                            variants={slideInVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Background Decoration */}
                            <motion.div
                                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary-blue/10 to-secondary-blue/10 rounded-full blur-3xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />

                            <motion.div
                                className="inline-flex items-center justify-center mb-6 relative z-10"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ClipboardList className="w-8 h-8 text-primary-blue mr-3" />
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Join our podcast</h2>
                            </motion.div>

                            <motion.div
                                className="text-base md:text-lg text-gray-600 space-y-4 leading-relaxed mb-8 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    Have a story to share or expertise in a medical field? We are always looking for passionate guests to join our podcast. Contact us to learn more about becoming a guest speaker.
                                </p>
                                <motion.p
                                    className="font-semibold text-primary-blue"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Follow our social media channels for the latest episodes, behind-the-scenes content, and announcements.
                                </motion.p>
                            </motion.div>

                            {/* Enhanced Social Media Links */}
                            <div className="relative z-10">
                                <motion.h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Follow Us
                                </motion.h3>
                                <div className="flex justify-center space-x-8">
                                    {[
                                        { icon: Youtube, color: "text-red-600 hover:text-red-800", bg: "hover:bg-red-50", href: "https://www.youtube.com/@pmedpodcast" },
                                        { icon: Instagram, color: "text-pink-600 hover:text-pink-800", bg: "hover:bg-pink-50", href: "https://www.instagram.com/pmed.club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
                                        { icon: Linkedin, color: "text-blue-700 hover:text-blue-900", bg: "hover:bg-blue-50", href: "https://www.linkedin.com/company/pmedpodcast/" }
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
                                            <social.icon size={28} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PodcastPage;