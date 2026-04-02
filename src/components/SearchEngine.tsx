import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Users, GraduationCap, Microscope, Stethoscope, BookOpen, Mail, ChevronRight, Brain, Scissors, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const searchData = [
    // Home Page
    {
        id: 'home',
        title: 'Join PMED',
        content: 'Your journey to becoming a future doctor starts here. Ready to level up your med school journey? PMED is where future doctors are made.',
        keywords: ['home', 'welcome', 'PMED', 'medical club', 'excellence', 'professional development', 'join', 'membership', 'apply', 'med school', 'journey', 'future doctors', 'level up', 'medical students'],
        section: 'Home',
        path: '/',
        icon: <MapPin className="w-4 h-4" />
    },

    // About Page
    {
        id: 'about',
        title: 'About PMED',
        content: 'Learn about PMED, our mission, vision, and what we do to empower medical students.',
        keywords: ['about', 'mission', 'vision', 'PMED', 'what we do', 'club'],
        section: 'About',
        path: '/about',
        icon: <Users className="w-4 h-4" />
    },

    // Original Homepage (HeroSlideshow)
    {
        id: 'original-home',
        title: 'PMED Homepage',
        content: 'Welcome to PMED. Your gateway to medical excellence and professional development.',
        keywords: ['homepage', 'original home', 'welcome', 'PMED', 'medical club', 'excellence', 'professional development'],
        section: 'Home',
        path: '/home',
        icon: <MapPin className="w-4 h-4" />
    },


    // Contact Page
    {
        id: 'contact',
        title: 'Contact',
        content: 'Get in touch with us for more information about our programs, events, and opportunities.',
        keywords: ['contact', 'get in touch', 'information', 'programs', 'events', 'opportunities'],
        section: 'Contact',
        path: '/contact',
        icon: <Mail className="w-4 h-4" />
    },

    // Team Page
    {
        id: 'team',
        title: 'Our Team',
        content: 'Meet the PMED team, including leadership, representatives, and department heads.',
        keywords: ['team', 'leadership', 'representatives', 'department heads', 'members'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },

    // Cardiology Club Page
    {
        id: 'cardiology-club',
        title: 'PMED Cardiology Club',
        content: 'Learn about PMED Cardiology Club, its mission, supervisors, and exclusive opportunities for medical students.',
        keywords: ['cardiology', 'cardiology club', 'PMED Cardiology', 'supervisors', 'medical students', 'clinical exposure', 'research'],
        section: 'Divisions',
        path: '/cardiology',
        icon: <Users className="w-4 h-4" />
    },

    // Podcast Club Page
    {
        id: 'podcast-club',
        title: 'PMED Podcast Club',
        content: 'Discover PMED Podcast Club, where students share knowledge, stories, and medical insights.',
        keywords: ['podcast', 'podcast club', 'PMED Podcast', 'stories', 'medical insights'],
        section: 'Divisions',
        path: '/podcast',
        icon: <Users className="w-4 h-4" />
    },

    // News Page
    {
        id: 'news',
        title: 'PMED News & Updates',
        content: 'Stay updated with the latest news, events, and achievements from PMED. Read about our latest activities, recognitions, and milestones.',
        keywords: ['news', 'updates', 'events', 'achievements', 'activities', 'recognitions', 'milestones', 'latest'],
        section: 'News',
        path: '/news',
        icon: <BookOpen className="w-4 h-4" />
    },

    // Landing Page
    {
        id: 'landing',
        title: 'Join PMED',
        content: 'Your journey to becoming a future doctor starts here. Ready to level up your med school journey? PMED is where future doctors are made.',
        keywords: ['join', 'membership', 'apply', 'med school', 'journey', 'future doctors', 'level up', 'medical students'],
        section: 'Join',
        path: '/landing',
        icon: <GraduationCap className="w-4 h-4" />
    },

    // Interest Groups
    {
        id: 'interest-groups',
        title: 'PMED Interest Groups',
        content: 'PMED is the FIRST Institute in Palestine to launch Interest Groups. Dedicated spaces for med students to connect, grow, and sharpen their skills in specialties they dream of.',
        keywords: ['interest groups', 'specialties', 'cardiology', 'neurology', 'surgery', 'internal medicine', 'mentorship', 'clinical exposure'],
        section: 'Programs',
        path: '/landing',
        icon: <Users className="w-4 h-4" />
    },

    // Recent News Items
    {
        id: 'cardiology-launch',
        title: 'Launch of the Cardiology Division at IPCLM13',
        content: 'PMED launched the Cardiology Division during IPCLM13, with active member participation and initial projects introduced. A proudly Palestinian club founded to ignite passion and inspire excellence.',
        keywords: ['cardiology division', 'IPCLM13', 'launch', 'conference', 'Palestinian', 'passion', 'excellence', 'medical students'],
        section: 'News',
        path: '/news',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'podcast-episode',
        title: 'PMED Podcast Club – First Episode Released',
        content: 'Our first podcast episode is now live, discussing listening skills for doctors, choosing role models, building true value in others\' lives, and other inspiring topics.',
        keywords: ['podcast episode', 'first episode', 'listening skills', 'role models', 'inspiring topics', 'doctors'],
        section: 'News',
        path: '/news',
        icon: <BookOpen className="w-4 h-4" />
    },
    {
        id: 'supervisors',
        title: 'Meet Our Supervisors',
        content: 'Our supervisors guide the Cardiology Division. The driving force supporting our journeys within their knowledge and guidance.',
        keywords: ['supervisors', 'mentors', 'cardiology division', 'guidance', 'knowledge', 'support'],
        section: 'News',
        path: '/news',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'president-recognition',
        title: 'PMED President Recognized by Al-Quds University',
        content: 'The recognition of our PMED President by Al-Quds University stands as a testament to the talent, dedication, and global scientific presence of our family.',
        keywords: ['president recognition', 'Al-Quds University', 'talent', 'dedication', 'global scientific presence', 'achievement'],
        section: 'News',
        path: '/news',
        icon: <GraduationCap className="w-4 h-4" />
    },

    // About Section
    {
        id: 'mission',
        title: 'Our Mission & Vision',
        content: 'Empower medical students through structured exposure to real-world clinical and academic environments. Provide mentorship, training, and resources to support their personal and professional growth. Shape the complete doctor character — scientifically competent, ethically grounded, and socially responsible.',
        keywords: ['mission', 'vision', 'empower', 'medical students', 'mentorship', 'training', 'doctor', 'ethical', 'socially responsible'],
        section: 'About',
        path: '/about_mission',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'whatwedo',
        title: 'Our Deliverables',
        content: 'We build medical specialty interest groups — such as Cardiology, Neurology, Surgery, and more — each acting like a focused sub-club that empowers students to explore, grow, and lead in their field of interest.',
        keywords: ['specialty groups', 'cardiology', 'neurology', 'surgery', 'workshops', 'seminars', 'clinical exposure', 'competitions'],
        section: 'About',
        path: '/about_deliverables',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'about-pmed',
        title: 'About PMED',
        content: 'PMED is a student-led, multidisciplinary club rooted in the values of equity and excellence. We connect high-potential students with real medical experiences, workshops, and mentors.',
        keywords: ['PMED', 'student-led', 'multidisciplinary', 'equity', 'excellence', 'medical experiences', 'workshops', 'mentors'],
        section: 'About',
        path: '/about',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'ambassadors',
        title: 'Our Ambassadors',
        content: 'PMED Ambassadors represent our community across the globe. Ibrahim Alzir (Greece) and Joud Akkad (USA) connect Palestinian medical students with opportunities worldwide.',
        keywords: ['ambassadors', 'Ibrahim Alzir', 'Joud Akkad', 'Greece', 'USA', 'global', 'international', 'representative'],
        section: 'About',
        path: '/about_ambassadors',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'secretary-general',
        title: 'Marah Abu Rameleh – Secretary General',
        content: 'Marah Abu Rameleh is Secretary General and Vice President for Internal Affairs of PMED. A third-year medical student passionate about research, medical education, and student leadership.',
        keywords: ['Marah Abu Rameleh', 'secretary general', 'internal affairs', 'leadership', 'PMED board', 'vice president'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },

    // Programs Section
    {
        id: 'basic-medical-education',
        title: 'Basic Medical Education',
        content: 'Comprehensive medical education program covering fundamental sciences, clinical skills, and professional development.',
        keywords: ['basic medical', 'education', 'fundamental sciences', 'clinical skills', 'professional development', 'anatomy', 'physiology'],
        section: 'Programs',
        path: '/programs',
        icon: <GraduationCap className="w-4 h-4" />
    },
    {
        id: 'laboratory-medicine',
        title: 'Laboratory Medicine',
        content: 'Specialized training in modern laboratory techniques, diagnostic procedures, and quality assurance.',
        keywords: ['laboratory', 'medicine', 'diagnostic', 'microscopy', 'molecular diagnostics', 'quality control'],
        section: 'Programs',
        path: '/programs',
        icon: <Microscope className="w-4 h-4" />
    },
    {
        id: 'clinical-specialization',
        title: 'Clinical Specialization',
        content: 'Advanced training in specialized medical fields with hands-on clinical experience.',
        keywords: ['clinical', 'specialization', 'specialized medical', 'clinical rotations', 'procedures', 'evidence-based'],
        section: 'Programs',
        path: '/programs',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'research-development',
        title: 'Research & Development',
        content: 'Cutting-edge research opportunities in medical sciences and healthcare innovation.',
        keywords: ['research', 'development', 'innovation', 'healthcare', 'methodology', 'publications', 'collaboration'],
        section: 'Programs',
        path: '/programs',
        icon: <BookOpen className="w-4 h-4" />
    },

    // Team Section - Leadership
    {
        id: 'ahmad-romana',
        title: 'Ahmad Romana',
        content: 'President & Founder of PMED. Leading the organization with vision and dedication to medical education excellence.',
        keywords: ['Ahmad Romana', 'president', 'founder', 'leadership', 'PMED'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'kinda-abu-hashhash',
        title: 'Kinda Abu Hashhash',
        content: 'Vice President & Co-Founder of PMED. Supporting the organization\'s mission and strategic direction.',
        keywords: ['Kinda Abu Hashhash', 'vice president', 'co-founder', 'leadership'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'lamar-abed',
        title: 'Lamar Abed',
        content: 'Public Representative & Co-Founder of PMED. Managing external communications and public relations.',
        keywords: ['Lamar Abed', 'public representative', 'co-founder', 'communications', 'public relations'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'khaled-alqasrawi',
        title: 'Khaled Alqasrawi',
        content: 'Head of Educational Content & Co-Founder of PMED. Developing comprehensive educational programs and content.',
        keywords: ['Khaled Alqasrawi', 'educational content', 'co-founder', 'education', 'programs'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'dahlia-gaouni',
        title: 'Dahlia Gaouni',
        content: 'Head of Video Editing at PMED. Creating engaging visual content for educational and promotional purposes.',
        keywords: ['Dahlia Gaouni', 'video editing', 'visual content', 'media'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'laith-mualla',
        title: 'Laith Mualla',
        content: 'Head of External Affairs at PMED. Managing partnerships and external relationships.',
        keywords: ['Laith Mualla', 'external affairs', 'partnerships', 'relationships'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'heba-arab',
        title: 'Heba Arab',
        content: 'Head of Internal Affairs at PMED. Managing internal operations and member relations.',
        keywords: ['Heba Arab', 'internal affairs', 'operations', 'member relations'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'abdallah-elayyan',
        title: 'Abdallah Elayyan',
        content: 'Head of Press & Media at PMED. Managing media relations and press communications.',
        keywords: ['Abdallah Elayyan', 'press', 'media', 'communications'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'ahmad-abu-turk',
        title: 'Ahmad Abu Turk',
        content: 'Head of Press & Media at PMED. Supporting media relations and press communications.',
        keywords: ['Ahmad Abu Turk', 'press', 'media', 'communications'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'mohammad-romana',
        title: 'Mohammad Romana',
        content: 'Head of IT at PMED. Managing technology infrastructure and digital solutions.',
        keywords: ['Mohammad Romana', 'IT', 'technology', 'digital', 'infrastructure'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'bishara-babish',
        title: 'Bishara Babish',
        content: 'Head of IT at PMED. Supporting technology infrastructure and digital solutions.',
        keywords: ['Bishara Babish', 'IT', 'technology', 'digital', 'infrastructure'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'qusai-shwaiki',
        title: 'Qusai Shwaiki',
        content: 'Graphic Designer at PMED. Creating visual designs and branding materials.',
        keywords: ['Qusai Shwaiki', 'graphic designer', 'design', 'visual', 'branding'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'hind-abu-al-ghaib',
        title: 'Hind Abu Al Ghaib',
        content: 'Graphic Designer at PMED. Supporting visual design and branding efforts.',
        keywords: ['Hind Abu Al Ghaib', 'graphic designer', 'design', 'visual', 'branding'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },

    // Interest Groups Details
    {
        id: 'cardiology-group',
        title: 'Cardiology Interest Group',
        content: 'Learn from expert doctors, join research projects, and gain mentorship in cardiology. Currently open for applications.',
        keywords: ['cardiology', 'cardiology group', 'cardiology interest', 'expert doctors', 'research projects', 'mentorship', 'open', 'applications'],
        section: 'Programs',
        path: '/landing',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'neurology-group',
        title: 'PMED Neuro Club',
        content: 'PMED Neuro Club is open now, offering mentorship, skills training, and research opportunities in neurology and neuroscience.',
        keywords: ['neurology', 'neuro club', 'PMED Neuro Club', 'expert-led', 'mentorship', 'skill-building', 'open now'],
        section: 'Programs',
        path: '/landing',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'surgery-group',
        title: 'Surgery Interest Group',
        content: 'Clinical exposure and research opportunities in surgery. Coming soon to PMED.',
        keywords: ['surgery', 'surgery group', 'surgery interest', 'clinical exposure', 'research opportunities', 'coming soon'],
        section: 'Programs',
        path: '/landing',
        icon: <Scissors className="w-4 h-4" />
    },
    {
        id: 'internal-medicine-group',
        title: 'Internal Medicine Interest Group',
        content: 'Build strong foundations in internal medicine under expert guidance. Coming soon to PMED.',
        keywords: ['internal medicine', 'internal medicine group', 'internal medicine interest', 'strong foundations', 'expert guidance', 'coming soon'],
        section: 'Programs',
        path: '/landing',
        icon: <Activity className="w-4 h-4" />
    },

    // Events
    {
        id: 'ipclm13',
        title: 'IPCLM13',
        content: 'International Palestinian Conference on Laboratory Medicine – 13th edition. PMED launched the Cardiology Division during IPCLM13 with active member participation and initial projects introduced.',
        keywords: ['IPCLM13', 'IPCLM', 'international conference', 'laboratory medicine', 'Palestinian conference', 'conference', 'cardiology launch'],
        section: 'Events',
        path: '/news',
        icon: <GraduationCap className="w-4 h-4" />
    },
    {
        id: 'jmrc2025',
        title: 'JMRC 2025',
        content: 'Junior Medical Research Conference 2025 — a platform for medical students and junior doctors to present research and engage with leading professionals in the field.',
        keywords: ['JMRC', 'JMRC2025', 'junior medical research conference', 'research conference', '2025', 'medical research', 'junior doctors', 'conference'],
        section: 'Events',
        path: '/news',
        icon: <Microscope className="w-4 h-4" />
    },

    // Neuro Club Division Page
    {
        id: 'neuro-division',
        title: 'PMED Neuro Club',
        content: 'PMED Neuro Club & NeuroPedia Palestine is dedicated to advancing neuroscience, neurosurgery, education, training, and research in Palestine. Apply now to join.',
        keywords: ['neuro club', 'PMED neuro', 'neuroscience', 'neurology', 'neuropedia', 'neuro division', 'apply neuro'],
        section: 'Divisions',
        path: '/neurology',
        icon: <Brain className="w-4 h-4" />
    },
    // Neuro Team inside Meet the Team
    {
        id: 'neuro-team-page',
        title: 'PMED Neuro Club Team',
        content: 'Meet the dedicated team behind the PMED Neuro Club — passionate students driving neuroscience education and research in Palestine.',
        keywords: ['neuro team', 'neuro club team', 'neuroscience team', 'PMED neuro', 'neuro members', 'meet the team'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    // Neuro Team Members
    {
        id: 'ahmad-romana-neuro',
        title: 'Ahmad Romana – Head of Neuro Club',
        content: 'Ahmad Romana serves as Head of the PMED Neuro Club, leading the neuroscience interest group.',
        keywords: ['Ahmad Romana', 'head neuro club', 'neuro club', 'neuroscience', 'leadership'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'rand-malhis',
        title: 'Rand Malhis – Neuro Secretary General',
        content: 'Rand Malhis serves as Neuro Secretary General of the PMED Neuro Club.',
        keywords: ['Rand Malhis', 'neuro secretary general', 'neuro club', 'neuroscience'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'dania-manasra',
        title: 'Dania Manasra – Outreach Officer',
        content: 'Dania Manasra serves as Outreach Officer of the PMED Neuro Club.',
        keywords: ['Dania Manasra', 'outreach officer', 'neuro club', 'neuroscience'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'salahaldeen-deeb',
        title: 'Salahaldeen Deeb – Research Officer',
        content: 'Salahaldeen Deeb serves as Research Officer of the PMED Neuro Club.',
        keywords: ['Salahaldeen Deeb', 'research officer', 'neuro club', 'neuroscience', 'research'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'mohammad-sawalmeh',
        title: 'Mohammad Sawalmeh – Research Assistant',
        content: 'Mohammad Sawalmeh serves as Research Assistant of the PMED Neuro Club.',
        keywords: ['Mohammad Sawalmeh', 'research assistant', 'neuro club', 'neuroscience', 'research'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'baraa-nassar',
        title: 'Baraa Nassar – Activities Assistant',
        content: 'Baraa Nassar serves as Activities Assistant of the PMED Neuro Club.',
        keywords: ['Baraa Nassar', 'activities assistant', 'neuro club', 'neuroscience'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'tala-ikhzamia',
        title: 'Tala Ikhzamia – Neuro Team Member',
        content: 'Tala Ikhzamia is a member of the PMED Neuro Club team.',
        keywords: ['Tala Ikhzamia', 'neuro club', 'neuroscience', 'team member'],
        section: 'Team',
        path: '/team',
        icon: <Brain className="w-4 h-4" />
    },

    // Social Media Team
    {
        id: 'eman-abusharekh',
        title: 'Eman Abusharekh – Social Media Assistant',
        content: 'Eman Abusharekh serves as Social Media Assistant at PMED.',
        keywords: ['Eman Abusharekh', 'social media', 'social media assistant', 'PMED team'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'leen-yasser',
        title: 'Leen Yasser – Educational Content & Video Editor',
        content: 'Leen Yasser serves as Educational Content and Video Editor at PMED.',
        keywords: ['Leen Yasser', 'educational content', 'video editor', 'social media team', 'PMED team'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'tala-raed',
        title: 'Tala Raed – Social Media Assistant',
        content: 'Tala Raed serves as Social Media Assistant at PMED.',
        keywords: ['Tala Raed', 'social media', 'social media assistant', 'PMED team'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'lujain-bdeir',
        title: 'Lujain Bdeir – Social Media Team',
        content: 'Lujain Bdeir is a member of the PMED Social Media Team and Cardiology Outreach Officer.',
        keywords: ['Lujain Bdeir', 'social media', 'cardiology outreach', 'PMED team'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },

    // Cardiology Team Members
    {
        id: 'kristen-gharo',
        title: 'Kristen Gharo – Cardiology Secretary General',
        content: 'Kristen Gharo serves as Cardiology Secretary General in the PMED Cardiology Club.',
        keywords: ['Kristen Gharo', 'cardiology secretary general', 'cardiology club', 'PMED cardiology'],
        section: 'Team',
        path: '/team',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'ruaa-bajah',
        title: 'Ruaa Bajah – Cardiology Educational Content Officer',
        content: 'Ruaa Bajah serves as Cardiology Educational Content Officer in the PMED Cardiology Club.',
        keywords: ['Ruaa Bajah', 'cardiology educational content', 'cardiology club', 'PMED cardiology'],
        section: 'Team',
        path: '/team',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'mohamed-abu-gharbieh',
        title: 'Mohamed Abu Gharbieh – Cardiology Activities Officer',
        content: 'Mohamed Abu Gharbieh serves as Cardiology Activities Officer in the PMED Cardiology Club.',
        keywords: ['Mohamed Abu Gharbieh', 'cardiology activities', 'cardiology club', 'PMED cardiology'],
        section: 'Team',
        path: '/team',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'raghad-doufesh',
        title: 'Raghad Doufesh – Cardiology Membership Officer',
        content: 'Raghad Doufesh serves as Cardiology Membership Officer in the PMED Cardiology Club.',
        keywords: ['Raghad Doufesh', 'cardiology membership', 'cardiology club', 'PMED cardiology'],
        section: 'Team',
        path: '/team',
        icon: <Stethoscope className="w-4 h-4" />
    },
    {
        id: 'olga-ramahi',
        title: 'Olga Ramahi – Cardiology Research Officer',
        content: 'Olga Ramahi serves as Cardiology Research Officer in the PMED Cardiology Club.',
        keywords: ['Olga Ramahi', 'cardiology research', 'cardiology club', 'PMED cardiology'],
        section: 'Team',
        path: '/team',
        icon: <Stethoscope className="w-4 h-4" />
    },

    // News Items
    {
        id: 'neuro-club-launch',
        title: 'PMED Neuro Club Official Launch',
        content: 'The official launch of PMED Neuro Club brought together medical students, residents, neurologists, neurosurgeons, neuroscientists, and academic leaders.',
        keywords: ['neuro club launch', 'PMED neuro club', 'neuroscience launch', 'neuro event', 'AAUP', 'official launch'],
        section: 'News',
        path: '/news',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'cardiology-quiz-night',
        title: 'Cardiology Quiz Night – Recap',
        content: 'A powerful night filled with competition, knowledge, and cardiology spirit! Members-only events are also on the way.',
        keywords: ['quiz night', 'cardiology quiz', 'cardiology activity', 'competition', 'cardiology event'],
        section: 'News',
        path: '/news',
        icon: <Stethoscope className="w-4 h-4" />
    },

    // Neuro Supervisors
    {
        id: 'friedemann-paul',
        title: 'Prof. Friedemann Paul – Neuro Supervisor',
        content: 'Professor of Clinical Neuroimmunology at Charite Berlin. Head of Neuroimmunology Research Group at ECRC. Research focuses on multiple sclerosis and neuroimmunological diseases.',
        keywords: ['Friedemann Paul', 'neuro supervisor', 'neuroimmunology', 'Charite Berlin', 'multiple sclerosis', 'supervisor'],
        section: 'Divisions',
        path: '/neurology',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'malik-zaben',
        title: 'Prof. Malik Zaben – Neuro Supervisor',
        content: 'Consultant Neurosurgeon. Dean of the Faculty of Medicine at AAUP. Clinician-scientist specializing in neurosurgery and neuroscience.',
        keywords: ['Malik Zaben', 'neuro supervisor', 'neurosurgeon', 'AAUP', 'dean', 'supervisor', 'neuroscience'],
        section: 'Divisions',
        path: '/neurology',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'athanasios-hassoulas',
        title: 'Dr. Athanasios Hassoulas – Neuro Supervisor',
        content: 'Associate Professor in Medical Education at Cardiff University. Director of HIVE Teaching Innovation Unit. Research interests include OCD, anxiety, and medical education.',
        keywords: ['Athanasios Hassoulas', 'neuro supervisor', 'Cardiff University', 'medical education', 'VR AR AI', 'supervisor'],
        section: 'Divisions',
        path: '/neurology',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'david-parker',
        title: 'Dr. David John Parker – Neuro Supervisor',
        content: 'College Lecturer in Physiology at the University of Cambridge. Research focuses on neuronal networks and spinal cord injury recovery.',
        keywords: ['David Parker', 'neuro supervisor', 'Cambridge', 'physiology', 'neuronal networks', 'spinal cord', 'supervisor'],
        section: 'Divisions',
        path: '/neurology',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'fiona-mcnicholas',
        title: 'Prof. Fiona McNicholas – Neuro Supervisor',
        content: 'Consultant Child & Adolescent Psychiatrist. Chair of Child Psychiatry at University College Dublin. Clinical interests include ADHD and eating disorders.',
        keywords: ['Fiona McNicholas', 'neuro supervisor', 'psychiatrist', 'UCD', 'child psychiatry', 'ADHD', 'supervisor'],
        section: 'Divisions',
        path: '/neurology',
        icon: <Brain className="w-4 h-4" />
    },

    // JMRC2025 Conference details
    {
        id: 'jmrc2025-conference',
        title: 'JMRC2025 Conference – Recap',
        content: 'UNITED IN MEDICINE, DRIVEN BY PURPOSE. Our club organized and supervised JMRC2025 at the Millennium Hotel in Ramallah on 30/1/2026. Workshops, booths, research sessions, and lectures.',
        keywords: ['JMRC2025', 'JMRC', 'Millennium Hotel', 'Ramallah', 'conference', '2026', 'united in medicine', 'medical conference', 'workshops'],
        section: 'News',
        path: '/news',
        icon: <Microscope className="w-4 h-4" />
    },

    // Neuro Conference at AAUP
    {
        id: 'neuro-conference-aaup',
        title: 'Neuro Conference at AAUP',
        content: 'Neuro Conference held at Arab American University (AAUP). A landmark event for the PMED Neuro Club bringing together medical students and neuroscience leaders.',
        keywords: ['neuro conference', 'AAUP', 'Arab American University', 'neuroscience conference', 'neuro event', 'conference'],
        section: 'News',
        path: '/news',
        icon: <Brain className="w-4 h-4" />
    },

    // Statistics
    {
        id: 'statistics',
        title: 'PMED Impact & Statistics',
        content: '400+ PMED Members. 133 Cardiology Members. 30+ Events organized. 3 Clubs launched. Embracing excellence and driving medical education forward.',
        keywords: ['statistics', 'members', '400 members', '133 cardiology', '30 events', '3 clubs', 'impact', 'numbers', 'PMED stats'],
        section: 'About',
        path: '/',
        icon: <GraduationCap className="w-4 h-4" />
    },

    // Join / Registration
    {
        id: 'join-pmed',
        title: 'Join PMED – Registration',
        content: 'Join the PMED Institute. Apply for PMED membership, PMED Cardiology Club, or PMED Neuro Club. Registration forms available.',
        keywords: ['join', 'register', 'apply', 'registration form', 'membership', 'PMED join', 'neuro apply', 'cardiology apply'],
        section: 'Join',
        path: '/',
        icon: <GraduationCap className="w-4 h-4" />
    },

    // TikTok / Social Media
    {
        id: 'tiktok',
        title: 'PMED TikTok',
        content: 'Follow PMED Podcast on TikTok @pmed.podcast for medical content, updates, and highlights.',
        keywords: ['TikTok', 'pmed podcast', 'social media', 'follow us', '@pmed.podcast', 'tiktok pmed'],
        section: 'Contact',
        path: '/contact',
        icon: <Mail className="w-4 h-4" />
    },

    // Contact Information
    {
        id: 'contact-info',
        title: 'Contact PMED',
        content: 'Get in touch with PMED. Email: external.affairs@pmed.club, Phone: +972 56-698-6006. Located in Palestine, Jerusalem.',
        keywords: ['contact', 'email', 'phone', 'external.affairs@pmed.club', '+972 56-698-6006', 'Palestine', 'Jerusalem', 'get in touch'],
        section: 'Contact',
        path: '/contact',
        icon: <Mail className="w-4 h-4" />
    },
];

interface SearchResult {
    id: string;
    title: string;
    content: string;
    keywords: string[];
    section: string;
    path: string;
    icon: React.ReactNode;
    relevance: number;
}

const SearchEngine: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const performSearch = (query: string) => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            const searchTerm = query.toLowerCase();
            const searchResults: SearchResult[] = [];

            searchData.forEach(item => {
                let relevance = 0;

                if (item.title.toLowerCase().includes(searchTerm)) {
                    relevance += 10;
                }

                if (item.content.toLowerCase().includes(searchTerm)) {
                    relevance += 5;
                }

                item.keywords.forEach(keyword => {
                    if (keyword.toLowerCase().includes(searchTerm)) {
                        relevance += 3;
                    }
                });

                if (item.section.toLowerCase().includes(searchTerm)) {
                    relevance += 2;
                }

                if (relevance > 0) {
                    searchResults.push({ ...item, relevance });
                }
            });

            searchResults.sort((a, b) => b.relevance - a.relevance);
            setResults(searchResults);
            setIsLoading(false);
        }, 300);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            performSearch(searchQuery);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    const handleResultClick = (result: SearchResult) => {
        setIsOpen(false);
        setSearchQuery('');
        setResults([]);
        navigate(result.path);
    };

    const handleSearchClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            { }
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearchClick}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                title="Search (Ctrl+K)"
            >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
            </motion.button>

            { }
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[70vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            { }
                            <div className="flex items-center gap-4 p-6 border-b border-gray-200">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search for programs, events, team members, or any content..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            { }
                            <div className="max-h-[60vh] overflow-y-auto">
                                {isLoading ? (
                                    <div className="p-8 text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                                        <p className="mt-2 text-gray-600">Searching...</p>
                                    </div>
                                ) : searchQuery && results.length === 0 ? (
                                    <div className="p-8 text-center">
                                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-600">No results found for "{searchQuery}"</p>
                                        <p className="text-sm text-gray-500 mt-2">Try different keywords or check spelling</p>
                                    </div>
                                ) : searchQuery && results.length > 0 ? (
                                    <div className="p-4">
                                        <p className="text-sm text-gray-500 mb-4">
                                            Found {results.length} result{results.length !== 1 ? 's' : ''}
                                        </p>
                                        <div className="space-y-2">
                                            {results.map((result, index) => (
                                                <motion.div
                                                    key={result.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => handleResultClick(result)}
                                                    className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group"
                                                >
                                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                                                        {result.icon}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                                {result.title}
                                                            </h3>
                                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                                {result.section}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-600 line-clamp-2">
                                                            {result.content}
                                                        </p>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-8 text-center">
                                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-600">Start typing to search</p>
                                        <p className="text-sm text-gray-500 mt-2">Search for programs, events, team members, and more</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SearchEngine; 