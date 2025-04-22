import { PricingItem } from './Products';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
	product: PricingItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { id, name, description, amount, features } = product;

	return (
		<section className="w-full">
			{product.id !== 3 &&
				<section className="w-full p-6 space-y-6">
					<div className="space-y-2">
						<h2 className="text-white font-bold text-3xl">{name}</h2>
						<p className="text-white font-normal text-base">{description}</p>
					</div>

					<div className="flex items-baseline space-x-2">
						<h3 className="text-white font-bold text-5xl">{amount}</h3>
						<p className="text-orange-100 font-normal text-lg">/ monthly</p>
					</div>

					<hr className="h-px bg-neutral-300 border-none w-full" />

					<div className="space-y-4">
						{features.map((feature, index) => (
							<div className="flex items-center space-x-3" key={index}>
								<CheckCircleIcon className="w-5 h-5 text-orange-300" />
								<p className="text-white font-normal">{feature}</p>
							</div>
						))}

						<button className="mt-4 w-full h-12 px-8 border border-white rounded-3xl text-white font-black hover:bg-orange-100 hover:text-zinc-900 transition">
							Purchase
						</button>
					</div>
				</section>
			}
		</section>
	);
};

export default ProductCard;
