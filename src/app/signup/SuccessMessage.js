// src/app/signup/SuccessMessage.js
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import { FaCheckCircle } from "react-icons/fa";

const SuccessMessage = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to dashboard after 3 seconds
		const timer = setTimeout(() => {
			router.push("/");
		}, 3000);

		return () => clearTimeout(timer); // Cleanup the timer
	}, [router]);

	return (
		<div className="flex flex-col items-center justify-center  bg-green-50">
			<FaCheckCircle className="text-green-500 text-6xl mb-4" />
			<h2 className="text-4xl font-extrabold text-green-600 mb-2">Success!</h2>
			<p className="text-lg text-gray-800 mb-4">
				Your account has been verified and is ready to use.
			</p>
			<p className="text-sm text-gray-600 mb-6">
				You will be redirected to the dashboard shortly.
			</p>
			<p className="text-gray-400">Thank you for joining us!</p>
		</div>
	);
};

export default SuccessMessage;
