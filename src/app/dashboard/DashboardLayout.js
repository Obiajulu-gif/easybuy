// src/components/DashboardLayout.js
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState("profile");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const menuItems = [
		{ id: "profile", label: "My Profile Details" },
		{ id: "products", label: "My Products" },
		{ id: "orders", label: "My Orders" },
		{ id: "reviews", label: "My Reviews" },
		{ id: "favorites", label: "My Favourites" },
	];

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* Mobile Menu Toggle Button */}
			<button
				onClick={toggleSidebar}
				className="lg:hidden fixed top-4 left-4 z-20 bg-orange-500 text-white p-2 rounded-lg focus:outline-none"
			>
				{isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
			</button>

			{/* Sidebar */}
			<aside
				className={`fixed lg:relative z-10 inset-y-0 left-0 w-64 bg-white shadow-lg p-4 transition-transform transform lg:translate-x-0 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 lg:block`}
			>
				<h2 className="text-xl font-bold mb-4">My Account</h2>
				<ul>
					{menuItems.map((item) => (
						<li key={item.id} className="mb-2">
							<button
								onClick={() => {
									setActiveMenu(item.id);
									setIsSidebarOpen(false); // Close sidebar on mobile after selection
								}}
								className={`flex items-center p-2 rounded-lg w-full ${
									activeMenu === item.id ? "bg-orange-200 font-bold" : ""
								}`}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			</aside>

			{/* Overlay when Sidebar is Open on Mobile */}
			{isSidebarOpen && (
				<div
					onClick={toggleSidebar}
					className="fixed inset-0 bg-black opacity-50 lg:hidden z-5"
				></div>
			)}

			{/* Content */}
			<div className="flex-1 p-8 lg:ml-64">
				<div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
