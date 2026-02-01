import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection({
    title,
    subtitle,
    primaryLink,
    primaryText = 'Learn more',
    secondaryLink,
    secondaryText = 'Buy',
    image,
    backgroundColor = '#f5f5f7',
    textColor = 'dark',
    isNew = false,
    fullWidthImage = false,
    showAppleLogo = false,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const textColors = {
        dark: 'text-[#1d1d1f]',
        light: 'text-white',
    };

    // Check if backgroundColor is a gradient
    const isGradient = backgroundColor.includes('gradient');
    const bgStyle = isGradient
        ? { background: backgroundColor }
        : { backgroundColor };

    // Special rendering for "iPad air" title
    const renderTitle = () => {
        if (title === 'iPad air') {
            return (
                <>
                    <span>iPad </span>
                    <span className="italic text-[#1d84fc] font-normal" style={{ fontFamily: 'Georgia, serif' }}>air</span>
                </>
            );
        }
        return title;
    };

    return (
        <section
            ref={ref}
            className="relative min-h-[580px] md:min-h-[680px] flex flex-col overflow-hidden"
            style={bgStyle}
        >
            {/* Text Content - Always at top */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`text-center pt-14 md:pt-20 px-6 relative z-10 ${textColors[textColor]}`}
            >
                {isNew && (
                    <span className="inline-block text-sm font-medium text-[#bf4800] mb-1">New</span>
                )}
                <h2 className="text-[40px] md:text-[56px] font-semibold leading-[1.05] tracking-[-0.015em] mb-3 flex items-center justify-center gap-2">
                    {showAppleLogo && (
                        <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 17 48" fill="currentColor">
                            <path d="M15.5752 19.0792C15.4787 19.1792 13.546 20.2845 13.546 22.7009C13.546 25.4868 16.0045 26.4862 16.0764 26.5104C16.0644 26.5741 15.7049 27.7919 14.8572 29.0339C14.1211 30.1392 13.3491 31.2203 12.1887 31.2203C11.0283 31.2203 10.6567 30.5471 9.33 30.5471C8.03927 30.5471 7.47353 31.2445 6.41308 31.2445C5.35262 31.2445 4.60458 30.2451 3.74493 28.9789C2.73252 27.4636 1.9126 25.1347 1.9126 22.9059C1.9126 19.0792 4.50299 17.0499 7.05742 17.0499C8.18186 17.0499 9.1307 17.7835 9.85072 17.7835C10.5348 17.7835 11.6111 17.0016 12.8911 17.0016C13.3971 17.0016 15.3298 17.0499 15.5752 19.0792ZM11.2158 15.3684C11.7577 14.7314 12.1527 13.8445 12.1527 12.9576C12.1527 12.8334 12.1407 12.7092 12.1168 12.6092C11.2278 12.6454 10.1673 13.2101 9.56159 13.9196C9.07995 14.4663 8.59232 15.3684 8.59232 16.2673C8.59232 16.4036 8.61628 16.54 8.62826 16.5883C8.68821 16.6003 8.78413 16.6124 8.88005 16.6124C9.67312 16.6124 10.6219 16.0718 11.2158 15.3684Z" />
                        </svg>
                    )}
                    {renderTitle()}
                </h2>
                {subtitle && (
                    <p className="text-[19px] md:text-[21px] leading-[1.38] font-normal mb-5 max-w-xl mx-auto">
                        {subtitle}
                    </p>
                )}

                {/* Apple-style pill buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    {primaryLink && (
                        <Link
                            to={primaryLink}
                            className="inline-flex items-center justify-center min-w-[110px] px-6 py-3 rounded-full text-[17px] font-medium bg-[#0071e3] hover:bg-[#0077ed] transition-colors"
                            style={{ color: '#ffffff' }}
                        >
                            {primaryText}
                        </Link>
                    )}
                    {secondaryLink && (
                        <Link
                            to={secondaryLink}
                            className={`inline-flex items-center justify-center min-w-[90px] px-6 py-3 rounded-full text-[17px] font-normal border transition-colors ${textColor === 'light'
                                ? 'border-white/40 text-white hover:bg-white hover:text-black'
                                : 'border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'
                                }`}
                        >
                            {secondaryText}
                        </Link>
                    )}
                </div>
            </motion.div>

            {/* Product Image - At bottom, full width option */}
            {image && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className={`flex-1 flex items-end justify-center ${fullWidthImage ? 'px-0' : 'px-4'} mt-6`}
                >
                    <img
                        src={image}
                        alt={typeof title === 'string' ? title : 'Product'}
                        className={`object-contain ${fullWidthImage ? 'w-full max-h-[380px]' : 'max-w-full max-h-[400px] md:max-h-[420px]'}`}
                    />
                </motion.div>
            )}
        </section>
    );
}

