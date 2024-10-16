// src/components/DashboardLayout.js
"use client"
import Link from "next/link";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("profile");

  const menuItems = [
    { id: "profile", label: "My Profile Details" },
    { id: "products", label: "My Products" },
    { id: "orders", label: "My Orders" },
    { id: "reviews", label: "My Reviews" },
    { id: "favorites", label: "My Favourites" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">My Account</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => setActiveMenu(item.id)}
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

      {/* Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
