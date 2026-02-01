import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FullHeroImage({
    backgroundImage,
    primaryLink,
    secondaryLink,
    height = '680px',
    alt = 'Hero section',
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full overflow-hidden"
            style={{ height }}
        >
            {/* Background image that fills the section */}
            <img
                src={backgroundImage}
                alt={alt}
                className="w-full h-full object-cover object-top"
            />

            {/* Invisible clickable overlay areas for the buttons */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-[180px] md:pt-[200px]">
                <div className="flex items-center gap-4">
                    {primaryLink && (
                        <Link
                            to={primaryLink}
                            className="w-[120px] h-[44px] rounded-full opacity-0 hover:opacity-10 hover:bg-black transition-opacity"
                            aria-label="Learn more"
                        />
                    )}
                    {secondaryLink && (
                        <Link
                            to={secondaryLink}
                            className="w-[110px] h-[44px] rounded-full opacity-0 hover:opacity-10 hover:bg-black transition-opacity"
                            aria-label="Buy"
                        />
                    )}
                </div>
            </div>
        </motion.section>
    );
}
