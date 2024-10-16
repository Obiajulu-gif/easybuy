// Import necessary modules and components
import Footer from "./components/Footer";
import Header from "./components/Header";
import SubscriptionSection from "./components/SubscriptionSection";
import "./globals.css";

// Metadata for SEO and page information
export const metadata = {
	title: "EasyBuy - Your Go-To E-commerce Platform",
	description:
		"EasyBuy is the ultimate e-commerce platform to buy and sell products ranging from fashion to electronics and more.",
	openGraph: {
		title: "EasyBuy - Shop Your Favorites",
		description: "Find the best products across various categories at EasyBuy.",
		url: "https://easybuy-rho.vercel.app",
		images: [
			{
				url: "/path-to-your-image.jpg",
				width: 800,
				height: 600,
				alt: "EasyBuy",
			},
		],
	},
	twitter: {
		card: "EasyBuy",
		title: "EasyBuy - Shop Your Favorites",
		description: "Find the best products across various categories at EasyBuy.",
		images: ["/images/easybuylogo.png"],
	},
	icons: {
		icon: "/images/easybuylogo.png",
	},
};

// Dedicated viewport export
export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{/* Header Component */}
				<Header />

				{/* Main Content */}
				<main className="flex-grow">{children}</main>

				{/* Subscription Section */}
				<SubscriptionSection />

				{/* Footer */}
				<Footer />
			</body>
		</html>
	);
}
