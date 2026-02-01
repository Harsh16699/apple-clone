import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/Footer';

const watchModels = [
    {
        name: 'Apple Watch Series 11',
        tagline: 'The ultimate way to watch your health.',
        image: '/images/products/watch-hero.png',
        isNew: true,
        link: '/watch-series-11',
        backgroundColor: '#FAFAFA',
        textLight: false,
        colors: ['Space Grey', 'Silver', 'Rose Gold', 'Jet Black', 'Natural', 'Gold', 'Slate'],
        colorHex: ['#5C5C5C', '#E3E4E5', '#E8C4B8', '#1D1D1F', '#D4C5B0', '#F0D5B8', '#7A7A7A'],
    },
    {
        name: 'Apple Watch SE 3',
        tagline: 'Essential health features at a great value.',
        image: '/images/products/watch-lineup.png',
        isNew: true,
        link: '/watch-se',
        backgroundColor: '#F5F5F7',
        textLight: false,
        colors: ['Midnight', 'Starlight'],
        colorHex: ['#1D1D1F', '#F0E4D3'],
    },
    {
        name: 'Apple Watch Ultra 3',
        tagline: 'The ultimate sports and adventure watch.',
        image: '/images/products/watch-ultra-green.png',
        isNew: true,
        link: '/watch-ultra',
        backgroundColor: '#000000',
        textLight: true,
        colors: ['Natural', 'Black'],
        colorHex: ['#D4C5B0', '#1D1D1F'],
    },
];

function WatchCard({ model, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center rounded-3xl overflow-hidden"
            style={{ backgroundColor: model.backgroundColor }}
        >
            <div className="p-8 pb-0">
                {model.isNew && (
                    <span className="text-sm font-medium text-[#bf4800] mb-2 block">New</span>
                )}
                <h3 className={`text-2xl md:text-3xl font-semibold mb-2 ${model.textLight ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {model.name}
                </h3>

                {/* Color Dots */}
                {model.colorHex && model.colorHex.length > 0 && (
                    <div className="flex gap-1.5 justify-center mb-3">
                        {model.colorHex.map((color, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full border ${model.textLight ? 'border-white/30' : 'border-[#d2d2d7]'}`}
                                style={{ backgroundColor: color }}
                                title={model.colors[i]}
                            />
                        ))}
                    </div>
                )}

                <p className={`text-sm mb-4 ${model.textLight ? 'text-white/80' : 'text-[#86868b]'}`}>
                    {model.tagline}
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to={model.link} className={`link-arrow text-sm ${model.textLight ? 'text-[#2997ff]' : ''}`}>
                        Learn more
                    </Link>
                    <Link to="/store" className={`link-arrow text-sm ${model.textLight ? 'text-[#2997ff]' : ''}`}>
                        Buy
                    </Link>
                </div>
            </div>

            {/* Watch Image */}
            <Link to={model.link} className="mt-4 px-4 pb-8 flex-1 flex items-end justify-center">
                <motion.img
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    src={model.image}
                    alt={model.name}
                    className="max-h-[300px] object-contain"
                />
            </Link>
        </motion.div>
    );
}

export default function Watch() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <main className="bg-white">
            {/* Sub Navigation */}
            <div className="sticky top-12 z-40 bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-[#d2d2d7]">
                <div className="max-w-[1024px] mx-auto px-6">
                    <div className="flex items-center justify-between py-3 overflow-x-auto">
                        <span className="text-xl font-semibold text-[#1d1d1f] whitespace-nowrap">Watch</span>
                        <div className="flex gap-6 text-xs">
                            {['Apple Watch Ultra 3', 'Apple Watch Series 11', 'Apple Watch SE', 'Compare', 'Bands', 'Accessories'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-[#424245] hover:text-[#1d1d1f] whitespace-nowrap transition-colors"
                                >
                                    {item.includes('Ultra') || item.includes('Series 11') ? (
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

            {/* Hero Section - Watch Ultra */}
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative min-h-[90vh] flex flex-col items-center justify-start pt-20 text-center bg-black overflow-hidden"
            >
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <img
                        src="/images/products/watch-ultra-green.png"
                        alt="Apple Watch Ultra 3"
                        className="w-full h-full object-contain object-bottom"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <span className="text-sm font-medium text-[#bf4800] mb-2 block">New</span>
                    <h1 className="headline-super text-white mb-4">Apple Watch Ultra 3</h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl mx-auto">
                        The most rugged and capable Apple Watch.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <Link to="/watch-ultra" className="btn-primary">
                            Learn more
                        </Link>
                        <Link to="/store" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                            Buy
                        </Link>
                    </div>
                </motion.div>
            </motion.section>

            {/* Watch Lineup */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="headline-large text-center text-[#1d1d1f] mb-4">
                        Explore the lineup.
                    </h2>
                    <p className="text-center text-[#86868b] text-lg mb-12 max-w-2xl mx-auto">
                        Find the watch that's right for you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {watchModels.map((model, index) => (
                            <WatchCard key={model.name} model={model} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="headline-large text-center text-[#1d1d1f] mb-4">
                        Why Apple Watch.
                    </h2>
                    <p className="text-center text-[#86868b] text-lg mb-12 max-w-2xl mx-auto">
                        It's the ultimate device for a healthy life.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: '❤️', title: 'Health', desc: 'Monitor your heart, sleep, and more.' },
                            { icon: '🏃', title: 'Fitness', desc: 'Track every way you move.' },
                            { icon: '📱', title: 'Connectivity', desc: 'Stay connected, even without your phone.' },
                            { icon: '🛡️', title: 'Safety', desc: 'Get help when you need it most.' },
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

            {/* Band Studio */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="headline-medium text-[#1d1d1f] mb-4">
                        Apple Watch Studio
                    </h2>
                    <p className="text-[#86868b] text-lg mb-6">
                        Mix. Match. Make it icons.
                    </p>
                    <Link to="/watch-studio" className="link-arrow">
                        Create your look
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
