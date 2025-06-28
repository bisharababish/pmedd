import React from 'react';
import { motion } from 'framer-motion';
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
import heba from "./teampics/hebaarab.jpeg";
import Laith from "./teampics/laith.jpeg";

const teamStructure = [
    {
        roleGroup: "Leadership & Founders",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Ahmad Romana',
                role: 'President & Founder',
                img: ahmad
            },
            {
                name: 'Kinda Abu Hashhash',
                role: 'Vice President & Co-Founder',
                img: kinda
            }
        ]
    },
    {
        roleGroup: "Public Representatives",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Lamar Abed',
                role: 'Public Representative & Co-Founder',
                img: Lamar
            },
            {
                name: 'Meray Dour',
                role: 'Public Representative',
                img: meray
            },
        ]
    },
    {
        roleGroup: "Department Heads",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Khaled Alqasrawi',
                role: 'Head Of Educational Content & Co-Founder',
                img: Khaled
            },
            {
                name: 'Dahlia Gaouni',
                role: 'Head of Video Editing',
                img: dahlia
            }
        ]
    },
    {
        roleGroup: "External & Internal Affairs",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Laith Mualla',
                role: 'Head of External Affairs',
                img: Laith
            },
            {
                name: 'Heba Arab',
                role: 'Head of Internal Affairs',
                img: heba
            }
        ]
    },
    {
        roleGroup: "Press & Media Team",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Abdallah Elayyan',
                role: 'Head of Press & Media',
                img: Abdallah
            },
            {
                name: 'Ahmad Abu Turk',
                role: 'Head of Press & Media',
                img: ahmadabuturk
            }
        ]
    },
    {
        roleGroup: "IT Team",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Mohammad Romana',
                role: 'Head of IT',
                img: Mohammad
            },
            {
                name: 'Bishara Babish',
                role: 'Head of IT',
                img: bish
            }
        ]
    },
    {
        roleGroup: "Design Team",
        color: "from-blue-600 to-blue-800",
        members: [
            {
                name: 'Qusai Shwaiki',
                role: 'Graphic Designer',
                img: 'https://randomuser.me/api/portraits/men/52.jpg'
            },
            {
                name: 'Hind Abu Al Ghaib',
                role: 'Graphic Designer',
                img: 'https://randomuser.me/api/portraits/women/12.jpg'
            }
        ]
    }
];

const TeamSection = () => {
    return (
        <div id="team" className="mb-20 max-w-7xl mx-auto scroll-mt-24 px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 pt-32 md:pt-36 lg:pt-40"
            >
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center text-blue-800">Our Team</h3>
                <div className="w-16 h-1 bg-blue-800 mb-8 rounded mx-auto" />
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Meet the brains, hearts, and hustle behind PMED Club!
                </p>
            </motion.div>

            {/* Team Groups */}
            <div className="space-y-16">
                {teamStructure.map((group, groupIdx) => (
                    <motion.div
                        key={groupIdx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 * groupIdx }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Role Group Title */}
                        <div className="text-center mb-8">
                            <h4 className={`text-2xl font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent mb-2`}>
                                {group.roleGroup}
                            </h4>
                            <div className={`w-12 h-0.5 bg-gradient-to-r ${group.color} mx-auto rounded`} />
                        </div>

                        {/* Members Container */}
                        <div className="relative">
                            {/* Member Cards */}
                            <div className={`grid gap-8 ${group.members.length === 1 ? 'grid-cols-1 justify-items-center' :
                                group.members.length === 2 ? 'grid-cols-1 md:grid-cols-2 justify-items-center' :
                                    group.members.length === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                } max-w-6xl mx-auto relative`}>

                                {/* Connecting Line for multiple members - positioned at bottom edge of cards */}
                                {group.members.length > 1 && (
                                    <div className="absolute -bottom-8 left-0 right-0 hidden lg:block pointer-events-none z-0">
                                        <div
                                            className={`h-1 bg-gradient-to-r ${group.color} rounded-full mx-auto`}
                                            style={{
                                                width: `${Math.min((group.members.length - 1) * 70, 80)}%`,
                                                maxWidth: '600px'
                                            }}
                                        />
                                    </div>
                                )}

                                {group.members.map((member, memberIdx) => (
                                    <motion.div
                                        key={memberIdx}
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.1 * memberIdx,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        viewport={{ once: true }}
                                        className="relative group z-10"
                                    >
                                        {/* Connection Point on Card - positioned at exact bottom edge */}
                                        {group.members.length > 1 && (
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:block z-20">
                                                <div className={`w-3 h-3 bg-gradient-to-r ${group.color} rounded-full shadow-lg border-2 border-white`} />
                                            </div>
                                        )}

                                        {/* Member Card */}
                                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center hover:scale-105 group-hover:-translate-y-2 flex flex-col items-center max-w-xs mx-auto relative z-10">
                                            <div className={`w-24 h-24 bg-gradient-to-br ${group.color} rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden ring-4 ring-white`}>
                                                <img
                                                    src={member.img}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                            <h5 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h5>
                                            <p className={`font-semibold text-sm bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                                                {member.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;