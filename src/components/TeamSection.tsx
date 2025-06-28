import React from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Megaphone, BookOpen, Video, ExternalLink, Code, Palette } from 'lucide-react';
import ahmad from "./teampics/ahmad.jpeg";
import kinda from "./teampics/kinda.jpeg";
import Lamar from "./teampics/Lamar.jpeg";
import Khaled from "./teampics/KhaledAlqasrawi.jpeg";
import Abdallah from "./teampics/abdallah.jpeg";
import dahlia from "./teampics/Dahlia.jpeg";
import Mohammad from "./teampics/Mohammad Romana.jpeg";
import ahmadabuturk from "./teampics/ahmadabuturk.jpeg";
import meray from "./teampics/MerayDour.jpeg";
import bish from "./teampics/bish.jpeg";
import heba from "./teampics/heba.jpeg";
import Laith from "./teampics/laith.jpeg";
const teamStructure = [
    {
        roleGroup: "Leadership & Founders",
        color: "from-violet-600 via-purple-600 to-indigo-600",
        accent: "from-violet-500 to-purple-500",
        icon: Crown,
        members: [
            {
                name: 'Ahmad Romana',
                role: 'President & Founder',
                img: ahmad,
            },
            {
                name: 'Kinda Abu Hashhash',
                role: 'Vice President & Co-Founder',
                img: kinda,
            }
        ]
    },
    {
        roleGroup: "Public Representatives",
        color: "from-emerald-600 via-teal-600 to-cyan-600",
        accent: "from-emerald-500 to-teal-500",
        icon: Megaphone,
        members: [
            {
                name: 'Lamar Abed',
                role: 'Public Representative & Co-Founder',
                img: Lamar,
            },
            {
                name: 'Meray Dour',
                role: 'Public Representative',
                img: meray,
            },
        ]
    },
    {
        roleGroup: "Department Heads",
        color: "from-amber-600 via-orange-600 to-red-600",
        accent: "from-amber-500 to-orange-500",
        icon: BookOpen,
        members: [
            {
                name: 'Khaled Alqasrawi',
                role: 'Head Of Educational Content & Co-Founder',
                img: Khaled,
            },
            {
                name: 'Dahlia Gaouni',
                role: 'Head of Video Editing',
                img: dahlia,
            }
        ]
    },
    {
        roleGroup: "External & Internal Affairs",
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
        icon: ExternalLink,
        members: [
            {
                name: 'Laith Mualla',
                role: 'Head of External Affairs',
                img: Laith,
            },
            {
                name: 'Heba Arab',
                role: 'Head of Internal Affairs',
                img: heba,
            }
        ]
    },
    {
        roleGroup: "Press & Media Team",
        color: "from-pink-600 via-rose-600 to-red-600",
        accent: "from-pink-500 to-rose-500",
        icon: Video,
        members: [
            {
                name: 'Abdallah Elayyan',
                role: 'Head of Press & Media',
                img: Abdallah,
            },
            {
                name: 'Ahmad Abu Turk',
                role: 'Head of Press & Media',
                img: ahmadabuturk,
            }
        ]
    },
    {
        roleGroup: "IT Team",
        color: "from-slate-600 via-gray-600 to-zinc-600",
        accent: "from-slate-500 to-gray-500",
        icon: Code,
        members: [
            {
                name: 'Mohammad Romana',
                role: 'Head of IT',
                img: Mohammad,
            },
            {
                name: 'Bishara Babish',
                role: 'Head of IT',
                img: bish,
            }
        ]
    },
    {
        roleGroup: "Design Team",
        color: "from-teal-600 via-green-600 to-emerald-600",
        accent: "from-teal-500 to-green-500",
        icon: Palette,
        members: [
            {
                name: 'Qusai Shwaiki',
                role: 'Graphic Designer',
                img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
            },
            {
                name: 'Hind Abu Al Ghaib',
                role: 'Graphic Designer',
                img: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
            }
        ]
    }
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

const TeamSection = () => {
    return (
        <div id="team" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center p-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 shadow-lg">
                        <Users className="w-8 h-8 text-indigo-600 mr-2" />
                        <span className="text-indigo-700 font-semibold">Our Amazing Team</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The passionate individuals driving innovation and excellence at PMED Club
                    </p>
                </motion.div>

                {/* Team Groups */}
                <div className="space-y-20">
                    {teamStructure.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                            className="relative"
                        >
                            {/* Group Header */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center mb-4">
                                    <div className={`p-3 bg-gradient-to-r ${group.accent} rounded-xl shadow-lg mr-3`}>
                                        <group.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                                        {group.roleGroup}
                                    </h3>
                                </div>
                                <div className={`w-24 h-1 bg-gradient-to-r ${group.color} mx-auto rounded-full`} />
                            </div>

                            {/* Members Grid */}
                            <div className={`grid gap-8 ${group.members.length === 1 ? 'grid-cols-1 justify-items-center max-w-md mx-auto' :
                                group.members.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                }`}>
                                {group.members.map((member, memberIdx) => (
                                    <motion.div
                                        key={memberIdx}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            transition: { type: "spring", stiffness: 300, damping: 20 }
                                        }}
                                        className="group relative"
                                    >
                                        {/* Card */}
                                        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                            {/* Background Pattern */}
                                            <div className="absolute inset-0 opacity-5">
                                                <div className={`w-full h-full bg-gradient-to-br ${group.color}`} />
                                            </div>

                                            {/* Floating Orbs */}
                                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
                                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg" />

                                            <div className="relative z-10 text-center">
                                                {/* Profile Image */}
                                                <div className="relative mb-6">
                                                    <div className={`w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/30 bg-gradient-to-br ${group.color} p-1`}>
                                                        <img
                                                            src={member.img}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover rounded-xl"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Member Info */}
                                                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                                                    {member.name}
                                                </h4>

                                                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${group.accent} rounded-full mb-3`}>
                                                    <p className="text-sm font-semibold text-white">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Hover Effect Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                                        </div>

                                        {/* Connection Line for Multiple Members */}
                                        {group.members.length > 1 && memberIdx < group.members.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-0" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30" />
                            <div className="absolute -bottom-8 right-1/3 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Join Our Amazing Team
                        </h3>
                        <p className="text-gray-600 mb-6">
                            We're always looking for passionate individuals to join our mission
                        </p>
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Get In Touch
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TeamSection;