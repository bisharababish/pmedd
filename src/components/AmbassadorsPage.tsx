import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';
import ibrahim from './teampics/Ibrahim Alzir - Greece Ambassador .png';
import joud from './teampics/Joud Akkad - USA Ambassador.png';

const ambassadors = [
    {
        name: 'Ibrahim Alzir',
        country: 'Greece',
        flag: '🇬🇷',
        img: ibrahim,
        description: 'PMED Ambassador representing the Palestinian medical community in Greece, building bridges between Palestinian students and medical institutions across Europe.',
    },
    {
        name: 'Joud Akkad',
        country: 'USA',
        flag: '🇺🇸',
        img: joud,
        description: 'PMED Ambassador in the United States, connecting Palestinian medical students with opportunities and networks across North America.',
    },
];

const AmbassadorsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1C2E4A] via-[#1C2E4A]/90 to-[#0f1e35] pt-28 pb-20 px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-2 mb-6">
                    <Globe className="w-5 h-5 text-blue-300" />
                    <span className="text-blue-200 font-medium tracking-wide text-sm uppercase">Global Representation</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                    Our <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Ambassadors</span>
                </h1>
                <p className="text-white/60 text-lg max-w-xl mx-auto">
                    PMED Ambassadors represent our community across the globe, connecting Palestinian medical students with the world.
                </p>
            </motion.div>

            {/* Ambassador Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {ambassadors.map((amb, i) => (
                    <motion.div
                        key={amb.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Photo */}
                        <div className="relative h-72 overflow-hidden">
                            <img
                                src={amb.img}
                                alt={amb.name}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E4A]/80 to-transparent" />
                            {/* Flag badge */}
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/30">
                                <span className="text-xl">{amb.flag}</span>
                                <span className="text-white font-semibold text-sm">{amb.country}</span>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-4 h-4 text-blue-300" />
                                <span className="text-blue-300 text-sm font-medium">{amb.country} Ambassador</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">{amb.name}</h2>
                            <p className="text-white/60 text-sm leading-relaxed">{amb.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AmbassadorsPage;
