// app/fashion/page.js

import Link from "next/link";
import Image from "next/image";
import { products } from "./products"; 

export default function FashionHero() {
	return (
		<div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{products.map((product) => (
				<Link
					href={`/fashion/${product.id}`}
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
