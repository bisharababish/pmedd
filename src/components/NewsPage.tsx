import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, ExternalLink, Calendar, Filter } from 'lucide-react';

// Import images
import slide4Image from './images/Slide4.jpg';
import supervisor1Image from './supervisorpics/supervisor1.png';
import ahmadRoyalImage from './images/ahmadroyal.jpg';
import conferenceImage from './images/conference.jpg';

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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

    const newsItems: NewsItem[] = [
        {
            id: 1,
            title: "Launch of the Cardiology Division at IPCLM13",
            description: "PMED Club launched the Cardiology Division during IPCLM13, with active member participation and initial projects introduced.",
            image: conferenceImage, // Using conference image for cardiology launch
            category: "Cardiology",
            date: "2024-01-15",
            buttonText: "Read More",
            buttonAction: "#cardiology-details",
            buttonType: "internal",
            details: "A proudly Palestinian club, founded with one mission: to ignite passion, inspire excellence, and serve the future hearts of medicine — the students of Palestine. During our participation in IPCLM13 held at the Conference Palace, we announced the launch of PMED Club's first Cardiology Interest Group, and shared that membership would open soon, offering our members exclusive opportunities in research, hands-on learning, workshops, and more."
        },
        {
            id: 2,
            title: "PMED Club Podcast – First Episode Released",
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
            title: "PMED Club President Recognized by Al-Quds University",
            description: "The recognition of our PMED Club President by Al-Quds University stands as a testament to the talent, dedication, and global scientific presence of our family.",
            image: ahmadRoyalImage, // Using the Royal Society event image
            category: "Achievements",
            date: "2024-10-04",
            buttonText: "View Post",
            buttonAction: "https://www.facebook.com/share/p/17KqEfHYMf/?mibextid=wwXIfr",
            buttonType: "external",
            details: "Our PMED Club President has been recognized by Al-Quds University for outstanding contributions to medical research and education. This recognition highlights the exceptional talent within our club and demonstrates our commitment to excellence in the medical field. The achievement reflects the dedication of our members and their ability to make meaningful contributions to global scientific research."
        }
    ];

    const categories = ['All', 'Cardiology', 'Podcast', 'Mentorship', 'Events', 'Achievements'];

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
        if (item.buttonType === 'external') {
            window.open(item.buttonAction, '_blank');
        } else {
            // For internal links, show modal with details
            setSelectedNewsItem(item);
        }
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
                        Stay updated with the latest news, events, and achievements from PMED Club
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

                {/* News Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredNews.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Image */}
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
                                <div className="absolute top-4 right-4">
                                    <button
                                        onClick={() => handleShare(item)}
                                        className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                    >
                                        <Share2 className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {item.description}
                                </p>

                                {/* Action Button */}
                                <button
                                    onClick={() => handleButtonClick(item)}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {item.buttonText}
                                    {item.buttonType === 'external' && (
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredNews.length === 0 && (
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
                                <button
                                    onClick={() => handleButtonClick(selectedNewsItem)}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {selectedNewsItem.buttonText}
                                    {selectedNewsItem.buttonType === 'external' && (
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
