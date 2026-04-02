import { motion } from 'framer-motion';
import neurologyLogo from "./supervisorpics/PMED Neuro Club.jpg";

import ahmadRomana from "../neuroteampics/Ahmad Romana - Head of Neuro Club.jpg";
import baraaNassar from "../neuroteampics/Baraa Nassar - Activities Assistant.jpg";
import daniaManasra from "../neuroteampics/Dania Manasra - outreach officer.jpg";
import mohammadSawalmeh from "../neuroteampics/Mohammad Sawalmeh - Research Assistant.jpg";
import randMalhis from "../neuroteampics/Rand Malhis - Neuro Secretary General.jpg";
import salahaldeen from "../neuroteampics/Salahaldeen Deeb - Research Officer.jpg";
import talaIkhzamia from "../neuroteampics/Tala Ikhzamia.jpg";

const members = [
    { name: "Ahmad Romana", role: "Head of Neuro Club", img: ahmadRomana },
    { name: "Rand Malhis", role: "Neuro Secretary General", img: randMalhis },
    { name: "Dania Manasra", role: "Outreach Officer", img: daniaManasra },
    { name: "Salahaldeen Deeb", role: "Research Officer", img: salahaldeen },
    { name: "Mohammad Sawalmeh", role: "Research Assistant", img: mohammadSawalmeh },
    { name: "Baraa Nassar", role: "Activities Assistant", img: baraaNassar },
    { name: "Tala Ikhzamia", role: "Neuro Team Member", img: talaIkhzamia },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NeuroTeamPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] py-24 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex justify-center mb-6">
                        <img src={neurologyLogo} alt="PMED Neuro Club" className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-[#065f46]/20" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#065f46] mb-4">PMED Neuro Club Team</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#065f46] via-[#059669] to-[#065f46] mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Meet the dedicated team behind the PMED Neuro Club — passionate students driving neuroscience education and research in Palestine.
                    </p>
                </motion.div>

                {/* Members Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden flex flex-col items-center text-center p-6"
                        >
                            <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4 shadow-md border-2 border-[#065f46]/20">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-gray-900 text-base mb-1">{member.name}</h3>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#065f46] text-white">
                                {member.role}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default NeuroTeamPage;
