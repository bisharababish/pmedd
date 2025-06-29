import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, X } from 'lucide-react';
import supervisor1 from "./supervisorpics/supervisor1.png";
import supervisor2 from "./supervisorpics/supervisor2.png";
import supervisor3 from "./supervisorpics/supervisor3.png";
import supervisor4 from "./supervisorpics/supervisor4.png";
import supervisor6 from "./supervisorpics/supervisor6.png";
import supervisor7 from "./supervisorpics/supervisor7.png";
import Slide3 from "./images/Slide3.png";
import './CardiologyPage.css'; // Import custom CSS for animation

// Array for 6 supervisor cards with their images
const supervisors = [
    supervisor1,
    supervisor2,
    supervisor3,
    supervisor4,
    supervisor6,
    supervisor7
];


const CardiologyPage = () => {
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
            style={{ backgroundImage: `url(${Slide3})` }}
        >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-blue-50/80 backdrop-blur-[1px]"></div>

            <div className="relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto py-16 px-6">

                    {/* Hero Section */}
                    <div className="text-center mb-20 mt-20">
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
                            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-blue-700 to-red-500 bg-clip-text text-transparent mb-6"
                        >
                            PMED Cardiology Club
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* About Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Program</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                                PMED Cardiology is an <span className="font-semibold text-red-600">officially recognized division</span> of the PMED Club, accredited by the <span className="font-semibold text-blue-700">American College of Cardiology</span>, the Ministry of Health, and several leading hospitals and medical educational organizations. Our mission is to empower medical students with deep and practical understanding of cardiology through a structured program offering <span className="font-semibold text-red-600">10 competitive annual seats</span>. Selected students benefit from hands-on clinical exposure, expert-led research, and personalized mentorship. The division is supported by a team of professional supervisors and provides exclusive research opportunities, enabling participants to contribute to meaningful academic work and develop into future leaders in cardiovascular medicine.
                            </p>
                        </div>
                    </motion.section>

                    {/* Supervisors Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center p-3 bg-white/90 backdrop-blur-sm rounded-2xl mb-8 shadow-lg border border-white/20">
                                <Users className="w-8 h-8 text-red-600 mr-3" />
                                <span className="text-red-600 font-bold text-lg">Our Expert Team</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-6">
                                MEET OUR SUPERVISORS
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full mb-6"></div>
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                                Distinguished cardiologists and medical professionals dedicated to advancing cardiovascular medicine and mentoring the next generation of healthcare leaders
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {supervisors.map((supervisorImg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.03,
                                        transition: { type: 'spring', stiffness: 300, damping: 20 }
                                    }}
                                    className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden cursor-pointer border border-white/30 hover:shadow-3xl transition-all duration-300"
                                    onClick={() => openModal(supervisorImg)}
                                >
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                                    {/* Content */}
                                    <div className="relative p-6">
                                        {/* Supervisor Image Container */}
                                        <div className="relative mb-6 mx-auto">
                                            <div className="w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl">
                                                <img
                                                    src={supervisorImg}
                                                    alt={`Supervisor ${idx + 1}`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = `https://via.placeholder.com/400x320/E5E7EB/6B7280?text=Supervisor+${idx + 1}`;
                                                    }}
                                                />
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                            {/* Click to View Indicator */}
                                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* ECG Line Decoration */}
                                        <div className="flex justify-center">
                                            <svg width="120" height="30" viewBox="0 0 120 30" className="text-red-400 opacity-60">
                                                <path
                                                    d="M0,15 L20,15 L25,8 L30,22 L35,8 L40,15 L45,15 L50,10 L55,20 L60,15 L120,15"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    className="animate-pulse"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

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
                                            alt="Supervisor Details"
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

export default CardiologyPage;