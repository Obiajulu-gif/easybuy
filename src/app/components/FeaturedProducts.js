// components/FeaturedProducts.js

import Image from "next/image";

const FeaturedProducts = () => {
	return (
		<section className="px-6 py-10 hidden md:block">
			<div
				className="max-w-screen-xl mx-auto grid gap-4"
				style={{
					gridTemplateColumns: "repeat(3, 1fr)",
					gridTemplateRows: "repeat(2, auto)",
					gridTemplateAreas: `
						"top top left"
						"down down left"
					`,
				}}
			>
				{/* First Product - Most Popular (Top) */}
				<div
					className="relative rounded-lg overflow-hidden shadow-lg"
					style={{ gridArea: "top" }}
				>
					<Image
						src="/images/ceramics.png" // Replace with your actual image path
						alt="Most Popular"
						width={250}
						height={150}
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<span className="text-white text-3x1 font-semibold">
							Most Popular
						</span>
					</div>
				</div>

				{/* Second Product - Selling 50% off (Down) */}
				<div
					className="relative rounded-lg overflow-hidden shadow-lg"
					style={{ gridArea: "down" }}
				>
					<Image
						src="/images/cosmetics.png" // Replace with your actual image path
						alt="Selling 50% off"
						width={250}
						height={150}
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<span className="text-white text-3x1 font-semibold">
							Selling 50% off
						</span>
					</div>
				</div>

				{/* Third Product - Selling 50% off (Left) */}
				<div
					className="relative rounded-lg overflow-hidden shadow-lg"
					style={{ gridArea: "left" }}
				>
					<Image
						src="/images/cap.png" // Replace with your actual image path
						alt="Selling 50% off"
						width={250}
						height={150}
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<span className="text-white text-3x1 font-semibold">
							Selling 50% off
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
