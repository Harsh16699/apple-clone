import { Link } from 'react-router-dom';

const footerLinks = {
    'Shop and Learn': [
        { name: 'Store', path: '/store' },
        { name: 'Mac', path: '/mac' },
        { name: 'iPad', path: '/ipad' },
        { name: 'iPhone', path: '/iphone' },
        { name: 'Watch', path: '/watch' },
        { name: 'AirPods', path: '/airpods' },
        { name: 'TV & Home', path: '/tv-home' },
        { name: 'AirTag', path: '/airtag' },
        { name: 'Accessories', path: '/accessories' },
    ],
    'Apple Wallet': [
        { name: 'Wallet', path: '/wallet' },
        { name: 'Apple Card', path: '/apple-card' },
        { name: 'Apple Pay', path: '/apple-pay' },
        { name: 'Apple Cash', path: '/apple-cash' },
    ],
    'Account': [
        { name: 'Manage Your Apple Account', path: '/account' },
        { name: 'Apple Store Account', path: '/store-account' },
        { name: 'iCloud.com', path: '/icloud' },
    ],
    'Entertainment': [
        { name: 'Apple One', path: '/apple-one' },
        { name: 'Apple TV+', path: '/tv-plus' },
        { name: 'Apple Music', path: '/music' },
        { name: 'Apple Arcade', path: '/arcade' },
        { name: 'Apple Podcasts', path: '/podcasts' },
        { name: 'Apple Books', path: '/books' },
    ],
    'Apple Store': [
        { name: 'Find a Store', path: '/retail' },
        { name: 'Genius Bar', path: '/genius-bar' },
        { name: 'Today at Apple', path: '/today' },
        { name: 'Apple Camp', path: '/camp' },
        { name: 'Apple Trade In', path: '/trade-in' },
        { name: 'Ways to Buy', path: '/ways-to-buy' },
        { name: 'Recycling Program', path: '/recycling' },
        { name: 'Order Status', path: '/order-status' },
    ],
    'For Business': [
        { name: 'Apple and Business', path: '/business' },
        { name: 'Shop for Business', path: '/shop-business' },
    ],
    'For Education': [
        { name: 'Apple and Education', path: '/education' },
        { name: 'Shop for K-12', path: '/shop-k12' },
        { name: 'Shop for College', path: '/shop-college' },
    ],
    'Apple Values': [
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Education', path: '/education' },
        { name: 'Environment', path: '/environment' },
        { name: 'Privacy', path: '/privacy' },
        { name: 'Supply Chain', path: '/supply-chain' },
    ],
    'About Apple': [
        { name: 'Newsroom', path: '/newsroom' },
        { name: 'Apple Leadership', path: '/leadership' },
        { name: 'Career Opportunities', path: '/careers' },
        { name: 'Investors', path: '/investors' },
        { name: 'Ethics & Compliance', path: '/ethics' },
        { name: 'Events', path: '/events' },
        { name: 'Contact Apple', path: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
            {/* Disclaimer */}
            <div className="max-w-[980px] mx-auto px-6 pt-5 pb-3">
                <p className="text-xs text-[#86868b] leading-relaxed">
                    * Monthly pricing requires a 24-month installment loan with 0% APR from Citizens Bank, N.A.
                    or Apple Card Monthly Installments (ACMI), subject to credit approval and credit limit.
                    Taxes and shipping are not included. See full terms and monthly payments for your preferred device.
                </p>
            </div>

            <div className="border-t border-[#d2d2d7]" />

            {/* Footer Links Grid */}
            <div className="max-w-[980px] mx-auto px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {Object.entries(footerLinks).slice(0, 5).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-xs text-[#424245] hover:underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 pt-3 border-t border-[#d2d2d7]">
                    {Object.entries(footerLinks).slice(5).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-xs text-[#424245] hover:underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-[#d2d2d7]" />

            {/* Copyright & Legal */}
            <div className="max-w-[980px] mx-auto px-6 py-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-xs text-[#86868b]">
                    <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms" className="hover:underline">Terms of Use</Link>
                        <span>|</span>
                        <Link to="/sales" className="hover:underline">Sales and Refunds</Link>
                        <span>|</span>
                        <Link to="/legal" className="hover:underline">Legal</Link>
                        <span>|</span>
                        <Link to="/sitemap" className="hover:underline">Site Map</Link>
                    </div>
                    <p>United States</p>
                </div>
            </div>
        </footer>
    );
}
