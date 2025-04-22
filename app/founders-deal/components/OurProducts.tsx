import { pricing, PricingItem } from './Products';
import ProductCard from './ProductCard';

const OurProducts: React.FC = () => {
	return (
		<section>
			<section className="bg-zinc-800 lg:flex lg:space-x-16 lg:items-baseline p-4 lg:p-8 lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-3xl w-full">
				{pricing.map((single: PricingItem) => (
					<ProductCard key={single.id} product={single} />
				))}
			</section>
		</section>
	)
}

export default OurProducts;