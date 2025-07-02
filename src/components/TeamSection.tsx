import React from 'react';
import { motion } from 'framer-motion';
import { Users, Megaphone, BookOpen, Video, ExternalLink, Code, Palette } from 'lucide-react';
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
// Mock images for demonstration


const teamStructure = [
    {
        roleGroup: "Leadership & Founders",
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
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
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
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
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
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
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
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
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
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
        color: "from-blue-600 via-indigo-600 to-purple-600",
        accent: "from-blue-500 to-indigo-500",
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

// Member Card Component
interface Member {
    name: string;
    role: string;
    img: string;
}

interface Group {
    color: string;
    accent: string;
}

interface MemberCardProps {
    member: Member;
    group: Group;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, group }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{
            y: -8,
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="group relative"
    >
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
    </motion.div>
);

const TeamSection = () => {
    const founders = teamStructure[0]; // Leadership & Founders
    const otherTeams = teamStructure.slice(1); // All other teams

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
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Meet the brains, hearts, and hustle behind PMED Club!
                    </p>
                </motion.div>

                {/* Tree Structure */}
                <div className="relative">
                    {/* Founders at the top */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="mb-16"
                    >
                        {/* Founders Header */}
                        <div className="text-center mb-12">
                            <h3 className={`text-3xl font-bold bg-gradient-to-r ${founders.color} bg-clip-text text-transparent mb-4`}>
                                {founders.roleGroup}
                            </h3>
                            <div className={`w-24 h-1 bg-gradient-to-r ${founders.color} mx-auto rounded-full`} />
                        </div>

                        {/* Founders Cards */}
                        <div className="flex justify-center gap-8 mb-12">
                            {founders.members.map((member, idx) => (
                                <div key={idx} className="w-80">
                                    <MemberCard member={member} group={founders} />
                                </div>
                            ))}
                        </div>

                        {/* Connecting lines from founders */}
                        <div className="relative flex justify-center mb-8">
                            <div className="w-px h-12 bg-gradient-to-b from-indigo-300 to-transparent"></div>
                        </div>
                        <div className="relative mb-8">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                            <div className="flex justify-center">
                                <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Other team members in tree formation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative">
                        {/* Vertical connecting lines */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent opacity-30 hidden lg:block"></div>
                        
                        {otherTeams.map((group, groupIdx) => (
                            <motion.div
                                key={groupIdx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="relative"
                            >
                                {/* Branch connecting line */}
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-indigo-200 to-transparent hidden lg:block"></div>
                                
                                {/* Group Header */}
                                <div className="text-center mb-8">
                                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent mb-2`}>
                                        {group.roleGroup}
                                    </h3>
                                    <div className={`w-16 h-0.5 bg-gradient-to-r ${group.color} mx-auto rounded-full`} />
                                </div>

                                {/* Team Members */}
                                <div className="space-y-6">
                                    {group.members.map((member, memberIdx) => (
                                        <div key={memberIdx} className="relative">
                                            {/* Connecting line between team members */}
                                            {memberIdx > 0 && (
                                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-200 to-transparent"></div>
                                            )}
                                            <MemberCard member={member} group={group} />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
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