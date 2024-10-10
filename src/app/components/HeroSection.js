// components/HeroSection.js

const HeroSection = () => {
  return (
		<div
			className="relative h-[80vh] bg-cover bg-center flex items-center"
			style={{
				backgroundImage: `url('/images/hero_page.png')`, // Replace with the path to your image
			}}
		>
			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Text Content */}
			<div className="relative z-10 max-w-screen-xl px-12 text-white">
				<h1 className="text-4xl md:text-5xl font-bold">
					African <span className="text-yellow-300">enriched</span>
				</h1>
				<h2 className="text-4xl md:text-5xl font-bold">
					products in all category
				</h2>
			</div>
		</div>
	);
};

export default HeroSection;
