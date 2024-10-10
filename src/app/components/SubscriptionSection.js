// components/SubscriptionSection.js

import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

const SubscriptionSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Subscription Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Join over 100+ subscribers</h2>
          <p className="text-gray-600 mb-6">
            Subscribe and receive our monthly newsletter with updates on our products, services, and offers.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full lg:w-auto"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Mobile Preview Section */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-4">
            <Image
              src="/images/iPhone1.png" // Replace with your actual image path
              alt="Mobile preview 1"
              width={150}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/iPhone2.png" // Replace with your actual image path
              alt="Mobile preview 2"
              width={150}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* App Store Links Section */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold mb-4">Coming Soon!!!</h3>
          <p className="text-gray-600 mb-6">Our mobile app is coming soon to App Store and Play Store.</p>
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <a
              href="#"
              className="flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
            >
              <FaApple className="mr-2" /> On App Store
            </a>
            <a
              href="#"
              className="flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
            >
              <FaGooglePlay className="mr-2" /> On Play Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
