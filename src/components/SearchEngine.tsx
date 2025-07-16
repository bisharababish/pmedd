import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Users, GraduationCap, Microscope, Stethoscope, BookOpen, Mail, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const searchData = [
    // Home Page
    {
        id: 'home',
        title: 'Home',
        content: 'Welcome to PMED - Medical Club. Your gateway to medical excellence and professional development.',
        keywords: ['home', 'welcome', 'PMED', 'medical club', 'excellence', 'professional development'],
        section: 'Home',
        path: '/',
        icon: <MapPin className="w-4 h-4" />
    },

    // About Page
    {
        id: 'about',
        title: 'About PMED',
        content: 'Learn about PMED Club, our mission, vision, and what we do to empower medical students.',
        keywords: ['about', 'mission', 'vision', 'PMED', 'what we do', 'club'],
        section: 'About',
        path: '/about',
        icon: <Users className="w-4 h-4" />
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
        content: 'Meet the PMED Club team, including leadership, representatives, and department heads.',
        keywords: ['team', 'leadership', 'representatives', 'department heads', 'members'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },

    // Cardiology Club Page
    {
        id: 'cardiology-club',
        title: 'PMED Cardiology Club',
        content: 'Learn about the PMED Cardiology Club, its mission, supervisors, and exclusive opportunities for medical students.',
        keywords: ['cardiology', 'cardiology club', 'PMED Cardiology', 'supervisors', 'medical students', 'clinical exposure', 'research'],
        section: 'Divisions',
        path: '/cardiology',
        icon: <Users className="w-4 h-4" />
    },

    // Podcast Club Page
    {
        id: 'podcast-club',
        title: 'PMED Podcast Club',
        content: 'Discover the PMED Podcast Club, where students share knowledge, stories, and medical insights.',
        keywords: ['podcast', 'podcast club', 'PMED Podcast', 'stories', 'medical insights'],
        section: 'Divisions',
        path: '/podcast',
        icon: <Users className="w-4 h-4" />
    },

    // About Section
    {
        id: 'mission',
        title: 'Our Mission & Vision',
        content: 'Empower medical students through structured exposure to real-world clinical and academic environments. Provide mentorship, training, and resources to support their personal and professional growth. Shape the complete doctor character — scientifically competent, ethically grounded, and socially responsible.',
        keywords: ['mission', 'vision', 'empower', 'medical students', 'mentorship', 'training', 'doctor', 'ethical', 'socially responsible'],
        section: 'About',
        path: '/about#mission',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'whatwedo',
        title: 'Our Deliverables',
        content: 'We build medical specialty interest groups — such as Cardiology, Neurology, Surgery, and more — each acting like a focused sub-club that empowers students to explore, grow, and lead in their field of interest.',
        keywords: ['specialty groups', 'cardiology', 'neurology', 'surgery', 'workshops', 'seminars', 'clinical exposure', 'competitions'],
        section: 'About',
        path: '/about#whatwedo',
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
        content: 'President & Founder of PMED Club. Leading the organization with vision and dedication to medical education excellence.',
        keywords: ['Ahmad Romana', 'president', 'founder', 'leadership', 'PMED'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'kinda-abu-hashhash',
        title: 'Kinda Abu Hashhash',
        content: 'Vice President & Co-Founder of PMED Club. Supporting the organization\'s mission and strategic direction.',
        keywords: ['Kinda Abu Hashhash', 'vice president', 'co-founder', 'leadership'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'lamar-abed',
        title: 'Lamar Abed',
        content: 'Public Representative & Co-Founder of PMED Club. Managing external communications and public relations.',
        keywords: ['Lamar Abed', 'public representative', 'co-founder', 'communications', 'public relations'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'meray-dour',
        title: 'Meray Dour',
        content: 'Public Representative of PMED Club. Supporting external communications and community engagement.',
        keywords: ['Meray Dour', 'public representative', 'communications', 'community'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'khaled-alqasrawi',
        title: 'Khaled Alqasrawi',
        content: 'Head of Educational Content & Co-Founder of PMED Club. Developing comprehensive educational programs and content.',
        keywords: ['Khaled Alqasrawi', 'educational content', 'co-founder', 'education', 'programs'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'dahlia-gaouni',
        title: 'Dahlia Gaouni',
        content: 'Head of Video Editing at PMED Club. Creating engaging visual content for educational and promotional purposes.',
        keywords: ['Dahlia Gaouni', 'video editing', 'visual content', 'media'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'laith-mualla',
        title: 'Laith Mualla',
        content: 'Head of External Affairs at PMED Club. Managing partnerships and external relationships.',
        keywords: ['Laith Mualla', 'external affairs', 'partnerships', 'relationships'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'heba-arab',
        title: 'Heba Arab',
        content: 'Head of Internal Affairs at PMED Club. Managing internal operations and member relations.',
        keywords: ['Heba Arab', 'internal affairs', 'operations', 'member relations'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'abdallah-elayyan',
        title: 'Abdallah Elayyan',
        content: 'Head of Press & Media at PMED Club. Managing media relations and press communications.',
        keywords: ['Abdallah Elayyan', 'press', 'media', 'communications'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'ahmad-abu-turk',
        title: 'Ahmad Abu Turk',
        content: 'Head of Press & Media at PMED Club. Supporting media relations and press communications.',
        keywords: ['Ahmad Abu Turk', 'press', 'media', 'communications'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'mohammad-romana',
        title: 'Mohammad Romana',
        content: 'Head of IT at PMED Club. Managing technology infrastructure and digital solutions.',
        keywords: ['Mohammad Romana', 'IT', 'technology', 'digital', 'infrastructure'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'bishara-babish',
        title: 'Bishara Babish',
        content: 'Head of IT at PMED Club. Supporting technology infrastructure and digital solutions.',
        keywords: ['Bishara Babish', 'IT', 'technology', 'digital', 'infrastructure'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'qusai-shwaiki',
        title: 'Qusai Shwaiki',
        content: 'Graphic Designer at PMED Club. Creating visual designs and branding materials.',
        keywords: ['Qusai Shwaiki', 'graphic designer', 'design', 'visual', 'branding'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
    },
    {
        id: 'hind-abu-al-ghaib',
        title: 'Hind Abu Al Ghaib',
        content: 'Graphic Designer at PMED Club. Supporting visual design and branding efforts.',
        keywords: ['Hind Abu Al Ghaib', 'graphic designer', 'design', 'visual', 'branding'],
        section: 'Team',
        path: '/team',
        icon: <Users className="w-4 h-4" />
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
            {}
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

            {}
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
                            {}
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

                            {}
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