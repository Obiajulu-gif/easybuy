// components/BusinessVerification.js
"use client";
import { useState } from "react";

const BusinessVerification = ({ onContinue }) => {
	const [selectedOption, setSelectedOption] = useState(
		"Certificate of Company Registration"
	);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg">
			<h2 className="text-2xl font-bold mb-2 text-center">
				Business verification
			</h2>
			<p className="text-gray-600 mb-6 text-center">
				We ensure sellers who choose to sell on our platform are verified for
				safety reasons
			</p>

			<form
				className="w-full space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
					onContinue();
				}}
			>
				<div className="space-y-2">
					<label className="w-full p-3 border border-gray-300 rounded-lg flex items-center hover:border-orange-500 transition-colors">
						<input
							type="radio"
							value="Certificate of Company Registration"
							checked={selectedOption === "Certificate of Company Registration"}
							onChange={handleOptionChange}
							className="mr-2"
						/>
						Certificate of Company Registration
					</label>

					<label className="w-full p-3 border border-gray-300 rounded-lg flex items-center hover:border-orange-500 transition-colors">
						<input
							type="radio"
							value="International Passport"
							checked={selectedOption === "International Passport"}
							onChange={handleOptionChange}
							className="mr-2"
						/>
						International Passport
					</label>

					<label className="w-full p-3 border border-gray-300 rounded-lg flex items-center hover:border-orange-500 transition-colors">
						<input
							type="radio"
							value="National Identification"
							checked={selectedOption === "National Identification"}
							onChange={handleOptionChange}
							className="mr-2"
						/>
						National Identification
					</label>

					<label className="w-full p-3 border border-gray-300 rounded-lg flex items-center hover:border-orange-500 transition-colors">
						<input
							type="radio"
							value="Driver's License"
							checked={selectedOption === "Driver's License"}
							onChange={handleOptionChange}
							className="mr-2"
						/>
						Driver's License
					</label>
				</div>

				<button
					type="button"
					onClick={onContinue}
					className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors mt-4"
				>
					Continue
				</button>
			</form>
		</div>
	);
};

export default BusinessVerification;
