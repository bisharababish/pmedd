import React from 'react';
import { motion } from 'framer-motion';
import ahmad from "./teampics/ahmad.jpeg";
import kinda from "./teampics/kinda.jpeg";
import Lamar from "./teampics/Lamar.jpeg";
import heba from "./teampics/HebaArab.jpeg";
import Khaled from "./teampics/KhaledAlqasrawi.jpeg";
import Laith from "./teampics/LaithMualla.jpeg";
import Abdallah from "./teampics/abdallah.jpeg";
import dahlia from "./teampics/Dahlia.jpeg";
import Mohammad from "./teampics/Mohammad Romana.jpeg";
import ahmadabuturk from "./teampics/ahmadabuturk.jpeg";
import meray from "./teampics/MerayDour.jpeg";

const teamMembers = [
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Ahmad Romana',
        role: 'President & Founder',
        img: ahmad
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Kinda Abu Hashhash',
        role: 'Vice President & Co-Founder',
        img: kinda
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Lamar Abed',
        role: 'Public Representative & Co-Founder',
        img: Lamar
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Meray Dour',
        role: 'Public Representative',
        img: meray
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Heba Arab',
        role: 'Public Representative ',
        img: heba
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Khaled Alqasrawi',
        role: 'Head Of Educational Content & Co-Founder',
        img: Khaled
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Laith Mualla',
        role: 'Head of External Affairs',
        img: Laith
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Abdallah Elayyan',
        role: 'Head of Press & Media',
        img: Abdallah
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Ahmad Abu Turk',
        role: 'Head of Press & Media',
        img: ahmadabuturk
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Dahlia Gaouni',
        role: 'Head of Video Editing',
        img: dahlia
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Qusai Shwaiki',
        role: 'Graphic Designers',
        img: 'https://randomuser.me/api/portraits/men/52.jpg'
    },

    {
        color: 'from-blue-600 to-blue-800',
        name: 'Hind Abu Al Ghaib',
        role: 'Graphic Designers',
        img: 'https://randomuser.me/api/portraits/women/12.jpg'
    },

    {
        color: 'from-blue-600 to-blue-800',
        name: 'Mohammad Romana',
        role: 'Head of IT',
        img: Mohammad
    },
    {
        color: 'from-blue-600 to-blue-800',
        name: 'Bishara Babish',
        role: 'Head of IT',
        img: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
];

const TeamSection: React.FC = () => (
    <div
        id="team"
        className="mb-20 max-w-6xl mx-auto scroll-mt-24"
    >
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 pt-32 md:pt-36 lg:pt-40"
        >
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center text-blue-800">Our Team</h3>
            <div className="w-16 h-1 bg-blue-800 mb-8 rounded mx-auto" />
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Meet the brains, hearts, and hustle behind PMED Club!           </p>
        </motion.div>
        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-2 md:px-0">
            {teamMembers.map((member, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center hover:scale-105 flex flex-col items-center"
                >
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden`}>
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-800 mb-2">{member.name}</h4>
                    <p className="font-semibold mb-3" style={{ color: member.color.includes('blue') ? '#2563eb' : member.color.includes('emerald') ? '#059669' : '#7c3aed' }}>{member.role}</p>

                </motion.div>
            ))}
        </div>
    </div>
);

export default TeamSection; 