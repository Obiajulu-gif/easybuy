// app/groceries/page.js
import Link from "next/link";
import Image from "next/image";

// Dummy product data for groceries
const groceries = [
	{
		id: 1,
		title: "Apple",
		image: "/images/groceries/apple.jpg",
		price: "₦200 per piece",
		description: "Fresh and organic apple, perfect for a healthy snack.",
	},
	{
		id: 2,
		title: "Breakfast Combo",
		image: "/images/groceries/breakfast.jpg",
		price: "₦1,500",
		description:
			"A healthy and delicious breakfast combo to kickstart your day.",
	},
	{
		id: 3,
		title: "Fresh Vegetables",
		image: "/images/groceries/vegatable.jpg",
		price: "₦500 per kg",
		description: "A variety of fresh and organic vegetables for your meals.",
	},
	{
		id: 4,
		title: "Fruit Collection",
		image: "/images/groceries/collection.jpg",
		price: "₦3,000",
		description:
			"A colorful assortment of seasonal fruits for a balanced diet.",
	},
	{
		id: 5,
		title: "Bell Peppers",
		image: "/images/groceries/pepper.jpg",
		price: "₦400 per kg",
		description: "Fresh and crispy red and yellow bell peppers.",
	},
];

export default function GroceriesPage() {
	return (
		<div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{groceries.map((grocery) => (
				<Link
					href={`/groceries/${grocery.id}`}
					key={grocery.id}
					className="block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
				>
					<div className="relative w-full h-56 rounded-lg overflow-hidden">
						<Image
							src={grocery.image}
							alt={grocery.title}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
							quality={100}
						/>
					</div>
					<div className="mt-4">
						<h3 className="text-gray-800 font-semibold">{grocery.title}</h3>
						<p className="text-lg font-bold mt-2">{grocery.price}</p>
						<p className="text-gray-600 mt-2">{grocery.description}</p>
					</div>
				</Link>
			))}
		</div>
	);
}