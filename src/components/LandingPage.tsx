import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    BookOpen,
    Stethoscope,
    Heart,
    Brain,
    Scissors,
    Activity,
    ArrowRight,
    ExternalLink,
    Mail,
    Phone,
    MessageCircle
} from 'lucide-react';
import slide4Image from './images/Slide4.jpg';

const LandingPage: React.FC = () => {
    const interestGroups = [
        {
            name: 'Cardiology',
            status: 'Open',
            description: 'Learn from expert doctors, join research projects, and gain mentorship in cardiology.',
            buttonText: 'Join Cardiology',
            buttonLink: '/cardiology',
            icon: Heart,
            color: 'from-red-500 to-red-600'
        },
        {
            name: 'Neurology',
            status: 'Coming Soon',
            description: 'Expert-led mentorship & skill-building in neurology.',
            buttonText: 'Coming Soon',
            buttonLink: '#',
            icon: Brain,
            color: 'from-purple-500 to-purple-600'
        },
        {
            name: 'Surgery',
            status: 'Coming Soon',
            description: 'Clinical exposure and research opportunities in surgery.',
            buttonText: 'Coming Soon',
            buttonLink: '#',
            icon: Scissors,
            color: 'from-blue-500 to-blue-600'
        },
        {
            name: 'Internal Medicine',
            status: 'Coming Soon',
            description: 'Build strong foundations in internal medicine under expert guidance.',
            buttonText: 'Coming Soon',
            buttonLink: '#',
            icon: Activity,
            color: 'from-green-500 to-green-600'
        }
    ];

    const benefits = [
        {
            icon: Users,
            title: 'Led by students, for students',
            description: 'Peer-to-peer learning and support'
        },
        {
            icon: BookOpen,
            title: 'Solid medical knowledge',
            description: 'Evidence-based learning materials'
        },
        {
            icon: Stethoscope,
            title: 'Essential clinical skills',
            description: 'Hands-on practice and training'
        },
        {
            icon: Heart,
            title: 'Strong medical ethics',
            description: 'Building character for future doctors'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 1️⃣ Header Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={slide4Image}
                        alt="PMED Event"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Join PMED Club
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light">
                            Your journey to becoming a future doctor starts here
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const joinSection = document.getElementById('join-us-section');
                                if (joinSection) {
                                    joinSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                        >
                            Start Your Journey
                            <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Ready to Level Up Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            READY TO LEVEL UP YOUR MED SCHOOL JOURNEY?
                        </h2>
                        <p className="text-xl text-gray-700 mb-4">
                            PMED isn't just a club - it's a movement for med students!
                        </p>
                        <p className="text-2xl font-bold text-blue-600 mb-8">
                            PMED = where future doctors are made
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ PMED Interest Groups Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            PMED Interest Groups
                        </h2>
                        <p className="text-xl text-gray-700 mb-4 max-w-4xl mx-auto">
                            PMED is the FIRST club in Palestine to launch Interest Groups - and we're just getting started!
                        </p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A dedicated space for med students to connect, grow, and sharpen their skills in the specialties they dream of under the mentorship of inspiring doctors. Where passion meets opportunity!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {interestGroups.map((group, index) => (
                            <motion.div
                                key={group.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
                            >
                                <div className={`h-2 bg-gradient-to-r ${group.color}`}></div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-lg flex items-center justify-center`}>
                                                <group.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{group.name}</h3>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${group.status === 'Open'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {group.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        {group.description}
                                    </p>
                                    <button
                                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${group.status === 'Open'
                                            ? `bg-gradient-to-r ${group.color} text-white hover:shadow-lg`
                                            : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                                            }`}
                                        disabled={group.status !== 'Open'}
                                        onClick={() => {
                                            if (group.status === 'Open') {
                                                window.location.href = group.buttonLink;
                                            }
                                        }}
                                    >
                                        {group.buttonText}
                                        {group.status === 'Open' && <ArrowRight className="inline-block ml-2 w-4 h-4" />}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Why it matters */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Why PMED Interest Groups Matter
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <p className="text-gray-700">Learn directly from expert doctors</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <p className="text-gray-700">Join research projects & real clinical exposure</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <p className="text-gray-700">Get mentorship that guides your future specialty</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <p className="text-gray-700">Build a solid foundation for residency & beyond</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4️⃣ Join Us Section */}
            <section id="join-us-section" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Us
                        </h2>
                        <p className="text-xl mb-12 max-w-3xl mx-auto">
                            This is YOUR chance to shape your future as a doctor. Connect, learn, and grow with PMED!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FFEdxA2yJ5jMggegH7%3Ffbclid%3DPAZnRzaANMc8pleHRuA2FlbQIxMQABp3LnPq-U5B-L6VTW7oQHIsc6SkBtMlrJ64Nky5Tu84RGnnSvbXZ82HfcastU_aem_-jEVcC3af7kxnAem80dP5A&e=AT2qjUdVFFZD9TZdE1N0UN_lPpMFylu0JzyiAPuuJCxoki1DX5nqEga7BdTqinyBQS3Bx5evlBtRrFtQXNoqX8Gg1NpDf4BC95syVfEC7w"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg flex items-center"
                            >
                                Apply Now to join PMED family
                                <ExternalLink className="ml-2 w-5 h-5" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://chat.whatsapp.com/CHAT_ID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg flex items-center"
                            >
                                Join WhatsApp Group
                                <MessageCircle className="ml-2 w-5 h-5" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdQ5HWcbynEI-LUFtQbdkiV_i27JY2Zq1pI4Bkamp4hE21N5g/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg flex items-center"
                            >
                                Become a member of PMED cardiology club
                                <ExternalLink className="ml-2 w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
