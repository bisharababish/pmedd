import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pmedLogo from './supervisorpics/PMED logo.jpg';

const LoadingScreen: React.FC = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1C2E4A]"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.img
                            src={pmedLogo}
                            alt="PMED"
                            className="w-24 h-24 rounded-full object-cover"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/70 text-sm tracking-widest uppercase"
                        >
                            PMED
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
