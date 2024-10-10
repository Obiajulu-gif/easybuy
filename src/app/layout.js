// Import necessary modules and components
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SubscriptionSection from "./components/SubscriptionSection";
import "./globals.css";

// Load custom fonts with specified weights
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

// Metadata for SEO and page information
export const metadata = {
	title: "EasyBuy - Your Go-To E-commerce Platform",
	description:
		"EasyBuy is the ultimate e-commerce platform to buy and sell products ranging from fashion to electronics and more.",
	openGraph: {
		title: "EasyBuy - Shop Your Favorites",
		description: "Find the best products across various categories at EasyBuy.",
		url: "https://yourwebsite.com",
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
		card: "summary_large_image",
		title: "EasyBuy - Shop Your Favorites",
		description: "Find the best products across various categories at EasyBuy.",
		images: ["/path-to-your-image.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
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
