// app/computing/[id]/page.js

import Image from "next/image";
import { products } from "../page"; // Adjust path if necessary

export default function ProductDetailPage({ params }) {
	const { id } = params;

	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		return <p>Product not found</p>;
	}

	return (
		<div className="max-w-4xl mx-auto p-4 flex flex-wrap bg-gray-50 rounded-lg shadow-lg">
			<div className="w-full md:w-1/2 mb-4 md:mb-0">
				<Image
					src={product.image}
					alt={product.title}
					width={500}
					height={500}
					objectFit="cover"
					className="rounded-lg"
					quality={100}
				/>
			</div>

			<div className="w-full md:w-1/2 md:pl-8">
				<h1 className="text-3xl font-bold mb-2">{product.title}</h1>
				<p className="text-xl font-bold text-orange-600 mb-4">
					{product.price}
				</p>
				<p className="text-gray-600 mb-4">{product.description}</p>

				<button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">
					Add to cart
				</button>

				{/* Add shipping, payment, and return info here as needed */}
			</div>
		</div>
	);
}
