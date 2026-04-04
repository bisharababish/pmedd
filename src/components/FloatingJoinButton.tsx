import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const options = [
    {
        label: 'PMED Neuro Club',
        color: 'from-green-500 to-green-600',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLScgHGNd5_Q0tpXCFrrI-CqAKWkGCqQyutRG2i2ZjmmqJb32rw/viewform'
    },
    {
        label: 'PMED Cardiology Club',
        color: 'from-red-500 to-red-600',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSf3PvkTTEDqUYTwVcnNYmNyF95C4gYLajAhQB4XP_b4iNLG4Q/viewform'
    },
    {
        label: 'PMED',
        color: 'from-blue-500 to-blue-600',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdLii2Ln6oul4IC_tIAUo-8uw1aKcu0l8xfn-0AtmxT3nfIuw/viewform'
    }
];

const DEFAULT_BOTTOM = 32; // px, equivalent to bottom-8
const GAP = 16; // px gap between button and footer

const FloatingJoinButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(DEFAULT_BOTTOM);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePosition = () => {
            const footer = document.querySelector('footer');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const footerVisible = viewportHeight - footerRect.top;

            if (footerVisible > 0) {
                setBottomOffset(footerVisible + GAP);
            } else {
                setBottomOffset(DEFAULT_BOTTOM);
            }
        };

        window.addEventListener('scroll', updatePosition, { passive: true });
        window.addEventListener('resize', updatePosition, { passive: true });
        updatePosition();

        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed left-6 z-50 flex flex-col items-start gap-3 transition-[bottom] duration-200 ease-out"
            style={{ bottom: `${bottomOffset}px` }}
        >
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2 mb-1"
                    >
                        {options.map((opt, i) => (
                            <motion.a
                                key={opt.label}
                                href={opt.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: i * 0.05 }}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-white font-semibold text-sm shadow-lg bg-gradient-to-r ${opt.color} hover:scale-105 transition-transform whitespace-nowrap`}
                            >
                                {opt.label}
                                <ChevronRight className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#1C2E4A] to-[#2a4270] text-white font-bold shadow-xl text-sm"
            >
                {open ? <X className="w-4 h-4" /> : null}
                {open ? 'Close' : 'Join Now'}
            </motion.button>
        </div>
    );
};

export default FloatingJoinButton;
