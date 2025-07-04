import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Users, X, ClipboardList, Instagram, Linkedin, Youtube, Activity, Stethoscope } from 'lucide-react';
import './CardiologyPage.css'; // Import custom CSS for animation

import supervisor1 from "./supervisorpics/supervisor1.png";
import supervisor2 from "./supervisorpics/supervisor2.png";
import supervisor3 from "./supervisorpics/supervisor3.png";
import supervisor4 from "./supervisorpics/supervisor4.png";
import supervisor6 from "./supervisorpics/supervisor6.png";
import supervisor7 from "./supervisorpics/supervisor7.png";

// Array for 6 supervisor cards with their images
const supervisors = [
    supervisor1,
    supervisor2,
    supervisor3,
    supervisor4,
    supervisor6,
    supervisor7
];

// Using placeholder background image from Pexels

const CardiologyPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

    const openModal = (image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

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


                {/* Floating Medical Icons */}
                <motion.div
                    className="absolute top-40 right-20 text-blue-400/20"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                >
                    <Activity size={60} />
                </motion.div>
                <motion.div
                    className="absolute bottom-40 left-20 text-red-400/20"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 2 }}
                >
                    <Stethoscope size={70} />
                </motion.div>

                {/* Animated Background Shapes */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                />
            </motion.div>

            <div className="relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto py-16 px-6">

                    {/* Enhanced Hero Section */}
                    <motion.div
                        ref={heroRef}
                        className="text-center mb-20 mt-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 relative"
                            variants={itemVariants}
                        >
                            <motion.span
                                className="bg-gradient-to-r from-red-600 via-blue-700 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%] inline-block"
                                variants={shinyTextVariants}
                                initial="initial"
                                animate="animate"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #dc2626 0%, #1d4ed8 30%, #dc2626 60%, #1d4ed8 100%)',
                                    backgroundSize: '200% 100%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                PMED Cardiology Club
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-red-500 via-blue-600 to-red-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 128 }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
                            variants={itemVariants}
                        >
                            Advancing cardiovascular medicine through excellence, innovation, and compassionate care
                        </motion.p>
                    </motion.div>

                    {/* Enhanced About Section */}
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
                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-full blur-2xl"
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
                                    <Activity className="w-8 h-8 text-red-600 mr-3" />
                                    <span className="text-red-600 font-bold text-lg">Excellence in Cardiology</span>
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Program</h2>
                            </div>
                            <motion.p
                                className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                PMED Cardiology is an <span className="font-semibold text-red-600 relative">officially recognized division</span> of the PMED Club, accredited by the <span className="font-semibold text-blue-700">American College of Cardiology</span>, the Ministry of Health, and several leading hospitals and medical educational organizations. Our mission is to empower medical students with deep and practical understanding of cardiology through a structured program offering <span className="font-semibold text-red-600">10 competitive annual seats</span>. Selected students benefit from hands-on clinical exposure, expert-led research, and personalized mentorship. The division is supported by a team of professional supervisors and provides exclusive research opportunities, enabling participants to contribute to meaningful academic work and develop into future leaders in cardiovascular medicine.
                            </motion.p>
                        </motion.div>
                    </motion.section>

                    {/* Enhanced Supervisors Section */}
                    <motion.section
                        className="mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="text-center mb-16" variants={itemVariants}>
                            <motion.div
                                className="inline-flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl mb-8 shadow-lg border border-white/20"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Users className="w-8 h-8 text-red-600 mr-3" />
                                <span className="text-red-600 font-bold text-lg">Our Expert Team</span>
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-5xl font-bold mb-6"
                                variants={itemVariants}
                            >
                                <motion.span
                                    className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent bg-[length:200%_100%] inline-block"
                                    variants={shinyTextVariants}
                                    initial="initial"
                                    animate="animate"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
                                        backgroundSize: '200% 100%',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    MEET OUR SUPERVISORS
                                </motion.span>
                            </motion.h2>

                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full mb-6"
                                initial={{ width: 0 }}
                                whileInView={{ width: 128 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />

                            <motion.p
                                className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium"
                                variants={itemVariants}
                            >
                                Distinguished cardiologists and medical professionals dedicated to advancing cardiovascular medicine and mentoring the next generation of healthcare leaders
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {supervisors.map((supervisorImg, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -15,
                                        scale: 1.05,
                                        rotateY: 5,
                                        transition: { type: 'spring', stiffness: 300, damping: 20 }
                                    }}
                                    className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden cursor-pointer border border-white/30 hover:shadow-3xl transition-all duration-500"
                                    onClick={() => openModal(supervisorImg)}
                                >
                                    {/* Enhanced Gradient Border Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                                        whileHover={{
                                            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, transparent 50%, rgba(59, 130, 246, 0.3) 100%)"
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative p-6">
                                        {/* Supervisor Image Container */}
                                        <div className="relative mb-6 mx-auto">
                                            <motion.div
                                                className="w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl relative"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <img
                                                    src={supervisorImg}
                                                    alt={`Supervisor ${idx + 1}`}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />

                                                {/* Hover Overlay */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileHover={{ opacity: 1, y: 0 }}
                                                >
                                                    <div className="text-white text-center">
                                                        <h4 className="font-bold text-lg mb-1">Medical Supervisor</h4>
                                                        <p className="text-sm opacity-90">Cardiology Expert</p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>

                                            {/* Enhanced Click Indicator */}
                                            <motion.div
                                                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </motion.div>
                                        </div>

                                        {/* Enhanced ECG Line Animation */}
                                        <div className="flex justify-center">
                                            <motion.svg
                                                width="120"
                                                height="30"
                                                viewBox="0 0 120 30"
                                                className="text-red-400 opacity-60"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <motion.path
                                                    d="M0,15 L20,15 L25,8 L30,22 L35,8 L40,15 L45,15 L50,10 L55,20 L60,15 L120,15"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{
                                                        duration: 2,
                                                        delay: idx * 0.2,
                                                        repeat: Infinity,
                                                        repeatType: "loop",
                                                        repeatDelay: 3
                                                    }}
                                                />
                                            </motion.svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Enhanced How to Apply Section */}
                    <motion.section
                        className="mt-20"
                        variants={slideInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden border border-white/20"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Background Decoration */}
                            <motion.div
                                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-full blur-3xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />

                            <motion.div
                                className="inline-flex items-center justify-center mb-8 relative z-10"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ClipboardList className="w-8 h-8 text-blue-700 mr-3" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How to Apply</h2>
                            </motion.div>

                            <motion.div
                                className="text-lg md:text-xl text-gray-600 space-y-6 leading-relaxed mb-8 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    Applications for PMED Cardiology open on a limited basis each year. To stay informed about upcoming opportunities, follow our official social media channels, where we regularly post updates, application announcements, and important deadlines.
                                </p>
                                <motion.p
                                    className="font-semibold text-red-600 text-xl"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    We encourage all interested students to stay connected and act promptly once applications are announced, as seats are highly competitive.
                                </motion.p>
                            </motion.div>

                            {/* Enhanced Social Media Links */}
                            <div className="relative z-10">
                                <motion.h3
                                    className="text-2xl font-bold text-gray-800 mb-6"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Follow Us
                                </motion.h3>
                                <div className="flex justify-center space-x-8">
                                    {[
                                        { icon: Youtube, color: "text-red-600 hover:text-red-800", bg: "hover:bg-red-50" },
                                        { icon: Instagram, color: "text-pink-600 hover:text-pink-800", bg: "hover:bg-pink-50" },
                                        { icon: Linkedin, color: "text-blue-700 hover:text-blue-900", bg: "hover:bg-blue-50" }
                                    ].map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href="#"
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

                    {/* Enhanced Modal */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
                                onClick={closeModal}
                            >
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0, rotateX: -30, y: 100 }}
                                    animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
                                    exit={{ scale: 0.7, opacity: 0, rotateX: 30, y: -100 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Enhanced Close Button */}
                                    <motion.button
                                        onClick={closeModal}
                                        className="absolute top-6 right-6 z-20 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <X className="w-6 h-6 text-gray-700" />
                                    </motion.button>

                                    {/* Modal Content: Only Image */}
                                    <div className="flex items-center justify-center h-full p-6 bg-black/80">
                                        <motion.img
                                            src={selectedImage}
                                            alt="Supervisor Details"
                                            className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl ring-4 ring-white/30 object-contain transition-transform duration-500"
                                            initial={{ scale: 0.85, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.85, opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.1 }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default CardiologyPage;