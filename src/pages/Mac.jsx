import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/Footer';

const macProducts = [
    {
        name: 'MacBook Air',
        sizes: '13" and 15"',
        chip: 'M4',
        tagline: 'Strikingly thin and fast so you can work, play, or create anywhere.',
        isNew: true,
        image: '/images/products/macbook-air-duo.png',
        colors: ['sky blue', 'silver', 'starlight', 'midnight'],
        gradient: 'linear-gradient(180deg, #F5F5F7 0%, #E8E8EA 100%)',
    },
    {
        name: 'MacBook Pro',
        sizes: '14" and 16"',
        chip: 'M4 Pro / M4 Max',
        tagline: 'The most advanced Mac laptops for demanding workflows.',
        isNew: true,
        image: '/images/products/macbook-pro-duo.png',
        colors: ['space black', 'silver'],
        gradient: 'linear-gradient(180deg, #F5F5F7 0%, #E8E8EA 100%)',
    },
    {
        name: 'iMac',
        sizes: '24"',
        chip: 'M4',
        tagline: 'A stunning all-in-one desktop for creativity and productivity.',
        isNew: true,
        image: '/images/products/imac-colors.png',
        colors: ['green', 'yellow', 'orange', 'pink', 'purple', 'blue', 'silver'],
        gradient: 'linear-gradient(180deg, #F5F5F7 0%, #E8E8EA 100%)',
    },
    {
        name: 'Mac mini',
        sizes: '',
        chip: 'M4 / M4 Pro',
        tagline: 'The mini-est, most affordable Mac with mighty performance.',
        isNew: true,
        image: '/images/products/mac-mini.png',
        colors: [],
        gradient: 'linear-gradient(180deg, #F5F5F7 0%, #E8E8EA 100%)',
    },
    {
        name: 'Mac Studio',
        sizes: '',
        chip: 'M4 Max / M3 Ultra',
        tagline: 'Supercharged for the most demanding workflows.',
        isNew: false,
        image: '/images/products/mac-studio.png',
        colors: [],
        gradient: 'linear-gradient(180deg, #F5F5F7 0%, #E8E8EA 100%)',
    },
    {
        name: 'Mac Pro',
        sizes: '',
        chip: 'M2 Ultra',
        tagline: 'The most powerful Mac for enterprise and pro workflows.',
        isNew: false,
        image: '/images/products/mac-studio.png',
        colors: [],
        gradient: 'linear-gradient(180deg, #F5F5F7 0%, #E8E8EA 100%)',
    },
];

// Color mapping for dots
const colorMap = {
    'sky blue': '#7EB8E0',
    'silver': '#E3E4E5',
    'starlight': '#F0E4D3',
    'midnight': '#1D1D1F',
    'space black': '#2E2E30',
    'green': '#3D8248',
    'yellow': '#FFCD00',
    'orange': '#F56300',
    'pink': '#EA5A87',
    'purple': '#6B5BA0',
    'blue': '#4B7BE5',
};

function MacCard({ product, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-3xl min-h-[480px]"
            style={{ background: product.gradient }}
        >
            {/* Product Name & Size */}
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-0">
                {product.name}
                {product.sizes && <span className="text-lg font-normal text-[#1d1d1f]/70"> {product.sizes}</span>}
            </h3>

            {/* Product Image */}
            <Link to={`/${product.name.toLowerCase().replace(/ /g, '-')}`} className="flex-1 flex items-center justify-center my-4 w-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-[200px] object-contain hover:scale-105 transition-transform duration-300"
                />
            </Link>

            {/* Color Dots */}
            {product.colors.length > 0 && (
                <div className="flex gap-1.5 mb-4">
                    {product.colors.map((color) => (
                        <div
                            key={color}
                            className="w-3 h-3 rounded-full border border-[#d2d2d7]"
                            style={{ backgroundColor: colorMap[color] || '#ccc' }}
                            title={color}
                        />
                    ))}
                </div>
            )}

            {/* Tagline */}
            <p className="text-sm text-[#1d1d1f]/80 mb-4 leading-relaxed">
                {product.tagline}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
                <Link to={`/${product.name.toLowerCase().replace(/ /g, '-')}`} className="link-arrow text-sm">
                    Learn more
                </Link>
                <Link to="/store" className="link-arrow text-sm">
                    Buy
                </Link>
            </div>
        </motion.div>
    );
}

export default function Mac() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <main className="bg-white">
            {/* Sub Navigation */}
            <div className="sticky top-12 z-40 bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-[#d2d2d7]">
                <div className="max-w-[1024px] mx-auto px-6">
                    <div className="flex items-center justify-between py-3 overflow-x-auto">
                        <span className="text-xl font-semibold text-[#1d1d1f] whitespace-nowrap">Mac</span>
                        <div className="flex gap-6 text-xs">
                            {['MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio', 'Mac Pro', 'Compare', 'Accessories'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-[#424245] hover:text-[#1d1d1f] whitespace-nowrap transition-colors"
                                >
                                    {item}
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
                className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #E8F4FF 0%, #D0E8FF 100%)' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 mb-8"
                >
                    <span className="text-sm font-medium text-[#bf4800] mb-2 block">New</span>
                    <h1 className="headline-super text-[#1d1d1f] mb-4">MacBook Air</h1>
                    <p className="text-xl md:text-2xl text-[#1d1d1f]/80 mb-6 max-w-2xl mx-auto">
                        Sky blue color. Sky high performance with M4.<br />
                        Starting at $999.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <Link to="/macbook-air" className="btn-primary">
                            Learn more
                        </Link>
                        <Link to="/store" className="btn-secondary">
                            Buy
                        </Link>
                    </div>
                </motion.div>

                {/* MacBook Air Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative z-10 px-4 mt-4"
                >
                    <Link to="/macbook-air">
                        <img
                            src="/images/products/macbook-air-blue.png"
                            alt="MacBook Air"
                            className="max-w-[900px] w-full object-contain"
                        />
                    </Link>
                </motion.div>
            </motion.section>

            {/* Mac Lineup */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="headline-large text-center text-[#1d1d1f] mb-4">
                        Explore the Mac lineup.
                    </h2>
                    <p className="text-center text-[#86868b] text-lg mb-12 max-w-2xl mx-auto">
                        Find the Mac that's right for you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {macProducts.map((product, index) => (
                            <MacCard key={product.name} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Mac Section */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="headline-large text-center text-[#1d1d1f] mb-4">
                        Why Mac.
                    </h2>
                    <p className="text-center text-[#86868b] text-lg mb-12 max-w-2xl mx-auto">
                        Supercharged by Apple silicon for incredible performance.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: '⚡', title: 'Apple Silicon', desc: 'Incredible performance and battery life.' },
                            { icon: '🔒', title: 'Privacy & Security', desc: 'Your data stays safe and protected.' },
                            { icon: '🔄', title: 'Works with iPhone', desc: 'Seamlessly connected with your devices.' },
                            { icon: '🌍', title: 'Built for Everyone', desc: 'Accessible features for all abilities.' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-4"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="font-semibold text-[#1d1d1f] mb-2">{item.title}</h4>
                                <p className="text-sm text-[#86868b]">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trade In */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="headline-medium text-[#1d1d1f] mb-4">
                        Apple Trade In
                    </h2>
                    <p className="text-[#86868b] text-lg mb-6">
                        Trade in your current Mac and get credit toward a new one.
                    </p>
                    <Link to="/trade-in" className="link-arrow">
                        Get your estimate
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
