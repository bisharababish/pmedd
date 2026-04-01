import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Instagram, Linkedin, Youtube, Microscope } from 'lucide-react';
import './CardiologyPage.css';

import neurologyLogo from "./supervisorpics/PMED Neuro Club.jpg";
import aaupBanner from "./supervisorpics/AAUP banner.jpg";
import malikZabenImage from "./supervisorpics/Malik Zaben.png";
import athanasiosHassoulasImage from "./supervisorpics/Athanasios Hassoulas.jpg";
import davidParkerImage from "./supervisorpics/David Parker.jpg";
import friedemannPaulImage from "./supervisorpics/friedemann-paul.png";
import fionaMcNicholasImage from "./supervisorpics/fiona-mcnicholas.png";

const supervisors = [
    {
        name: "Prof. Malik Zaben",
        title: "Consultant Neurosurgeon",
        image: malikZabenImage,
        bullets: [
            "Dean of the Faculty of Medicine at the Arab American University (AAUP)",
            "Consultant Neurosurgeon at Ibn Sina Subspecialties Hospital",
            "Clinician-scientist specializing in neurosurgery and neuroscience",
            "Extensive experience in medical education, clinical practice, and research",
            "Committed to advancing academic excellence and innovation in healthcare training",
        ],
    },
    {
        name: "Dr. Athanasios Hassoulas",
        title: "Associate Professor in Medical Education – Cardiff University",
        image: athanasiosHassoulasImage,
        bullets: [
            "Director of the Hybrid and Immersive Virtual Environments (HIVE) Teaching Innovation Unit",
            "Leads technology-enhanced learning using VR, AR, and AI in medical education",
            "Psychological Medicine Lead in the MBBCh undergraduate medical programme",
            "Leads curriculum units in Pain Medicine, Pain Management, and Neurology",
            "Research interests include OCD, anxiety disorders, and medical education",
        ],
    },
    {
        name: "Dr. David John Parker, PhD",
        title: "College Lecturer in Physiology",
        image: davidParkerImage,
        bullets: [
            "Director of Studies in Natural Sciences (Biological) for Parts II and III",
            "Teaches physiology and neuroscience, including Neurobiology and Physiology of Organisms courses",
            "Research focuses on neuronal networks and electrical activity of nerve cells",
            "Studies spinal cord networks and recovery mechanisms after spinal cord injury",
            "Lectures and supervises advanced courses in neurobiology, neuronal networks, and motor systems",
        ],
    },
    {
        name: "Prof. Friedemann Paul, MD",
        title: "Professor of Clinical Neuroimmunology – Charite Berlin",
        image: friedemannPaulImage,
        bullets: [
            "Head of the Outpatient Clinic and Neuroimmunology Research Group at ECRC",
            "Consultant Neurologist at Charite since 2004",
            "Former Vice Dean for Clinical Research at Charite Faculty of Medicine",
            "Former Scientific Director of the Experimental and Clinical Research Center (ECRC)",
            "Research focuses on multiple sclerosis, neuromyelitis optica, and neuroimmunological diseases",
        ],
    },
    {
        name: "Prof. Fiona McNicholas, MD, FRCPsych",
        title: "Consultant Child & Adolescent Psychiatrist",
        image: fionaMcNicholasImage,
        bullets: [
            "Consultant at Lucena Clinic and Children's Health Ireland since 2000",
            "Chair of Child Psychiatry at University College Dublin (UCD)",
            "Trained at Guy's Hospital, Great Ormond Street Hospital, and Stanford University",
            "Clinical interests include ADHD, eating disorders, and youth mental health",
            "Research focuses on quality of care, clinician wellbeing, and the impact of social media on youth",
        ],
    },
];

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
                                PMED Neuro Club
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
                            PMED Neuro Club & NeuroPedia Palestine is dedicated to advancing neurology, neurosurgery, neuroscience, education, training, and research in Palestine.
                            Our mission is to inspire and equip medical students with the knowledge, skills, and opportunities to excel in the field of neurology.
                        </motion.p>
                        <motion.div
                            className="mt-10 rounded-2xl overflow-hidden shadow-2xl border border-green-100"
                            variants={itemVariants}
                        >
                            <img
                                src={aaupBanner}
                                alt="AAUP Conference Banner"
                                className="w-full h-auto object-contain bg-white"
                            />
                        </motion.div>
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
                                    <Brain className="w-10 h-10 mr-3 text-[#065f46]" />
                                    <span className="text-[#065f46] font-bold text-lg">Excellence in Neuro Club</span>
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold text-main-gray mb-6">About Our Program</h2>
                            </div>

                            <motion.div
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border-2 border-green-200/50 shadow-lg relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="inline-flex items-center gap-3 mb-5">
                                    <Microscope className="w-7 h-7 text-[#065f46]" />
                                    <span className="font-bold text-[#065f46] text-lg">About Our Program</span>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-800 font-medium">
                                    The PMED Neuro Club is a community for students passionate about the nervous system and neurology.
                                    Through engaging lectures, hands-on workshops, and interactive discussions with specialists, members gain a deeper understanding of neurological health and disease.
                                </p>
                                <ul className="mt-6 text-left space-y-3 text-gray-800">
                                    <li>• Develop clinical skills in neurology</li>
                                    <li>• Explore research in neuroscience</li>
                                    <li>• Connect with peers who share the same enthusiasm</li>
                                </ul>
                                <p className="mt-6 text-lg leading-relaxed text-gray-800 font-medium">
                                    Whether you're just beginning your medical journey or already focused on a neurology career, this group will help you grow academically and professionally.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.section>

                    <motion.section
                        className="mb-20"
                        variants={slideInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="text-center mb-10" variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold text-main-gray mb-4">Meet Our Supervisors</h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-[#065f46] via-[#059669] to-[#065f46] mx-auto rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {supervisors.map((sup, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden flex flex-col"
                                >
                                    <div className="relative">
                                        <img
                                            src={sup.image}
                                            alt={sup.name}
                                            className="w-full h-60 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-lg font-bold text-white leading-tight">{sup.name}</h3>
                                        </div>
                                    </div>

                                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                                        <p className="text-[#065f46] font-semibold text-sm mb-4">{sup.title}</p>
                                        <ul className="space-y-2.5 text-gray-700 text-sm leading-relaxed">
                                        {sup.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-1 text-[#065f46] font-bold">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        className="mt-6"
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
                                <img
                                    src={neurologyLogo}
                                    alt="Neuro Club"
                                    className="w-10 h-10 mr-3 object-contain"
                                />
                                <h2 className="text-3xl md:text-4xl font-bold text-main-gray">Open Now</h2>
                            </motion.div>

                            <motion.div
                                className="text-lg md:text-xl text-main-gray space-y-6 leading-relaxed mb-8 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    Follow our <span className="text-[#065f46] font-bold">official social media channels</span> for applications, updates, and Neuro Club activities.
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

