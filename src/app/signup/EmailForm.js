// components/EmailForm.js
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import Link from "next/link";

const EmailForm = ({ onContinue }) => (
	<>
		{/* Form Container */}
		<div className="bg-white p-8 rounded-lg w-full max-w-md">
			<h2 className="text-2xl font-bold mb-2 text-center">
				Be a family today!
			</h2>
			<p className="text-gray-600 mb-6 text-center">
				Create an account with us to get started
			</p>

			{/* Email Form */}
			<form
				className="space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
					onContinue();
				}}
			>
				<input
					type="email"
					placeholder="Email Address"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
				/>
				<button
					type="submit"
					className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
				>
					Continue
				</button>
			</form>

			{/* Social Login Buttons */}
			<div className="w-full mt-4 space-y-4">
				<button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
					<FaFacebookF className="mr-2" /> Continue with Facebook
				</button>
				<button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
					<FaGoogle className="mr-2" /> Continue with Google
				</button>
				<button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
					<FaApple className="mr-2" /> Continue with Apple
				</button>
			</div>

			{/* Terms and Conditions */}
			<p className="text-xs text-gray-500 text-center mt-4">
				By continuing, you agree to our{" "}
				<Link href="/terms" className="text-orange-500 hover:underline">
					terms and conditions
				</Link>{" "}
				and{" "}
				<Link
					href="/privacy-policy"
					className="text-orange-500 hover:underline"
				>
					privacy policy
				</Link>
				.
			</p>

			{/* Sign In Link */}
			<p className="text-center mt-4 text-gray-600">
				Already have an account?{" "}
				<Link
					href="/signin"
					className="text-orange-500 font-semibold hover:underline"
				>
					Sign in
				</Link>
			</p>
		</div>
		{/* <h2 className="text-2xl font-bold mb-2">Be a family today!</h2>
		<p className="text-gray-600 mb-6">Create an account with us to get started</p>
		<form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
			<input
				type="email"
				placeholder="Email Address"
				className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
			/>
			<button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
				Continue
			</button>
		</form>
		<p className="text-xs text-gray-500 text-center mt-4">
			By continuing, you agree to our
			<Link href="/terms" className="text-orange-500 ml-1">terms</Link> and 
			<Link href="/privacy-policy" className="text-orange-500 ml-1">privacy policy</Link>.
		</p> */}
	</>
);

export default EmailForm;
