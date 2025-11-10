import React from 'react';
import { motion } from 'framer-motion';
import { Video, Code, Heart, HeartPulse } from 'lucide-react';
import ahmad from "./teampics/mhmd.png";
import kinda from "./teampics/kinda.jpeg";
import Abdallah from "./teampics/abdallah.jpeg";
import bish from "./teampics/bish.jpeg";
import jana from "./teampics/jana.jpg";
import meray from "./teampics/MerayDour.jpeg";
import noran from "./teampics/noran.png";
import raghad from "./teampics/raghad.png";
import olga from "./teampics/olga.png";
import masri from "./teampics/masri.png";
import joelle from "./teampics/joelle.png";
import mohammadRomana from "./teampics/Mohammad Romana.jpeg";

const teamStructure = [
    {
        roleGroup: "Leadership & Founders",
        color: "from-[#1C2E4A] via-[#1C2E4A] to-[#1C2E4A]",
        accent: "from-blue-500 to-indigo-500",
        members: [
            {
                name: 'Ahmad Romana',
                role: 'President & Founder',
                img: ahmad,
                description: "Ahmad Romana is a third-year medical student who believes that he was born for a reason — to make the difference. He is also the founder of the PMED CLUB and its divisions. He has served as vice president of Neuropedia. In addition, he completed a Neuroscience internship at one of Europe's top neuroscience departments at UCL, London. He believes that difficult circumstances can't limit a true idea — it can be turned into a real impact.",
                quote: "The best way to dominate something is to enjoy it.",
                email: 'a.romana@pmed.club'
            },
            {
                name: 'Kinda Abu Hashhash',
                role: 'Vice President & Co-Founder',
                img: kinda,
                description: "Kinda Abu Hashhash is a fourth-year medical student and the Head of the PMED Cardiology Club. She’s passionate about both medicine and debate, having represented Palestine in the Reading Challenge and her university in Qatar’s International Debating Championship. These experiences helped shape her leadership and communication skills. As Vice President of PMED and leader of the cardiology division, Kinda continues to create spaces that combine science.",
                quote: "Medicine taught me that every heartbeat is a dialogue between science and humanity",
                email: 'k.hashhash@pmed.club'
            }
        ]
    },
    {
        roleGroup: "Cardiology Club Board Team",
        color: "from-[#990000] via-[#990000] to-[#990000]",
        accent: "from-red-600 to-red-700",
        icon: Heart,
        members: [
            {
                name: 'Kinda Abu Hashhash',
                role: 'Head of Cardiology Club',
                img: kinda,
            },
            {
                name: 'Jana Faroun',
                role: 'Cardiology Secretary General',
                img: jana,
            },
            {
                name: 'Noran Orabi',
                role: 'Cardiology Outreach Officer',
                img: noran,
            },
            {
                name: 'Raghad Doufesh',
                role: 'Cardiology Membership Officer',
                img: raghad,
            },
            {
                name: 'Olga Ramahi',
                role: 'Cardiology Research Officer',
                img: olga,
            },
            {
                name: 'Mohammad Masri',
                role: 'Cardiology Educational Content Officer',
                img: masri,
            },
            {
                name: 'Joelle Ammar',
                role: 'Cardiology Activities Officer',
                img: joelle,
            },
        ]
    },
    {
        roleGroup: "Press & Media Team",
        color: "from-[#1C2E4A] via-[#1C2E4A] to-[#1C2E4A]",
        accent: "from-blue-500 to-indigo-500",
        icon: Video,
        members: [
            {
                name: 'Abdallah Elayyan',
                role: 'Head of Press & Media',
                img: Abdallah,
            },
            {
                name: 'Meray Dour',
                role: 'Head of Press & Media',
                img: meray,
            }
        ]
    },
    {
        roleGroup: "IT Team",
        color: "from-[#1C2E4A] via-[#1C2E4A] to-[#1C2E4A]",
        accent: "from-blue-500 to-indigo-500",
        icon: Code,
        members: [
            {
                name: 'Bishara Babish',
                role: 'Head of IT',
                img: bish,
            },
            {
                name: 'Mohammad Romana',
                role: 'IT Systems Architect',
                img: mohammadRomana,
                description: "Mohammad Romana keeps PMED's digital backbone secure, scalable, and ready for every new initiative.",
            }
        ]
    }
];

type Team = typeof teamStructure[number];

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

interface Member {
    name: string;
    role: string;
    img: string;
    description?: string;
    quote?: string;
    email?: string;
}

interface Group {
    color: string;
    accent: string;
}

interface MemberCardProps {
    member: Member;
    group: Group;
}

const LeadershipCard: React.FC<MemberCardProps> = ({ member }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{
            y: -8,
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="group relative h-full"
    >
        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-border-gray hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[720px]">
            { }
            <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A]`} />
            </div>

            { }
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-6 mb-6 items-start">
                    { }
                    <div className="flex-shrink-0 text-center sm:text-left flex flex-col items-center sm:items-start gap-4 w-full sm:w-auto">
                        <div className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto sm:mx-0 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/30 bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A] p-0.5 sm:p-1`}>
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="space-y-3 w-full">
                            {member.role && (
                                <div>
                                    <div className={`inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#1C2E4A] to-[#1C2E4A] rounded-full`}>
                                        <p className="text-sm sm:text-base font-semibold text-white">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            )}
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="block text-sm sm:text-base font-semibold text-[#1C2E4A] hover:text-[#324a72] transition-colors underline decoration-[#1C2E4A]/40 underline-offset-4 break-all"
                                >
                                    Contact: {member.email}
                                </a>
                            )}
                        </div>
                    </div>

                    { }
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                        <h4 className="text-2xl sm:text-3xl font-bold text-main-gray mb-2 sm:mb-3 group-hover:text-[#1C2E4A] transition-colors">
                            {member.name}
                        </h4>
                        {member.quote && (
                            <p className="text-sm sm:text-base md:text-lg italic text-[#1C2E4A] font-medium">
                                "{member.quote}"
                            </p>
                        )}
                    </div>
                </div>

                { }
                {member.description && (
                    <div className="mb-6 flex-1">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200/50 shadow-inner h-full">
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 text-left">
                                {member.description}
                            </p>
                        </div>
                    </div>
                )}

                { }
            </div>

            { }
            <div className={`absolute inset-0 bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
        </div>
    </motion.div>
);

const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{
            y: -8,
            scale: 1.02,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="group relative"
    >
        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-lg border border-border-gray hover:shadow-2xl transition-all duration-500 overflow-hidden">
            { }
            <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A]`} />
            </div>

            { }
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg" />

            <div className="relative z-10 text-center">
                { }
                <div className="relative mb-4 sm:mb-6">
                    <div className={`w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/30 bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A] p-0.5 sm:p-1`}>
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                { }
                <h4 className="text-base sm:text-xl font-bold text-main-gray mb-1 sm:mb-2 group-hover:text-[#1C2E4A] transition-colors">
                    {member.name}
                </h4>

                <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#1C2E4A] to-[#1C2E4A] rounded-full mb-2 sm:mb-3`}>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                        {member.role}
                    </p>
                </div>
            </div>

            { }
            <div className={`absolute inset-0 bg-gradient-to-br from-[#1C2E4A] to-[#1C2E4A] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
        </div>
    </motion.div>
);

const TreeMemberCard: React.FC<{ member: Member; isHead?: boolean }> = ({ member, isHead = false }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{
            y: -6,
            scale: 1.015,
            transition: { type: "spring", stiffness: 280, damping: 24 }
        }}
        className="group relative"
    >
        <div className={`relative ${isHead ? "bg-white/80" : "bg-white/70"} backdrop-blur-sm rounded-3xl ${isHead ? "p-6 sm:p-8" : "p-4 sm:p-6"} shadow-lg border ${isHead ? "border-red-200/70" : "border-red-100/50"} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-[#990000] to-[#7a0000]" />
            </div>

            <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-red-100/40 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-tr from-red-100/40 to-transparent rounded-full blur-lg" />

            <div className="relative z-10 text-center">
                <div className="relative mb-3 sm:mb-5 flex justify-center">
                    <div className={`${isHead ? "w-24 h-24 sm:w-32 sm:h-32" : "w-20 h-20 sm:w-24 sm:h-24"} rounded-2xl overflow-hidden shadow-xl ring-4 ${isHead ? "ring-red-100/60" : "ring-red-50/60"} bg-gradient-to-br from-[#990000] to-[#7f0000] p-0.5 sm:p-1`}>
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                <h4 className={`${isHead ? "text-lg sm:text-2xl" : "text-base sm:text-xl"} font-bold text-main-gray mb-1 sm:mb-2 group-hover:text-[#990000] transition-colors`}>
                    {member.name}
                </h4>

                <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#990000] to-[#7a0000] rounded-full mb-2 sm:mb-3`}>
                    <p className={`${isHead ? "text-sm sm:text-base" : "text-xs sm:text-sm"} font-semibold text-white`}>
                        {member.role}
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#990000] to-[#7a0000] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />
        </div>
    </motion.div>
);

const CardiologyTree: React.FC<{ team: Team }> = ({ team }) => {
    const [leader, ...members] = team.members;
    const upperRowCount = Math.ceil(members.length / 2);
    const upperRow = members.slice(0, upperRowCount);
    const lowerRow = members.slice(upperRowCount);

    return (
        <div className="relative max-w-6xl mx-auto px-4">
            <div className="absolute inset-x-0 -top-8 sm:-top-10 -bottom-6 flex justify-center pointer-events-none">
                <Heart className="w-56 h-56 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] text-red-200/40 opacity-60" strokeWidth={0.8} />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10">
                {leader && (
                    <div className="flex flex-col items-center gap-3 sm:gap-4">
                        <TreeMemberCard member={leader} isHead />
                    </div>
                )}

                {members.length > 0 && (
                    <>
                        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-red-300 via-red-200 to-transparent" />

                        <div className="relative w-full flex flex-col gap-12 sm:gap-16">
                            {upperRow.length > 0 && (
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-3xl h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center pt-6">
                                        {upperRow.map((member) => (
                                            <div key={member.name} className="flex flex-col items-center gap-4">
                                                <div className="w-px h-6 bg-gradient-to-b from-red-200 to-transparent" />
                                                <TreeMemberCard member={member} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {lowerRow.length > 0 && (
                                <>
                                    <div className="flex justify-center">
                                        <div className="w-px h-8 bg-gradient-to-b from-red-200 via-red-100 to-transparent" />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-px bg-gradient-to-r from-transparent via-red-100 to-transparent" />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center pt-6">
                                            {lowerRow.map((member) => (
                                                <div key={member.name} className="flex flex-col items-center gap-4">
                                                    <div className="w-px h-6 bg-gradient-to-b from-red-100 to-transparent" />
                                                    <TreeMemberCard member={member} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const TeamSection = () => {
    const founders = teamStructure[0];
    const cardiologyTeam = teamStructure[1];
    const otherTeams = teamStructure.slice(2);
    const topTierTeams = otherTeams.slice(0, 3);
    const bottomTierTeams = otherTeams.slice(3);

    const topTierGridCols = topTierTeams.length >= 3
        ? 'md:grid-cols-2 lg:grid-cols-3'
        : topTierTeams.length === 2
            ? 'md:grid-cols-2 lg:grid-cols-2'
            : 'md:grid-cols-1';

    const bottomTierGridCols = bottomTierTeams.length >= 3
        ? 'md:grid-cols-2 lg:grid-cols-3'
        : bottomTierTeams.length === 2
            ? 'md:grid-cols-2 lg:grid-cols-2'
            : bottomTierTeams.length === 1
                ? 'md:grid-cols-1'
                : '';

    return (
        <div id="team" className="py-16 sm:py-20 md:py-24 bg-very-light-blue min-h-screen mt-20">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                { }
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1C2E4A] to-[#1C2E4A] bg-clip-text text-transparent mb-4 sm:mb-6">
                        Meet Our Team
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
                        Meet the brains, hearts, and hustle behind PMED Club!
                    </p>
                </motion.div>

                { }
                <div className="relative">
                    { }
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="mb-10 sm:mb-14 md:mb-16"
                    >
                        { }
                        <div className="text-center mb-6 sm:mb-10 md:mb-12">
                            <h3 className={`text-2xl sm:text-3xl font-bold text-[#1C2E4A] mb-2 sm:mb-4`}>
                                {founders.roleGroup}
                            </h3>
                            <div className={`w-16 sm:w-24 h-1 bg-[#1C2E4A] mx-auto rounded-full`} />
                        </div>

                        { }
                        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 mb-8 sm:mb-12 items-stretch">
                            {founders.members.map((member, idx) => (
                                <div key={idx} className="w-full lg:w-1/2 max-w-3xl mx-auto lg:mx-0 flex">
                                    <LeadershipCard member={member} group={founders} />
                                </div>
                            ))}
                        </div>

                        { }
                        <div className="relative flex justify-center mb-4 sm:mb-8">
                            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-indigo-300 to-transparent"></div>
                        </div>
                        <div className="relative mb-4 sm:mb-8">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4 sm:w-4/5 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                            <div className="flex justify-center">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-indigo-400 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                    { }
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="mb-10 sm:mb-14 md:mb-16"
                    >
                        <div className="text-center mb-6 sm:mb-10 md:mb-12">
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#990000] mb-2 sm:mb-4 flex justify-center items-center gap-3">
                                <HeartPulse
                                    className="w-8 h-8 sm:w-10 sm:h-10 text-red-400/70"
                                    strokeWidth={1.5}
                                />
                                <span>Cardiology Club Board Team</span>
                            </h3>
                            <div className="w-16 sm:w-24 h-1 bg-[#990000] mx-auto rounded-full" />
                        </div>

                        <CardiologyTree team={cardiologyTeam} />

                        <div className="relative flex justify-center mt-8 sm:mt-12 mb-4 sm:mb-8">
                            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-red-300 to-transparent" />
                        </div>
                        <div className="relative mb-4 sm:mb-8">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4 sm:w-4/5 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent" />
                            <div className="flex justify-center">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    { }
                    <div className={`grid grid-cols-1 ${topTierGridCols} gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-16 relative justify-items-center`}>
                        {topTierTeams.length > 1 && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent opacity-30 hidden lg:block"></div>
                        )}

                        {topTierTeams.map((group, groupIdx) => (
                            <motion.div
                                key={groupIdx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={containerVariants}
                                className="relative"
                            >
                                { }
                                {topTierTeams.length > 1 && (
                                    <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-indigo-200 to-transparent hidden lg:block"></div>
                                )}

                                { }
                                <div className="text-center mb-4 sm:mb-8">
                                    <h3 className={`text-xl sm:text-2xl font-bold text-[#1C2E4A] mb-1 sm:mb-2`}>
                                        {group.roleGroup}
                                    </h3>
                                    <div className="w-10 sm:w-16 h-0.5 bg-[#1C2E4A] mx-auto rounded-full" />
                                </div>

                                { }
                                <div className="space-y-4 sm:space-y-6">
                                    {group.members.map((member, memberIdx) => (
                                        <div key={memberIdx} className="relative">
                                            { }
                                            {memberIdx > 0 && (
                                                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 w-px h-4 sm:h-6 bg-gradient-to-b from-gray-200 to-transparent"></div>
                                            )}
                                            <div className="w-full max-w-xs mx-auto">
                                                <MemberCard member={member} group={group} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    { }
                    <div className="mt-10 sm:mt-16 flex justify-center">
                        <div className={`grid grid-cols-1 ${bottomTierGridCols} gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-16 relative justify-items-center`}>
                            {bottomTierTeams.map((group, groupIdx) => (
                                <motion.div
                                    key={groupIdx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={containerVariants}
                                    className="relative"
                                >
                                    { }
                                    {bottomTierTeams.length > 1 && (
                                        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-indigo-200 to-transparent hidden lg:block"></div>
                                    )}

                                    { }
                                    <div className="text-center mb-4 sm:mb-8">
                                        <h3 className={`text-xl sm:text-2xl font-bold text-[#1C2E4A] mb-1 sm:mb-2`}>
                                            {group.roleGroup}
                                        </h3>
                                        <div className="w-10 sm:w-16 h-0.5 bg-[#1C2E4A] mx-auto rounded-full" />
                                    </div>

                                    { }
                                    <div className="space-y-4 sm:space-y-6">
                                        {group.members.map((member, memberIdx) => (
                                            <div key={memberIdx} className="relative">
                                                { }
                                                {memberIdx > 0 && (
                                                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 w-px h-4 sm:h-6 bg-gradient-to-b from-gray-200 to-transparent"></div>
                                                )}
                                                <div className="w-full max-w-xs mx-auto">
                                                    <MemberCard member={member} group={group} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                { }
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16 md:mt-20"
                >
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                            Join Our Amazing Team
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                            We're always looking for passionate individuals to join our mission
                        </p>
                        <button
                            className="w-full sm:w-auto bg-gradient-to-r from-[#1C2E4A] to-[#1C2E4A] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Get In Touch
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TeamSection;