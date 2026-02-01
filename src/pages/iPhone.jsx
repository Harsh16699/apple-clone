import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/Footer';

const iPhoneModels = [
    {
        name: 'iPhone 17 Pro',
        tagline: 'Innovative design for ultimate performance and battery life.',
        colors: ['Cosmic Orange', 'Deep Blue', 'Silver'],
        colorHex: ['#D4632A', '#1E3A5F', '#E3E3E0'],
        isNew: true,
        link: '/iphone-17-pro',
        gradient: 'linear-gradient(180deg, #2D1810 0%, #1a1a1a 100%)',
    },
    {
        name: 'iPhone Air',
        tagline: 'The thinnest iPhone ever. With the power of pro inside.',
        colors: ['Sky Blue', 'Light Gold', 'Cloud White', 'Space Black'],
        colorHex: ['#A7C7E7', '#E8D9C5', '#F5F5F5', '#1D1D1F'],
        isNew: true,
        link: '/iphone-air',
        gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
        image: '/images/products/iphone-air-thin.png',
    },
    {
        name: 'iPhone 17',
        tagline: 'Even more delightful. Even more durable.',
        colors: ['Lavender', 'Sage', 'Mist Blue', 'White', 'Black'],
        colorHex: ['#E6E0F0', '#C5D4C0', '#C0D8E8', '#FFFFFF', '#1D1D1F'],
        isNew: true,
        link: '/iphone-17',
        gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)',
        image: '/images/products/iphone-lineup-colors.png',
    },
    {
        name: 'iPhone 16',
        tagline: 'A total powerhouse.',
        colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
        colorHex: ['#3D5A9C', '#4A8080', '#F4B5C6', '#FFFFFF', '#1D1D1F'],
        isNew: false,
        link: '/iphone-16',
        gradient: 'linear-gradient(180deg, #E8F0F8 0%, #C8D8E8 100%)',
    },
    {
        name: 'iPhone 16e',
        tagline: 'A great deal more.',
        colors: ['Black', 'White'],
        colorHex: ['#1D1D1F', '#F5F5F5'],
        isNew: false,
        link: '/iphone-16e',
        gradient: 'linear-gradient(180deg, #F0F0F0 0%, #E8E8E8 100%)',
    },
];

function PhoneCard({ model, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-3xl min-h-[480px]"
            style={{ background: model.gradient }}
        >
            {model.isNew && (
                <span className="text-sm font-medium text-[#bf4800] mb-2">New</span>
            )}
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-2">
                {model.name}
            </h3>

            {/* Phone Image */}
            <div className="flex-1 flex items-center justify-center my-6">
                {model.image ? (
                    <Link to={model.link}>
                        <motion.img
                            src={model.image}
                            alt={model.name}
                            className="max-h-[280px] object-contain transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />
                    </Link>
                ) : (
                    <Link to={model.link} className="w-40 h-80 bg-gradient-to-b from-gray-700 to-gray-900 rounded-[2rem] flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                        <div className="w-36 h-72 bg-gradient-to-br from-gray-800 to-black rounded-[1.5rem] flex items-center justify-center">
                            <span className="text-white/30 text-xs">iPhone</span>
                        </div>
                    </Link>
                )}
            </div>

            {/* Color options */}
            <div className="flex gap-2 mb-4">
                {model.colorHex.map((color, i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                        title={model.colors[i]}
                    />
                ))}
            </div>

            <p className="text-[#86868b] text-sm mb-4 max-w-xs">{model.tagline}</p>

            <div className="flex gap-4">
                <Link to={model.link} className="link-arrow text-sm">
                    Learn more
                </Link>
                <Link to="/store" className="link-arrow text-sm">
                    Buy
                </Link>
            </div>
        </motion.div>
    );
}

function FeatureSection({ title, description, icon, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-8"
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{title}</h3>
            <p className="text-[#86868b] text-sm max-w-xs">{description}</p>
        </motion.div>
    );
}

export default function iPhone() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <main className="bg-white">
            {/* Sub Navigation */}
            <div className="sticky top-12 z-40 bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-[#d2d2d7]">
                <div className="max-w-[1024px] mx-auto px-6">
                    <div className="flex items-center justify-between py-3 overflow-x-auto">
                        <span className="text-xl font-semibold text-[#1d1d1f] whitespace-nowrap">iPhone</span>
                        <div className="flex gap-6 text-xs">
                            {['iPhone 17 Pro', 'iPhone Air', 'iPhone 17', 'iPhone 16', 'iPhone 16e', 'Compare', 'Accessories'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-[#424245] hover:text-[#1d1d1f] whitespace-nowrap transition-colors"
                                >
                                    {item.includes('17') || item.includes('Air') ? (
                                        <>
                                            {item} <span className="text-[#bf4800]">New</span>
                                        </>
                                    ) : (
                                        item
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative min-h-[90vh] flex flex-col items-center justify-start pt-20 text-center overflow-hidden bg-black"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/products/iphone-pro-camera.png"
                        alt="iPhone 17 Pro"
                        className="w-full h-full object-cover object-center opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <span className="text-sm font-medium text-[#bf4800] mb-2 block">New</span>
                    <h1 className="headline-super text-white mb-4">iPhone 17 Pro</h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl mx-auto">
                        Innovative design for ultimate performance.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <Link to="/iphone-17-pro" className="btn-primary">
                            Learn more
                        </Link>
                        <Link to="/store" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                            Buy
                        </Link>
                    </div>
                </motion.div>
            </motion.section>

            {/* Explore the Lineup */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="headline-large text-center text-[#1d1d1f] mb-12">
                        Explore the lineup.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {iPhoneModels.slice(0, 3).map((model, index) => (
                            <PhoneCard key={model.name} model={model} index={index} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                        {iPhoneModels.slice(3).map((model, index) => (
                            <PhoneCard key={model.name} model={model} index={index + 3} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="headline-large text-center text-[#1d1d1f] mb-4">
                        Get to know iPhone.
                    </h2>
                    <p className="text-center text-[#86868b] text-lg mb-12 max-w-2xl mx-auto">
                        Discover what makes iPhone the world's most powerful personal device.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <FeatureSection
                            index={0}
                            icon="📸"
                            title="Cutting-Edge Cameras"
                            description="Picture your best photos and videos with advanced camera systems."
                        />
                        <FeatureSection
                            index={1}
                            icon="⚡"
                            title="Chip and Battery"
                            description="Fast that lasts. All-day battery life with blazing performance."
                        />
                        <FeatureSection
                            index={2}
                            icon="🧠"
                            title="Apple Intelligence"
                            description="New look. Even more magic with AI-powered features."
                        />
                        <FeatureSection
                            index={3}
                            icon="🔒"
                            title="Privacy"
                            description="Your data. Just where you want it. Secure and private."
                        />
                    </div>
                </div>
            </section>

            {/* Why Apple Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="headline-large text-[#1d1d1f] mb-4">
                        Why Apple is the best<br />place to buy iPhone.
                    </h2>
                    <p className="text-[#86868b] text-lg mb-12">
                        Trade-in, carrier deals, financing, and personal setup—all in one place.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: '🔄', title: 'Apple Trade In', desc: 'Get credit toward your next iPhone.' },
                            { icon: '💳', title: 'Apple Card', desc: 'Monthly installments with 0% APR.' },
                            { icon: '📦', title: 'Free Delivery', desc: 'Get free delivery or pickup.' },
                            { icon: '🎓', title: 'Personal Setup', desc: 'Online sessions with a Specialist.' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="font-semibold text-[#1d1d1f] mb-1">{item.title}</h4>
                                <p className="text-xs text-[#86868b]">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
