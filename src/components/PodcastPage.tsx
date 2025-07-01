import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, X, ClipboardList, Instagram, Linkedin, Youtube } from 'lucide-react';

import ahmadRomana from "./teampics/ahmad.jpeg";
import kinda from "./teampics/kinda.jpeg";
import lamar from "./teampics/Lamar.jpeg";
import khaled from "./teampics/KhaledAlqasrawi.jpeg";
import meray from "./teampics/MerayDour.jpeg";
import dahlia from "./teampics/Dahlia.jpeg";

import Slide4 from "./images/Slide4.jpg"; // You might want a different background for the podcast page
import './CardiologyPage.css'; // This CSS is reused, can be renamed to something more generic if needed

// Data for the 6 podcast team members
const podcastTeam = [
    { name: ' ', role: '', img: ahmadRomana },
    { name: '  ', role: '', img: kinda },
    { name: ' ', role: '', img: lamar },
    { name: ' ', role: ' ', img: khaled },
    { name: ' ', role: ' ', img: meray },
    { name: ' ', role: '', img: dahlia },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
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
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        }
    }
};

const PodcastPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setSelectedImage(image);
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
            style={{ backgroundImage: `url(${Slide4})` }}
        >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-purple-50/80 backdrop-blur-[1px]"></div>

            <div className="relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6">

                    {/* Hero Section */}
                    <div className="text-center mb-16 md:mb-20 mt-16 md:mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >

                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-500 bg-clip-text text-transparent mb-6"
                        >
                            PMED Podcast Club
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        />
                    </div>

                    {/* About Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-20"
                    >
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 border border-white/20">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Podcast</h2>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                                The <span className="font-semibold text-purple-600">PMED Podcast Club</span> is where medical science meets storytelling. We explore the latest breakthroughs, share inspiring stories from healthcare professionals, and discuss the challenges and triumphs of medicine. Our mission is to create engaging, informative content that educates and entertains. Join our community to dive deep into the world of medicine, one episode at a time.
                            </p>
                        </div>
                    </motion.section>

                    {/* Team Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-20"
                    >
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center justify-center p-3 bg-white/90 backdrop-blur-sm rounded-2xl mb-8 shadow-lg border border-white/20">
                                <Users className="w-8 h-8 text-purple-600 mr-3" />
                                <span className="text-purple-600 font-bold text-lg">Our Podcast Team</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
                                MEET OUR TEAM
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
                            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                                Meet the passionate team of hosts, producers, and editors dedicated to bringing you insightful conversations from the world of medicine.
                            </p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
                        >
                            {podcastTeam.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                    className="group relative"
                                    onClick={() => openModal(member.img)}
                                >
                                    <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 opacity-5">
                                            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500" />
                                        </div>
                                        <div className="relative z-10 text-center">
                                            <div className="relative mb-4">
                                                <div className="w-28 sm:w-32 h-28 sm:h-32 mx-auto rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/30 bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                                                    <img
                                                        src={member.img}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-500"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.src = 'https://via.placeholder.com/150/E5E7EB/6B7280?text=Member';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800 h-6">{member.name}</h4>
                                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-semibold h-6">{member.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* How to Apply/Join Section */}
                    <section className="mt-16 md:mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-3xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center justify-center mb-6">
                                <ClipboardList className="w-8 h-8 text-purple-700 mr-3" />
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Become a Guest</h2>
                            </div>
                            <div className="text-base md:text-lg text-gray-600 space-y-4 leading-relaxed">
                                <p>
                                    Have a story to share or expertise in a medical field? We are always looking for passionate guests to join our podcast. Contact us to learn more about becoming a guest speaker.
                                </p>
                                <p className="font-semibold text-purple-600">
                                    Follow our social media channels for the latest episodes, behind-the-scenes content, and announcements.
                                </p>
                            </div>
                            {/* Social Media Links */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                                <div className="flex justify-center space-x-6">
                                    <a href="#" className="text-red-600 hover:text-red-800 transition-colors">
                                        <Youtube size={28} />
                                    </a>
                                    <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                                        <Instagram size={28} />
                                    </a>
                                    <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                                        <Linkedin size={28} />
                                    </a>

                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Modal */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
                                onClick={closeModal}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                                    >
                                        <X className="w-6 h-6 text-gray-700" />
                                    </button>

                                    {/* Image Container */}
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-[60vh]">
                                        <img
                                            src={selectedImage}
                                            alt="Podcast Team Member"
                                            className="w-full h-full object-contain max-w-full max-h-[90vh] p-6"
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

export default PodcastPage; 