// components/Footer.js

import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
          {/* Company Section */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/return-policy" className="hover:underline">Return Policy</Link></li>
            </ul>
          </div>

          {/* Sell Section */}
          <div>
            <h3 className="font-semibold mb-3">Sell</h3>
            <ul>
              <li><Link href="/list-product" className="hover:underline">List Product</Link></li>
              <li><Link href="/seller-verification" className="hover:underline">Sellers Verification</Link></li>
            </ul>
          </div>

          {/* Buy Section */}
          <div>
            <h3 className="font-semibold mb-3">Buy</h3>
            <ul>
              <li><Link href="/signup" className="hover:underline">Sign up</Link></li>
              <li><Link href="/signin" className="hover:underline">Sign in</Link></li>
              <li><Link href="/start-shopping" className="hover:underline">Start Shopping</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul>
              <li><Link href="/categories/fashion" className="hover:underline">Fashion and Apparel</Link></li>
              <li><Link href="/categories/furniture" className="hover:underline">Furnitures</Link></li>
              <li><Link href="/categories/cosmetics" className="hover:underline">Cosmetics</Link></li>
              <li><Link href="/categories/healthcare" className="hover:underline">Healthcare Products</Link></li>
              <li><Link href="/categories/electronics" className="hover:underline">Electronics</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul>
              <li><Link href="/support/complaint" className="hover:underline">Lodge a Complaint</Link></li>
              <li><Link href="/support/email" className="hover:underline">Email Us</Link></li>
              <li><Link href="/support/social" className="hover:underline">Social Support</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold mb-3">Social Media</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/sefrel_tech" className="text-gray-600 hover:text-blue-400" aria-label="Twitter"><FaTwitter size={20} /></Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-700" aria-label="LinkedIn"><FaLinkedin size={20} /></Link>
              <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-600" aria-label="Facebook"><FaFacebook size={20} /></Link>
              <Link href="https://instagram.com/sefrel_tech" className="text-gray-600 hover:text-pink-500" aria-label="Instagram"><FaInstagram size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-xs">
          © 2024 EasyBuy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
