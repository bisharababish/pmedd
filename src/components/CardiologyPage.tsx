import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, Instagram, Linkedin, Youtube, Activity, Stethoscope, X } from 'lucide-react';
import './CardiologyPage.css';

import supervisor1 from "./supervisorpics/supervisor1.png";
import supervisor2 from "./supervisorpics/supervisor2.png";
import supervisor3 from "./supervisorpics/supervisor3.png";
import supervisor4 from "./supervisorpics/supervisor4.png";
import supervisor6 from "./supervisorpics/supervisor6.png";
import supervisor7 from "./supervisorpics/supervisor7.png";

const supervisors = [
    {
        image: supervisor1,
        name: "Dr. Sameer Mtour",
        title: "Cardiologist & Head of the Cardiology Department at Al-Makassed Hospital",
        bullets: [
            "Assistant Professor at Al-Quds University",
            "Numerous advanced catheterization procedures, including LAAO and TAVI",
            "Strong commitment to improve cardiac care in Palestine.",
        ],
        profileLink: "#"
    },
    {
        image: supervisor2,
        name: "Dr. Nael Al-Lahham",
        title: "Pediatric Cardiologist",
        bullets: [
            "Holds the record for the highest number of consecutive pediatric catheterization procedures in the Arab world.",
            "Expertise in congenital heart disease and interventional pediatric cardiology.",
            "Minimally invasive treatments for a range of pediatric heart conditions.",
            "Ongoing care for congenital and acquired heart diseases in children, from infancy through adolescence.",

        ],
        profileLink: "#"
    },
    {
        image: supervisor7,
        name: "Dr. Duha Shellah",
        title: "Global Health Advocate & Physician-Scientist",
        bullets: [
            "Chair of the WFPHA Emergencies Working Grou",
            "Vice Chair of the WHO EMRO Youth Council",
            "Founder of The Researchist",
            "Advocates for Sexual and Reproductive Health and Rights (SRHR) and health equity",
            "Represents Palestinian voices in global health",
        ],
        profileLink: "#"
    },

    {
        image: supervisor4,
        name: "Dr. Iyad Idries",
        title: "Cardiology Fellow & Medical Educator",
        bullets: [
            "Former Chief Resident in a leading U.S. internal medicine program",
            "Experience in Heart Failure Clinic and CCU teaching",
            "Specializes in electrophysiology and thrombus risk prediction",
            "Passionate mentor to medical students",
            "Committed to advancing cardiac care in underserved communities",
            "Focused on innovation and education in cardiology",
        ],
        profileLink: "#"
    },
    {
        image: supervisor6,
        name: "Dr. Diya Asad",
        title: "Internal Medicine Resident",
        bullets: [
            "Proud graduate of Al-Quds University",
            "Brings hands-on experience in cardiology and emergency medicine",
            "Published 14 PubMed-indexed research papers",
            "Participated in clinical experiences at multiple U.S. hospitals, most recently at Mayo Clinic Hospital",
        ],
        profileLink: "#"
    },
    {
        image: supervisor3,
        name: "Dr. Bilal Adwan",
        title: "Cardiologist at Al-Makassed Hospital",
        bullets: [
            "Specializes in advanced cardiovascular diagnostics and procedures",
            "Skilled in echocardiography, stress testing, and cardiac catheterization",
            "Experienced in managing complex cardiac cases",
            "Provides outpatient cardiac care across the West Bank",
            "Contributor to peer-reviewed research, including a 2024 case study on Shone complex",
        ],
        profileLink: "#"
    },
];


const CardiologyPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

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
            { }
            <motion.div
                className="fixed inset-0 z-0"
                style={{
                    y: backgroundY,
                    scale: backgroundScale
                }}
            >


                { }
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

                { }
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

                    { }
                    <motion.div
                        ref={heroRef}
                        className="text-center mb-20 mt-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 relative"
                            style={{ color: '#990000' }} variants={itemVariants}
                        >
                            <motion.span
                                className="inline-block"
                                variants={shinyTextVariants}
                                initial="initial"
                                animate="animate"
                            >
                                PMED Cardiology Club
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-[#990000] via-[#990000] to-[#990000] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 128 }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-xl md:text-2xl text-main-gray max-w-4xl mx-auto leading-relaxed font-medium"
                            variants={itemVariants}
                        >
                            Advancing cardiovascular medicine through excellence, innovation, and compassionate care
                        </motion.p>
                    </motion.div>

                    { }
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
                            { }
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
                                <h2 className="text-3xl md:text-4xl font-bold text-main-gray mb-6">About Our Program</h2>
                            </div>
                            <motion.p
                                className="text-lg md:text-xl leading-relaxed text-center max-w-5xl mx-auto relative z-10 font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <span className="text-red-600 font-bold">PMED Cardiology Interest Group </span>
                                isn’t just another student club — it’s a launchpad for aspiring future leaders in <span className="text-red-600 font-semibold">cardiovascular medicine</span>. Backed by the
                                <span className="text-blue-700 font-semibold"> American College of Cardiology</span>,
                                the Ministry of Health, and leading hospitals, we offer
                                <span className="text-blue-700 font-bold"> ten competitive seats</span> each year. Those picked join an elite program featuring hands-on clinical experience, cutting-edge research, and one-on-one mentorship that are supervised by specialists in Cardiology contributing to real academic work, and grow into the kind of physician who doesn’t just treat — <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold">but transforms</span>.
                            </motion.p>
                        </motion.div>
                    </motion.section>

                    { }
                    <motion.section
                        className="mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="text-center mb-16" variants={itemVariants}>
                            { }

                            { }
                            <div className="inline-block text-left">
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
                                            backgroundImage: 'linear-gradient(90deg, #990000 0%, #bb0000 50%, #990000 100%)',
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
                                    className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-600 ml-0 rounded-full mb-6"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 128 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>

                            <motion.p
                                className="text-xl text-main-gray max-w-3xl mx-auto leading-relaxed font-medium"
                                variants={itemVariants}
                            >
                                Distinguished cardiologists and medical professionals dedicated to advancing cardiovascular medicine and mentoring the next generation of healthcare leaders
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {supervisors.map((sup, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-gray-200 relative"
                                    whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                >
                                    { }
                                    <div className="absolute top-8 left-0 w-full flex justify-center z-0">
                                        <svg width="90%" height="40" viewBox="0 0 320 40" className="mx-auto opacity-30">
                                            <polyline points="0,20 40,20 60,5 80,35 100,5 120,20 140,20 160,10 180,30 200,20 320,20" fill="none" stroke="#990000"
                                                strokeWidth="3" />
                                        </svg>
                                    </div>
                                    <img src={sup.image} alt={sup.name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg z-10 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 z-10 mb-1">{sup.name}</h3>
                                    <p className="text-gray-700 font-medium z-10 mb-4">{sup.title}</p>
                                    <ul className="text-gray-600 text-left z-10 mb-6 space-y-2">
                                        {sup.bullets.map((b, i) => (
                                            <li key={i} className="flex items-start"><span className="mt-1 mr-2" style={{ color: '#990000' }}>•</span>
                                                {b}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    { }
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
                            { }
                            <motion.div
                                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary-blue/10 to-primary-red/10 rounded-full blur-3xl"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                            />

                            <motion.div
                                className="inline-flex items-center justify-center mb-8 relative z-10"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ClipboardList className="w-8 h-8 text-primary-blue mr-3" />
                                <h2 className="text-3xl md:text-4xl font-bold text-main-gray">Join Our Family</h2>
                            </motion.div>

                            <motion.div
                                className="text-lg md:text-xl text-main-gray space-y-6 leading-relaxed mb-8 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    Each year, only a <span className="text-blue-700 font-bold">select few</span> gain the chance to join PMED Cardiology — a route reserved for those with <span className="text-red-600 font-semibold">heart, grit, and purpose</span>. Applications open on a limited basis, and when they do, <span className="text-red-600 font-bold">every moment matters</span>.<br /><br />
                                    To stay ahead, follow our <span className="text-blue-700 font-bold">official social media channels</span>. This is where we post our latest access to application windows, deadlines and exclusive updates — to never miss the opportunity.<br /><br />
                                    The field of cardiology seeks  bold, the brilliant, and those who truly care. When the opportunity arises, <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold">seize it</span>.                                </p>
                                <motion.p
                                    className="font-semibold text-red-600 text-xl"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    We encourage all interested students to stay connected and act promptly once applications are announced, as seats are highly competitive.
                                </motion.p>
                            </motion.div>

                            { }
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
                                        { icon: () => (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>), color: "text-blue-700 hover:text-blue-900", bg: "hover:bg-blue-50", href: "https://www.facebook.com/people/PMED-CLUB/61578151663247/?mibextid=wwXIfr&rdid=btIuNx9fbs3zQg6S&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ANVnug2rd%2F%3Fmibextid%3DwwXIfr", label: 'Facebook' }
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
                                            {social.label === 'Facebook' ? (
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
                                            ) : React.createElement(social.icon, { size: 32 })}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                    { }
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
                                    { }
                                    <motion.button
                                        onClick={closeModal}
                                        className="absolute top-6 right-6 z-20 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <X className="w-6 h-6 text-gray-700" />
                                    </motion.button>

                                    { }
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