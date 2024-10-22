// app/electronics/[id]/page.js

import Image from "next/image";
import { notFound } from "next/navigation"; // Use this for handling product not found

// Dummy product data (you can replace this with actual API calls or dynamic imports)
const products = [
	{
		id: 1,
		title: "Motherboard",
		image: "/images/electronics/motherboard.jpg",
		price: "₦200,000",
		description: "High-end motherboard for gaming",
		shippingInfo: ["Ships within 3-5 days"],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 7 days",
	},
	{
		id: 2,
		title: "Roland Drumkit",
		image: "/images/electronics/drumkit.jpg",
		price: "₦120,000",
		description: "Professional electronic drumkit",
		shippingInfo: ["Ships within 3-5 days"],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 7 days",
	},
	{
		id: 3,
		title: "Apple Keyboard",
		image: "/images/electronics/keyboard.jpg",
		price: "₦40,000",
		description: "Sleek Apple wireless keyboard",
		shippingInfo: ["Ships within 3-5 days"],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 7 days",
	},
	{
		id: 4,
		title: "Microphone",
		image: "/images/electronics/microphone.jpg",
		price: "₦80,000",
		description: "High-fidelity studio microphone",
		shippingInfo: ["Ships within 3-5 days"],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 7 days",
	},
	{
		id: 5,
		title: "RED Camera",
		image: "/images/electronics/camera.jpg",
		price: "₦500,000",
		description: "Professional 4K RED camera",
		shippingInfo: ["Ships within 3-5 days"],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 7 days",
	},
];

export default function ProductDetailPage({ params }) {
	const { id } = params;

	// Find the product by id
	const product = products.find((p) => p.id === parseInt(id));

	// If the product is not found, return a 404 page
	if (!product) {
		return notFound();
	}

	return (
		<div className="max-w-4xl mx-auto p-4 flex flex-wrap bg-gray-50 rounded-lg shadow-lg">
			{/* Product Image */}
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

			{/* Product Details */}
			<div className="w-full md:w-1/2 md:pl-8">
				<h1 className="text-3xl font-bold mb-2">{product.title}</h1>
				<p className="text-xl font-bold text-orange-600 mb-4">
					{product.price}
				</p>
				<p className="text-gray-600 mb-4">{product.description}</p>

				<button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">
					Add to cart
				</button>

				<div className="mt-6">
					<h3 className="font-bold">Shipping Information</h3>
					<p className="text-gray-600 text-sm">{product.shippingInfo}</p>
				</div>

				<div className="mt-4">
					<h3 className="font-bold">Payment Information</h3>
					<p className="text-gray-600 text-sm">{product.paymentInfo}</p>
				</div>

				<div className="mt-4">
					<h3 className="font-bold">Return Information</h3>
					<p className="text-gray-600 text-sm">{product.returnInfo}</p>
				</div>
			</div>
		</div>
	);
}
