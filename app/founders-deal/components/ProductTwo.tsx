
import {  pricing, PricingItem } from "./Products";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ProductsTwo: React.FC = () => {
	return (
		<section className="w-full">
			<section className="w-full flex items-center p-4 lg:p-12 rounded-tl-3xl rounded-bl-3xl space-y-12">
				{pricing.map((single: PricingItem) => (
					<section key={single.id} className="space-y-3 w-full">
						{ single.id === 1 || single.id === 2 &&
							<>
								<section className="space-y-3">
									<h2 className="text-white font-bold text-3xl">
										{single.name}
									</h2>
									<p className="text-white font-normal">
										{single.description}
									</p>
								</section>
								<section className="flex items-baseline space-x-2">
									<h2 className="text-white font-bold text-5xl">
										{single.amount}
									</h2>
									<p className="text-orange-100 font-normal">
										/ monthly
									</p>
								</section>
								<hr className="w-72 h-0.5 bg-neutral-300" />
								<section className="space-y-6">
									{single.features.map((feature: string, index: number) => (
										<section className="flex items-center space-x-4 space-y-4" key={index}>
											<CheckCircleIcon className="w-4 h-4 text-zinc-900" />
											<p className="text-white font-normal">{feature}</p>
										</section>
									))}
									<button className="justify-around border border-white rounded-3xl h-12 px-8">
										<p className="text-white text-base font-black hover:bg-orange-100 hover:text-gray-900">Purchase</p>
									</button>
								</section>
							</>
						}
					</section>
				))}
			</section>
		</section>
	)
}

export default ProductsTwo;
