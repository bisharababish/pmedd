import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Search, Share2, ExternalLink, Calendar, Filter, ArrowRight } from 'lucide-react';

// Import images
import slide4Image from './images/Slide4.jpg';
import supervisor1Image from './supervisorpics/supervisor1.png';
import ahmadRoyalImage from './images/ahmadroyal.jpg';
import conferenceImage from './images/conference.jpg';
import ipclm13Image from './images/IPCLM13 banner.jpg';
import jmrc2025Image from './images/JMRC2025-banner.jpg';
import quizNightImage from './images/PMED quiz night banner.jpg';
import aaupBannerImage from './supervisorpics/AAUP banner.jpg';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    buttonText: string;
    buttonAction: string;
    buttonType: 'internal' | 'external';
    details?: string;
}

const NewsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') ?? '');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

    useEffect(() => {
        const param = searchParams.get('search');
        if (param) setSearchTerm(param);
    }, [searchParams]);

    const newsItems: NewsItem[] = [
        {
            id: 1,
            title: "IPCLM13 – International Palestinian Conference for Laboratory Medicine",
            description: "Our club participated in the IPCLM13 International Palestinian Conference, hosted our own club booth, and officially announced the launch of the PMED Cardiology Club.",
            image: ipclm13Image,
            category: "Conference",
            date: "2024-01-15",
            buttonText: "Visit IPCLM13 Website",
            buttonAction: "https://www.ipclm.ps/index.php?lang=en",
            buttonType: "external",
            details: "Our club participated in the IPCLM13 International Palestinian Conference, held at the convention palace company. During the event, we hosted our own club booth and officially announced the launch of the PMED Cardiology Club, under the supervision of leading cardiologists from inside and outside the country.\n\nAs medical students passionate about driving change, we transformed ideas into action and shared our vision through this platform. This marked the beginning of our journey, and we promise continued creativity, impact, and excellence."
        },
        {
            id: 5,
            title: "JMRC 2026 – Junior Medical Research Conference",
            description: '"UNITED IN MEDICINE, DRIVEN BY PURPOSE" — Our club played a key role in organizing and supervising the JMRC2026 Conference at the Millennium Hotel in Ramallah.',
            image: jmrc2025Image,
            category: "Conference",
            date: "2026-04-01",
            buttonText: "Visit JMRC Website",
            buttonAction: "https://jmrc.live/",
            buttonType: "external",
            details: "Our club played a key role in organizing and supervising the JMRC2026 Conference, which took place on Friday, 30/1/2026, at the Millennium Hotel in Ramallah. We actively participated in the event through workshops, interactive booths, research sessions, and lectures, bringing together Palestinian physicians to advance healthcare through education, research, innovation, and collaboration."
        },
        {
            id: 6,
            title: "PMED Neuro Club Official Launch",
            description: "The official launch of PMED Neuro Club brought together medical students, residents, neurologists, neurosurgeons, neuroscientists, and academic leaders.",
            image: aaupBannerImage,
            category: "Neuroscience",
            date: "2026-03-01",
            buttonText: "View on Instagram",
            buttonAction: "https://www.instagram.com/p/DTNoYxkjKql/?igsh=bXkwdjAyMWFtMHQ3",
            buttonType: "external",
            details: "Event Highlights:\n• Building professional connections in the field\n• Inspiring journeys with great mentors\n• Engaging with research opportunities\n• Enhancing clinical knowledge through local and national exchange\n\nThe event marked the beginning of an exciting journey for medical students passionate about neuroscience. Congratulations to the PMED Neuro Club team for this remarkable milestone!"
        },
        {
            id: 7,
            title: "Cardiology Quiz Night – Recap!",
            description: "A powerful night filled with competition, knowledge, and cardiology spirit! Thank you to everyone who joined and made it unforgettable.",
            image: quizNightImage,
            category: "Cardiology",
            date: "2025-06-01",
            buttonText: "View More Moments",
            buttonAction: "https://www.instagram.com/p/DRXO4oDDMlj/?igsh=MTNyMzVwMTFxMGlvZg%3D%3D",
            buttonType: "external",
            details: "A powerful night filled with competition, knowledge, and cardiology spirit!\n\nThank you to everyone who joined and made it unforgettable. Stay tuned for more exciting cardiology activities, and make sure to take part in the upcoming ones!\n\nMembers-only events are also on the way, so don't miss your chance to join."
        },
        {
            id: 2,
            title: "PMED Podcast Club – First Episode Released",
            description: "Our first podcast episode is now live, discussing Listening is key for every doctor… but that's not all! In this episode, we discussed choosing role models, building true value in others' lives, and other inspiring topics.",
            image: slide4Image, // Using Slide4 image for podcast
            category: "Podcast",
            date: "2024-01-10",
            buttonText: "Listen Now",
            buttonAction: "https://youtu.be/rl20Fgx9wFc?si=swAJ1Pgs7BSGPwa2",
            buttonType: "external"
        },
        {
            id: 3,
            title: "Meet Our Supervisors",
            description: "Our supervisors guide the Cardiology Division. The driving force supporting our journeys within their knowledge and guidance.",
            image: supervisor1Image, // Using existing supervisor image
            category: "Mentorship",
            date: "2024-01-05",
            buttonText: "Follow on Instagram",
            buttonAction: "https://www.instagram.com/p/DON8y42CM8r/",
            buttonType: "external"
        },
        {
            id: 4,
            title: "A new achievement for PMED.",
            description: "The recognition of our PMED President by Al-Quds University stands as a testament to the talent, dedication, and global scientific presence of our family.",
            image: ahmadRoyalImage, // Using the Royal Society event image
            category: "Achievements",
            date: "2024-10-04",
            buttonText: "View Post",
            buttonAction: "https://www.facebook.com/share/p/17KqEfHYMf/?mibextid=wwXIfr",
            buttonType: "external",
            details: "Our PMED President has been recognized by Al-Quds University for outstanding contributions to medical research and education. This recognition highlights the exceptional talent within our club and demonstrates our commitment to excellence in the medical field. The achievement reflects the dedication of our members and their ability to make meaningful contributions to global scientific research."
        }
    ];

    const categories = ['All', 'Cardiology', 'Podcast', 'Mentorship', 'Events', 'Achievements', 'Conference', 'Neuroscience'];

    const filteredNews = useMemo(() => {
        return newsItems
            .filter(item => {
                const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
                return matchesSearch && matchesCategory;
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Most recent first
    }, [searchTerm, selectedCategory]);

    const featuredNews = filteredNews[0] || null;
    const spotlightNews = filteredNews.slice(1, 4);
    const archiveNews = filteredNews.slice(4);

    const handleShare = (item: NewsItem) => {
        if (navigator.share) {
            navigator.share({
                title: item.title,
                text: item.description,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${item.title} - ${item.description} - ${window.location.href}`);
            alert('Link copied to clipboard!');
        }
    };

    const handleButtonClick = (item: NewsItem) => {
        setSelectedNewsItem(item);
    };

    const closeModal = () => {
        setSelectedNewsItem(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        PMED News & Updates
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest news, events, and achievements from PMED
                    </p>
                </motion.div>

                {/* Search and Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                            />
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <Filter className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700 font-medium">Filter</span>
                        </button>
                    </div>

                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: showFilters ? 1 : 0,
                            height: showFilters ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-wrap gap-2 mt-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {filteredNews.length > 0 ? (
                    <div className="space-y-16">
                        {/* Featured Story */}
                        {featuredNews && (
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch"
                            >
                                <div className="relative col-span-1 lg:col-span-3 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src={featuredNews.image}
                                        alt={featuredNews.title}
                                        className="w-full h-full object-cover max-h-[520px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute top-5 left-5 flex gap-3">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                                            Featured
                                        </span>
                                        <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded-full uppercase tracking-wide">
                                            {featuredNews.category}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleShare(featuredNews)}
                                        className="absolute top-5 right-5 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                    >
                                        <Share2 className="w-4 h-4 text-gray-700" />
                                    </button>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <div className="flex items-center gap-3 text-sm text-white/80 mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/60" />
                                            <span>{featuredNews.buttonType === 'external' ? 'External Coverage' : 'PMED Insider'}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-lg">
                                            {featuredNews.title}
                                        </h2>
                                        <p className="text-base md:text-lg text-white/90 max-w-3xl mb-6">
                                            {featuredNews.description}
                                        </p>
                                        <button
                                            onClick={() => handleButtonClick(featuredNews)}
                                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            {featuredNews.buttonText}
                                            {featuredNews.buttonType === 'external' ? (
                                                <ExternalLink className="w-4 h-4" />
                                            ) : (
                                                <ArrowRight className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Inside the Story</h3>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                            Why it matters
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            {featuredNews.details || featuredNews.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                            Quick Facts
                                        </h4>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
                                                <span>
                                                    Published on <strong>{new Date(featuredNews.date).toLocaleDateString()}</strong>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
                                                <span>
                                                    Category: <strong>{featuredNews.category}</strong>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
                                                <span>
                                                    {featuredNews.buttonType === 'external'
                                                        ? 'Coverage available on external platforms'
                                                        : 'Exclusive to PMED members'}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>
                        )}

                        {/* Spotlight Stories */}
                        {spotlightNews.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Spotlight Stories</h2>
                                        <p className="text-gray-600">
                                            The latest headlines from across PMED
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {spotlightNews.map((item, index) => (
                                        <motion.article
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            onClick={() => setSelectedNewsItem(item)}
                                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col cursor-pointer"
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                        {item.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                                                    {item.description}
                                                </p>
                                                <button
                                                    onClick={() => handleButtonClick(item)}
                                                    className="mt-auto inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                                >
                                                    {item.buttonText}
                                                    {item.buttonType === 'external' ? (
                                                        <ExternalLink className="w-4 h-4" />
                                                    ) : (
                                                        <ArrowRight className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* News Archive */}
                        {archiveNews.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">News Archive</h2>
                                        <p className="text-gray-600">Browse past highlights and milestones</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {archiveNews.map((item, index) => (
                                        <motion.article
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            onClick={() => setSelectedNewsItem(item)}
                                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col cursor-pointer"
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute top-4 left-4 flex gap-2">
                                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                        {item.category}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleShare(item); }}
                                                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                                >
                                                    <Share2 className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                                                    {item.description}
                                                </p>
                                                <button
                                                    onClick={() => handleButtonClick(item)}
                                                    className="mt-auto inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                                >
                                                    {item.buttonText}
                                                    {item.buttonType === 'external' ? (
                                                        <ExternalLink className="w-4 h-4" />
                                                    ) : (
                                                        <ArrowRight className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            </motion.section>
                        )}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            No news found
                        </h3>
                        <p className="text-gray-500">
                            Try adjusting your search terms or filters
                        </p>
                    </motion.div>
                )}

                {/* Modal for News Details */}
                {selectedNewsItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative">
                                <img
                                    src={selectedNewsItem.image}
                                    alt={selectedNewsItem.title}
                                    className="w-full h-64 object-cover rounded-t-xl"
                                />
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                >
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                        {selectedNewsItem.category}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(selectedNewsItem.date).toLocaleDateString()}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {selectedNewsItem.title}
                                </h2>

                                <p className="text-gray-600 mb-6">
                                    {selectedNewsItem.description}
                                </p>

                                {selectedNewsItem.details && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Full Story</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {selectedNewsItem.details}
                                        </p>
                                    </div>
                                )}

                                {/* Action Button */}
                                {selectedNewsItem.buttonAction && (
                                    <a
                                        href={selectedNewsItem.buttonAction}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                                    >
                                        {selectedNewsItem.buttonText}
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
