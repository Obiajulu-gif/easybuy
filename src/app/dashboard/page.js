// src/pages/dashboard.js
"use client"
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import ProfileDetails from "./Profiledetail";
// Import other components for different sections here...

export default function Dashboard() {
	const [activeComponent, setActiveComponent] = useState("profile");

	const renderComponent = () => {
		switch (activeComponent) {
			case "profile":
				return <ProfileDetails />;
			// case "products":
			// 	return <MyProducts />; // Replace with actual component
			// case "orders":
			// 	return <MyOrders />; // Replace with actual component
			// case "reviews":
			// 	return <MyReviews />; // Replace with actual component
			// case "favorites":
			// 	return <MyFavorites />; // Replace with actual component
			default:
				return <ProfileDetails />;
		}
	};

	return (
		<DashboardLayout
			activeMenu={activeComponent}
			setActiveMenu={setActiveComponent}
		>
			{renderComponent()}
		</DashboardLayout>
	);
}
