import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            {/* Hero 1 - Apple Watch Series 11 */}
            <HeroSection
                title="WATCH SERIES 11"
                subtitle="Turn resolutions into routines. Quit quitting your fitness goals."
                primaryLink="/watch"
                primaryText="Learn more"
                secondaryLink="/store"
                secondaryText="Buy"
                image="/images/products/watch-lineup.png"
                backgroundColor="#ffffff"
                textColor="dark"
                fullWidthImage={true}
                showAppleLogo={true}
            />

            {/* Hero 2 - iPhone */}
            <HeroSection
                title="iPhone"
                subtitle="Say hello to the latest generation of iPhone."
                primaryLink="/iphone"
                primaryText="Learn more"
                secondaryLink="/store"
                secondaryText="Shop iPhone"
                image="/images/products/iphone-lineup.png"
                backgroundColor="#f5f5f7"
                textColor="dark"
            />

            {/* Hero 3 - iPad Air */}
            <HeroSection
                title="iPad air"
                subtitle="Now supercharged by the M3 chip."
                primaryLink="/ipad"
                primaryText="Learn more"
                secondaryLink="/store"
                secondaryText="Buy"
                image="/images/products/ipad-air-lineup.png"
                backgroundColor="linear-gradient(to bottom, #e8f4fc, #d4edf8)"
                textColor="dark"
            />

            {/* Product Grid Row 1: MacBook Air + iPad */}
            <ProductGrid className="mt-3">
                <ProductCard
                    title="MacBook Air"
                    subtitle="Sky blue color. Sky high performance with M4."
                    image="/images/products/macbook-air-blue.png"
                    primaryLink="/mac"
                    secondaryLink="/store"
                    backgroundColor="#d6e6f5"
                    textColor="dark"
                    size="half"
                />

                <ProductCard
                    title="iPad"
                    subtitle="Now with the speed of the A16 chip and double the starting storage."
                    image="/images/products/ipad-colorful.png"
                    primaryLink="/ipad"
                    secondaryLink="/store"
                    backgroundColor="#f5f5f7"
                    textColor="dark"
                    size="half"
                />
            </ProductGrid>

            {/* Product Grid Row 2: Watch Ultra + AirPods Pro */}
            <ProductGrid className="mt-3">
                <ProductCard
                    title="Apple Watch Ultra 3"
                    subtitle="Personal beast."
                    image="/images/products/watch-ultra-green.png"
                    primaryLink="/watch"
                    secondaryLink="/store"
                    backgroundColor="#000000"
                    textColor="light"
                    size="half"
                    isNew={true}
                />

                <ProductCard
                    title="AirPods Pro 3"
                    subtitle="The world's best in-ear Active Noise Cancellation."
                    image="/images/products/airpods-pro.png"
                    primaryLink="/airpods"
                    secondaryLink="/store"
                    backgroundColor="#f5f5f7"
                    textColor="dark"
                    size="half"
                    isNew={true}
                />
            </ProductGrid>

            {/* Product Grid Row 3: Trade In + Apple Card */}
            <ProductGrid className="mt-3 mb-6">
                <ProductCard
                    title="Apple Trade In"
                    subtitle="Get up to $180–$650 in credit when you trade in iPhone 13 or higher."
                    image="/images/products/iphone-trio.png"
                    primaryLink="/trade-in"
                    primaryText="Get your estimate"
                    backgroundColor="#f5f5f7"
                    textColor="dark"
                    size="half"
                />

                <ProductCard
                    title="Apple Card"
                    subtitle="Get up to 3% Daily Cash back with every purchase."
                    image="/images/products/apple-card.png"
                    primaryLink="/apple-card"
                    primaryText="Learn more"
                    secondaryLink="/apple-card"
                    secondaryText="Apply now"
                    backgroundColor="#f5f5f7"
                    textColor="dark"
                    size="half"
                />
            </ProductGrid>

            <Footer />
        </main>
    );
}

