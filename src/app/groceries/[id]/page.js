// app/groceries/[id]/page.js
import Image from "next/image";

// Dummy product data for groceries
const groceries = [
	{
		id: 1,
		title: "Apple",
		image: "/images/groceries/apple.jpg",
		price: "₦200 per piece",
		description: "Fresh and organic apple, perfect for a healthy snack.",
		shippingInfo: [
			"Ships within 1-2 days",
			"Free delivery for orders over ₦5,000",
		],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 2 days",
	},
	{
		id: 2,
		title: "Breakfast Combo",
		image: "/images/groceries/breakfast.jpg",
		price: "₦1,500",
		description:
			"A healthy and delicious breakfast combo to kickstart your day.",
		shippingInfo: [
			"Ships within 1-2 days",
			"Free delivery for orders over ₦5,000",
		],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 2 days",
	},
	{
		id: 3,
		title: "Fresh Vegetables",
		image: "/images/groceries/vegatable.jpg",
		price: "₦500 per kg",
		description: "A variety of fresh and organic vegetables for your meals.",
		shippingInfo: [
			"Ships within 1-2 days",
			"Free delivery for orders over ₦5,000",
		],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 2 days",
	},
	{
		id: 4,
		title: "Fruit Collection",
		image: "/images/groceries/collection.jpg",
		price: "₦3,000",
		description:
			"A colorful assortment of seasonal fruits for a balanced diet.",
		shippingInfo: [
			"Ships within 1-2 days",
			"Free delivery for orders over ₦5,000",
		],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 2 days",
	},
	{
		id: 5,
		title: "Bell Peppers",
		image: "/images/groceries/pepper.jpg",
		price: "₦400 per kg",
		description: "Fresh and crispy red and yellow bell peppers.",
		shippingInfo: [
			"Ships within 1-2 days",
			"Free delivery for orders over ₦5,000",
		],
		paymentInfo: "Cash on delivery or online payment",
		returnInfo: "Return within 2 days",
	},
];

export default function GroceryDetailPage({ params }) {
	const { id } = params;

	// Find the product using the ID from the URL
	const grocery = groceries.find((g) => g.id === parseInt(id));

	if (!grocery) {
		return <p>Product not found.</p>;
	}

	return (
		<div className="max-w-4xl mx-auto p-4 flex flex-wrap bg-gray-50 rounded-lg shadow-lg">
			{/* Grocery Image */}
			<div className="w-full md:w-1/2 mb-4 md:mb-0">
				<Image
					src={grocery.image}
					alt={grocery.title}
					width={500}
					height={500}
					objectFit="cover"
					className="rounded-lg"
					quality={100}
				/>
			</div>

			{/* Grocery Details */}
			<div className="w-full md:w-1/2 md:pl-8">
				<h1 className="text-3xl font-bold mb-2">{grocery.title}</h1>
				<p className="text-xl font-bold text-orange-600 mb-4">
					{grocery.price}
				</p>
				<p className="text-gray-600 mb-4">{grocery.description}</p>

				<button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">
					Add to cart
				</button>

				{/* Shipping Information */}
				<div className="mt-6">
					<h3 className="font-bold">Shipping Information</h3>
					{grocery.shippingInfo.map((info, index) => (
						<p key={index} className="text-gray-600 text-sm">
							{info}
						</p>
					))}
				</div>

				{/* Payment Information */}
				<div className="mt-4">
					<h3 className="font-bold">Payment Information</h3>
					<p className="text-gray-600 text-sm">{grocery.paymentInfo}</p>
				</div>

				{/* Return Information */}
				<div className="mt-4">
					<h3 className="font-bold">Return Information</h3>
					<p className="text-gray-600 text-sm">{grocery.returnInfo}</p>
				</div>
			</div>
		</div>
	);
}
