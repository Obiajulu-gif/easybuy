// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn, MdComputer } from "react-icons/md";
import { FiShoppingCart, FiHelpCircle, FiUser } from "react-icons/fi";
import {
	FaTshirt,
	FaHome,
	FaGamepad,
	FaUtensils,
	FaShoppingCart,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-orange-500 shadow-lg text-white">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
				{/* Logo and Website Name */}
				<Link href="/" className="flex items-center">
					          <Image
            src="/images/easybuylogo.png" // Replace with actual path to your logo
            alt="EasyBuy Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
					<span className="ml-2 text-xl font-bold">EasyBuy</span>
				</Link>

				{/* Mobile Menu Icon */}
				<button onClick={toggleMenu} className="text-white lg:hidden">
					{isMenuOpen ? (
						<HiX className="w-6 h-6" />
					) : (
						<HiMenu className="w-6 h-6" />
					)}
				</button>

				{/* Desktop View - Full Navigation */}
				<div className="hidden lg:flex flex-1 items-center justify-center space-x-4">
					<div className="flex items-center">
						<MdLocationOn className="mr-1 text-white" />
						<span>Lagos, Nigeria</span>
					</div>
					<input
						type="text"
						placeholder="Search by name, brand or product"
						className="ml-4 px-4 py-2 border border-gray-300 rounded-lg w-1/2 text-gray-800"
					/>
					<Link href="/mycart" className="flex flex-col items-center text-white">
						<FiShoppingCart className="mb-1" /> My Cart
					</Link>
					<Link
						href="/support"
						className="flex flex-col items-center text-white"
					>
						<FiHelpCircle className="mb-1" /> Help and Support
					</Link>
					<Link
						href="/signup"
						className="flex flex-col items-center text-white"
					>
						<FiUser className="mb-1" /> Sign up or Sign In
					</Link>
				</div>
			</div>

			{/* Mobile View - Collapsible Menu */}
			{isMenuOpen && (
				<div className="lg:hidden px-4 py-2 bg-orange-600 text-white space-y-2">
					<Link href="/mycart" className="flex items-center">
						<FiShoppingCart className="mr-1" /> My Cart
					</Link>
					<Link href="/support" className="flex items-center">
						<FiHelpCircle className="mr-1" /> Help and Support
					</Link>
					<Link href="/signup" className="flex items-center">
						<FiUser className="mr-1" /> Sign up or Sign In
					</Link>
					<Link href="/sell" className="flex items-center">
						<FaShoppingCart className="mr-1" /> Start Selling
					</Link>
					<Link href="/categories" className="flex items-center">
						<MdLocationOn className="mr-1" /> All Categories
					</Link>
					<Link href="/fashion" className="flex items-center">
						<FaTshirt className="mr-1" /> Fashion
					</Link>
					<Link href="/electronics" className="flex items-center">
						<MdComputer className="mr-1" /> Electronics
					</Link>
					<Link href="/computing" className="flex items-center">
						<MdComputer className="mr-1" /> Computing
					</Link>
					<Link href="/groceries" className="flex items-center">
						<FaUtensils className="mr-1" /> Groceries
					</Link>
					<Link href="/home-office" className="flex items-center">
						<FaHome className="mr-1" /> Home & Office
					</Link>
					<Link href="/sports" className="flex items-center">
						<FaGamepad className="mr-1" /> Sport & Games
					</Link>
				</div>
			)}

			{/* Secondary Navigation Bar with Category Icons */}
			<div className="hidden lg:flex bg-orange-600 py-2">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-4 text-white">
					<Link href="/sell">Start Selling</Link>
					<Link href="/categories" className="flex items-center">
						<MdLocationOn className="mr-1" /> All Categories
					</Link>
					<Link href="/fashion" className="flex items-center">
						<FaTshirt className="mr-1" /> Fashion
					</Link>
					<Link href="/electronics" className="flex items-center">
						<MdComputer className="mr-1" /> Electronics
					</Link>
					<Link href="/computing" className="flex items-center">
						<MdComputer className="mr-1" /> Computing
					</Link>
					<Link href="/groceries" className="flex items-center">
						<FaUtensils className="mr-1" /> Groceries
					</Link>
					<Link href="/home-office" className="flex items-center">
						<FaHome className="mr-1" /> Home & Office
					</Link>
					<Link href="/sports" className="flex items-center">
						<FaGamepad className="mr-1" /> Sport & Games
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
