import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Store', path: '/store' },
    { name: 'Mac', path: '/mac' },
    { name: 'iPad', path: '/ipad' },
    { name: 'iPhone', path: '/iphone' },
    { name: 'Watch', path: '/watch' },
    { name: 'AirPods', path: '/airpods' },
    { name: 'TV & Home', path: '/tv-home' },
    { name: 'Support', path: '/support' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'glass-nav shadow-sm' : 'bg-[#1d1d1f]/95'
                    }`}
            >
                <div className="max-w-[1024px] mx-auto px-4">
                    <div className="flex items-center justify-between h-12">
                        {/* Apple Logo */}
                        <Link to="/" className="flex items-center">
                            <svg
                                className={`w-5 h-5 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#1d1d1f]' : 'text-white'
                                    }`}
                                viewBox="0 0 17 17"
                                fill="currentColor"
                            >
                                <path d="M8.5 1.5c1.4-1.5 3.5-1.3 3.5-1.3s.3 2-1.1 3.4c-1.5 1.5-3.2 1.3-3.2 1.3s-.4-2 .8-3.4zm-3 4.3c-1.9 0-3.8 1.5-3.8 4.5 0 3.5 2.4 7.7 4.3 7.7.9 0 1.6-.6 2.5-.6.9 0 1.4.6 2.5.6 2.5 0 4.3-5 4.3-5s-2.6-1-2.6-3.8c0-2.4 2-3.4 2-3.4s-1.1-1.6-3.5-1.6c-1.5 0-2.6.9-3.2.9-.7 0-1.6-.8-2.5-.3z" />
                            </svg>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-7">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-xs font-normal transition-colors hover:opacity-70 ${isScrolled ? 'text-[#1d1d1f]' : 'text-white/90'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center gap-4">
                            {/* Search Icon */}
                            <button
                                className={`transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#1d1d1f]' : 'text-white'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>

                            {/* Bag Icon */}
                            <button
                                className={`transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#1d1d1f]' : 'text-white'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className={`lg:hidden transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#1d1d1f]' : 'text-white'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden glass-nav border-t border-gray-200/50 overflow-hidden"
                        >
                            <div className="px-8 py-4 space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="block text-2xl font-semibold text-[#1d1d1f] py-2 border-b border-gray-200/50"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-12" />
        </>
    );
}
