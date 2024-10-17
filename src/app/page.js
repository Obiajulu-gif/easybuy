import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductGrid from "./components/ProductGrid";
import SubscriptionSection from "./components/SubscriptionSection";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<FeaturedProducts />
			<ProductGrid />
			<SubscriptionSection />
		</main>
	);
}
