'use client';

import { useState } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { PricingItem } from './Products';

interface ProductCardProps {
	product: PricingItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { id, name, description, amount, features } = product;
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		plan: name,
		message: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setIsOpen(false);
		// Add real submission logic here
	};

	return (
		<section className="w-full">
			{id !== 3 && (
				<section className="w-full px-4 lg:p-6 space-y-6">
					<div className="space-y-2">
						<h2 className="text-white font-bold text-3xl">{name}</h2>
						<p className="text-white font-normal text-base">{description}</p>
					</div>

					<div className="flex items-baseline space-x-2">
						<h3 className="text-white font-bold text-5xl">{amount}</h3>
						<p className="text-orange-100 font-normal text-lg">/ monthly</p>
					</div>

					<hr className="h-px bg-neutral-300 border border-gray-300 w-full" />

					<div className="space-y-4">
						{features.map((feature, index) => (
							<div className="flex items-center space-x-3" key={index}>
								<CheckCircleIcon className="w-5 h-5 text-orange-300" />
								<p className="text-white font-normal">{feature}</p>
							</div>
						))}

						<button
							onClick={() => setIsOpen(true)}
							className="cursor-pointer mt-4 w-full h-12 px-8 border border-gray-300 rounded-3xl text-white font-black hover:bg-orange-100 hover:text-zinc-900 transition"
						>
							Purchase
						</button>
					</div>

					{/* Popover */}
					{isOpen && (
						<>
							{/* Overlay */}
							<div
								className="fixed inset-0 bg-black/50 z-40"
								onClick={() => setIsOpen(false)}
							/>

							{/* Popover Panel */}
							<div className="fixed top-0 left-0 h-full w-1/3 bg-zinc-800 shadow-2xl z-50 p-8 overflow-y-auto">
								<div className="flex justify-between items-center mb-6">
									<h2 className="text-xl font-bold text-white">Purchase {formData.plan}</h2>
									<button onClick={() => setIsOpen(false)} className="text-white hover:text-orange-400">
										<XMarkIcon className="w-6 h-6" />
									</button>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="flex flex-col space-y-4">
										<label htmlFor="name" className="text-sm font-medium text-white">Name</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="border border-gray-300 bg-transparent rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
										/>
									</div>

									<div className="flex flex-col space-y-4">
										<label htmlFor="email" className="text-sm font-medium text-white">Email</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="border border-gray-300 bg-transparent rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
										/>
									</div>

									<div className="flex flex-col space-y-4">
										<label htmlFor="plan" className="text-sm font-medium text-white">Plan</label>
										<input
											type="text"
											id="plan"
											name="plan"
											value={formData.plan}
											readOnly
											className="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 text-gray-700 cursor-not-allowed"
										/>
									</div>

									<div className="flex flex-col space-y-4">
										<label htmlFor="message" className="text-sm font-medium text-white">What are your technical needs right now?</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											rows={3}
											className="border border-gray-300 bg-transparent rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
										/>
									</div>

									<div className="flex justify-end space-x-2">
										<button
											type="button"
											onClick={() => setIsOpen(false)}
											className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
										>
											Cancel
										</button>
										<button
											type="submit"
											className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</>
					)}
				</section>
			)}
		</section>
	);
};

export default ProductCard;
