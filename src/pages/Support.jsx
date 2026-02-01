import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const supportTopics = [
    {
        icon: '📱',
        title: 'iPhone',
        desc: 'Explore iPhone topics',
        link: '/support/iphone',
    },
    {
        icon: '💻',
        title: 'Mac',
        desc: 'Explore Mac topics',
        link: '/support/mac',
    },
    {
        icon: '📲',
        title: 'iPad',
        desc: 'Explore iPad topics',
        link: '/support/ipad',
    },
    {
        icon: '⌚',
        title: 'Watch',
        desc: 'Explore Watch topics',
        link: '/support/watch',
    },
    {
        icon: '🎧',
        title: 'AirPods',
        desc: 'Explore AirPods topics',
        link: '/support/airpods',
    },
    {
        icon: '🎵',
        title: 'Music',
        desc: 'Explore Music topics',
        link: '/support/music',
    },
    {
        icon: '📺',
        title: 'TV',
        desc: 'Explore TV topics',
        link: '/support/tv',
    },
    {
        icon: '☁️',
        title: 'iCloud',
        desc: 'Explore iCloud topics',
        link: '/support/icloud',
    },
];

const quickLinks = [
    'Check your warranty status',
    'Update your Apple Account settings',
    'Apple Trade In',
    'Get AppleCare+',
    'View your Apple repairs',
    'Manage subscriptions',
];

export default function Support() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section with Search */}
            <section className="bg-[#f5f5f7] pt-16 pb-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="headline-large text-[#1d1d1f] mb-8"
                    >
                        Apple Support
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative max-w-xl mx-auto"
                    >
                        <input
                            type="text"
                            placeholder="Search for topics, products, and more"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 text-lg rounded-xl border border-[#d2d2d7] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent shadow-sm"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#86868b]">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Product Support Grid */}
            <section className="py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
                        Choose a product
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {supportTopics.map((topic, index) => (
                            <motion.div
                                key={topic.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    to={topic.link}
                                    className="flex flex-col items-center p-6 rounded-2xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors text-center group"
                                >
                                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                        {topic.icon}
                                    </span>
                                    <h3 className="font-semibold text-[#1d1d1f] mb-1">{topic.title}</h3>
                                    <p className="text-xs text-[#86868b]">{topic.desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 px-6 bg-[#f5f5f7]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
                        Quick Links
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quickLinks.map((link, index) => (
                            <motion.div
                                key={link}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    to="#"
                                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                                >
                                    <span className="text-[#1d1d1f] group-hover:text-[#0066CC] transition-colors">
                                        {link}
                                    </span>
                                    <svg
                                        className="w-4 h-4 text-[#86868b] group-hover:text-[#0066CC] group-hover:translate-x-1 transition-all"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Help Section */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-4">
                        Get Support
                    </h2>
                    <p className="text-center text-[#86868b] mb-8">
                        Choose how you'd like to get help.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '💬',
                                title: 'Chat',
                                desc: 'Start a conversation with Apple Support.',
                                action: 'Start a chat',
                            },
                            {
                                icon: '📞',
                                title: 'Call',
                                desc: 'Talk to Apple Support now or schedule a call.',
                                action: 'Call now',
                            },
                            {
                                icon: '📍',
                                title: 'Visit',
                                desc: 'Get help at an Apple Store or authorized service provider.',
                                action: 'Find a location',
                            },
                        ].map((option, index) => (
                            <motion.div
                                key={option.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                className="bg-white border border-[#d2d2d7] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                            >
                                <span className="text-5xl mb-4 block">{option.icon}</span>
                                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{option.title}</h3>
                                <p className="text-sm text-[#86868b] mb-4">{option.desc}</p>
                                <Link to="#" className="link-arrow">
                                    {option.action}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-12 px-6 bg-[#1d1d1f] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Apple Support Community</h2>
                    <p className="text-white/70 mb-6">
                        Find answers, ask questions, and connect with other Apple users.
                    </p>
                    <Link to="#" className="btn-primary inline-block">
                        Visit the community
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
