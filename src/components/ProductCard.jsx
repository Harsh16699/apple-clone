import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({
    title,
    subtitle,
    description,
    image,
    primaryLink,
    primaryText = 'Learn more',
    secondaryLink,
    secondaryText = 'Buy',
    backgroundColor = '#f5f5f7',
    textColor = 'dark',
    size = 'half',
    isNew = false,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const sizes = {
        full: 'col-span-2',
        half: 'col-span-2 md:col-span-1',
    };

    const textColors = {
        dark: 'text-[#1d1d1f]',
        light: 'text-white',
    };

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`${sizes[size]} relative overflow-hidden ${textColors[textColor]}`}
            style={{ backgroundColor }}
        >
            <div className="relative min-h-[500px] md:min-h-[580px] flex flex-col">
                {/* Text Content */}
                <div className="text-center pt-12 px-6 relative z-10">
                    {isNew && (
                        <span className="inline-block text-sm font-medium text-[#bf4800] mb-2">New</span>
                    )}
                    <h3 className="headline-medium mb-1">{title}</h3>
                    {subtitle && <p className="subheadline mb-1">{subtitle}</p>}
                    {description && (
                        <p className={`text-sm mt-2 ${textColor === 'light' ? 'text-white/80' : 'text-[#86868b]'}`}>
                            {description}
                        </p>
                    )}

                    <div className="flex items-center justify-center gap-6 mt-4">
                        {primaryLink && (
                            <Link to={primaryLink} className="link-arrow text-lg">
                                {primaryText}
                            </Link>
                        )}
                        {secondaryLink && (
                            <Link to={secondaryLink} className="link-arrow text-lg">
                                {secondaryText}
                            </Link>
                        )}
                    </div>
                </div>

                {/* Product Image */}
                {image && (
                    <motion.div
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 flex items-end justify-center mt-4 px-6 pb-8"
                    >
                        <Link to={primaryLink || '/'}>
                            <img
                                src={image}
                                alt={title}
                                className="max-w-full max-h-[350px] object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.article>
    );
}
