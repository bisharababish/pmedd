import React, { useState, useEffect } from 'react';
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
    ChevronLeft,
    ChevronRight,
    MessageCircle
} from 'lucide-react';
import slide4Image from './images/Slide4.jpg';
import picofthemImage from './images/picofthem.png';
import cardiologyLogoImage from './images/png.png';

interface SlideButton {
    text: string;
    link: string;
    color: string;
}

interface Slide {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    buttonText: string;
    buttonColor: string;
    titleTransparent?: boolean;
    buttons?: SlideButton[];
}

const LandingPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const slides: Slide[] = [
        {
            id: 1,
            title: 'Join PMED Podcast',
            description: 'Your journey to becoming a future doctors starts here',
            image: slide4Image,
            link: 'https://www.youtube.com/@pmedclubchannel',
            buttonText: 'Watch Now',
            buttonColor: 'from-red-800 to-red-900 hover:from-red-900 hover:to-red-950' // Darker reddish-brown to match heart background
        },
        {
            id: 2,
            title: 'PMED Club',
            description: 'where medicine meets conversation, and voices shape the future of healthcare.',
            image: picofthemImage,
            link: 'https://www.youtube.com/@pmedclubchannel',
            buttonText: 'Start Your Journey',
            buttonColor: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800', // Color to match podcast background
            buttons: [
                {
                    text: 'Start Your Journey',
                    link: '#join-us-section',
                    color: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                },
                {
                    text: 'About Us',
                    link: '/team',
                    color: 'from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                }
            ]
        },
        {
            id: 3,
            title: 'PMED Cardiology Club',
            description: 'Where hearts and minds beat together for medical excellence.',
            image: cardiologyLogoImage,
            link: '/cardiology',
            buttonText: 'Start Your Journey',
            buttonColor: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
            titleTransparent: true // Flag to make title slightly transparent
        }
    ];

    // Auto-play slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

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
            {/* 1️⃣ Slideshow Section */}
            <section className="relative pt-32 pb-20 bg-gray-50 flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto px-4">
                    <div className="relative">
                        {/* Slides Container with Perspective */}
                        <div className="relative h-96 md:h-[600px] overflow-visible flex items-center justify-center" style={{ perspective: '1000px' }}>
                            <div className="relative w-full h-full">
                                {slides.map((slide, index) => {
                                    // Calculate offset from current slide (with proper looping)
                                    let offset = index - currentSlide;

                                    // Handle infinite looping: wrap around so slides are always visible on both sides
                                    if (offset > 1) {
                                        offset = offset - slides.length;
                                    } else if (offset < -1) {
                                        offset = offset + slides.length;
                                    }

                                    const isActive = offset === 0;
                                    const isVisible = Math.abs(offset) <= 1;
                                    const isLeft = offset === -1;
                                    const isRight = offset === 1;

                                    return (
                                        <motion.div
                                            key={`${slide.id}-${index}`}
                                            initial={false}
                                            animate={{
                                                x: `calc(-50% + ${offset * 80}%)`, // Reduced spacing for overlap
                                                scale: isActive ? 1 : 0.8,
                                                opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
                                                rotateY: isActive ? 0 : isLeft ? 15 : isRight ? -15 : 0,
                                                zIndex: isActive ? 10 : isVisible ? 5 - Math.abs(offset) : 0,
                                                width: isActive
                                                    ? (isDesktop ? '75%' : '90%')
                                                    : (isDesktop ? '55%' : '70%'), // All slides get same width when active
                                            }}
                                            style={{
                                                pointerEvents: isVisible ? 'auto' : 'none',
                                                transformStyle: 'preserve-3d',
                                                backfaceVisibility: 'hidden',
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                                mass: 0.8
                                            }}
                                            className="absolute top-0 left-1/2 h-full cursor-pointer"
                                            data-active={isActive}
                                            onClick={() => !isActive && goToSlide(index)}
                                            whileHover={isActive ? {} : { scale: 0.85 }}
                                        >
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-all duration-300">
                                                {/* Background Image */}
                                                <div className="absolute inset-0">
                                                    <motion.img
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="w-full h-full object-cover"
                                                        animate={{
                                                            scale: isActive ? 1 : 1.1,
                                                        }}
                                                        transition={{ duration: 0.6 }}
                                                    />
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
                                                        animate={{
                                                            opacity: isActive ? 1 : 0.8
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>

                                                {/* Content Overlay */}
                                                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
                                                    <motion.div
                                                        animate={{
                                                            opacity: isActive ? 1 : 0.8,
                                                            y: isActive ? 0 : 10,
                                                        }}
                                                        transition={{ duration: 0.4, delay: 0.1 }}
                                                    >
                                                        <motion.h2
                                                            className={`${isActive ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'} font-bold mb-4 md:mb-5 leading-tight drop-shadow-lg ${slide.titleTransparent ? 'opacity-90' : ''}`}
                                                            animate={{
                                                                y: isActive ? 0 : 5,
                                                            }}
                                                            transition={{ duration: 0.4 }}
                                                        >
                                                            {slide.title}
                                                        </motion.h2>
                                                        <motion.p
                                                            className={`${isActive ? 'text-lg md:text-2xl' : 'text-base md:text-lg'} mb-8 md:mb-10 font-light max-w-3xl drop-shadow-md`}
                                                            animate={{
                                                                y: isActive ? 0 : 5,
                                                            }}
                                                            transition={{ duration: 0.4, delay: 0.05 }}
                                                        >
                                                            {slide.description}
                                                        </motion.p>
                                                        {isActive && (
                                                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                                                {slide.buttons ? (
                                                                    // Multiple buttons
                                                                    slide.buttons.map((button, btnIndex) => (
                                                                        <motion.button
                                                                            key={btnIndex}
                                                                            initial={{ opacity: 0, y: 20 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                                            whileTap={{ scale: 0.95 }}
                                                                            transition={{
                                                                                opacity: { duration: 0.3, delay: 0.2 + btnIndex * 0.1 },
                                                                                y: { type: "spring", stiffness: 400, damping: 17 }
                                                                            }}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                if (button.link.startsWith('#')) {
                                                                                    const section = document.getElementById(button.link.substring(1));
                                                                                    if (section) {
                                                                                        section.scrollIntoView({ behavior: 'smooth' });
                                                                                    }
                                                                                } else if (button.link.startsWith('http')) {
                                                                                    // External link - open in new tab
                                                                                    window.open(button.link, '_blank', 'noopener,noreferrer');
                                                                                } else {
                                                                                    // Internal route
                                                                                    window.location.href = button.link;
                                                                                }
                                                                            }}
                                                                            className={`bg-gradient-to-r ${button.color} text-white px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl`}
                                                                        >
                                                                            {button.text}
                                                                            <ArrowRight className="inline-block ml-2 w-5 h-5 md:w-6 md:h-6" />
                                                                        </motion.button>
                                                                    ))
                                                                ) : (
                                                                    // Single button
                                                                    <motion.button
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                                        whileTap={{ scale: 0.95 }}
                                                                        transition={{
                                                                            opacity: { duration: 0.3, delay: 0.2 },
                                                                            y: { type: "spring", stiffness: 400, damping: 17 }
                                                                        }}
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            if (slide.link === '#join-us-section') {
                                                                                const joinSection = document.getElementById('join-us-section');
                                                                                if (joinSection) {
                                                                                    joinSection.scrollIntoView({ behavior: 'smooth' });
                                                                                }
                                                                            } else if (slide.link.startsWith('http')) {
                                                                                // External link - open in new tab
                                                                                window.open(slide.link, '_blank', 'noopener,noreferrer');
                                                                            } else {
                                                                                // Internal route
                                                                                window.location.href = slide.link;
                                                                            }
                                                                        }}
                                                                        className={`bg-gradient-to-r ${slide.buttonColor || 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'} text-white px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl`}
                                                                    >
                                                                        {slide.buttonText}
                                                                        <ArrowRight className="inline-block ml-2 w-5 h-5 md:w-6 md:h-6" />
                                                                    </motion.button>
                                                                )}
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <motion.button
                            onClick={goToPrevious}
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 backdrop-blur-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
                        </motion.button>
                        <motion.button
                            onClick={goToNext}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 backdrop-blur-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
                        </motion.button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                            {slides.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'w-10 bg-blue-600 shadow-lg'
                                        : 'w-2.5 bg-white/60 hover:bg-white/80'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
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
