// app/electronics/page.js

import Link from "next/link";
import Image from "next/image";

export default function ElectronicsPage() {
  // Electronics products data
  const products = [
    {
      id: 1,
      title: "Motherboard",
      image: "/images/electronics/motherboard.jpg",
      price: "₦200,000",
    },
    {
      id: 2,
      title: "Roland Drumkits",
      image: "/images/electronics/drumkit.jpg",
      price: "₦120,000",
    },
    {
      id: 3,
      title: "Apple Keyboard",
      image: "/images/electronics/keyboard.jpg",
      price: "₦40,000",
    },
    {
      id: 4,
      title: "Microphone",
      image: "/images/electronics/microphone.jpg",
      price: "₦80,000",
    },
    {
      id: 5,
      title: "RED Camera",
      image: "/images/electronics/camera.jpg",
      price: "₦500,000",
    },
  ];

  return (
		<div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{products.map((product) => (
				<Link
					href={`/electronics/${product.id}`}
					key={product.id}
					className="block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
				>
					<div className="relative w-full h-56 rounded-lg overflow-hidden">
						<Image
							src={product.image}
							alt={product.title}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
							quality={100}
						/>
					</div>
					<div className="mt-4">
						<h3 className="text-gray-800 font-semibold">{product.title}</h3>
						<p className="text-lg font-bold mt-2">{product.price}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
