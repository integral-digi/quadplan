"use client";
import { useRef, useState, Fragment, createElement } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, MapPinIcon, PhoneIcon, ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

const contactItems = {
	title: "Contact Information",
	subtitle: "We always respond within a few hours",
	info: [
		{ id: 1, name: "+234 70 685 72474", icon: PhoneIcon },
		{ id: 2, name: "hello@quadplan.co", icon: EnvelopeIcon },
		{ id: 3, name: "Lagos, Nigeria", icon: MapPinIcon }
	],
	note: "Will you require us to sign an NDA?"
};

const budgetRanges = [
	{ id: 1, label: "Less than $5,000" },
	{ id: 2, label: "$5,000 - $10,000" },
	{ id: 3, label: "$10,000 - $20,000" },
	{ id: 4, label: "$20,000+" }
];

const ContactForm = () => {
	const [selectedBudget, setSelectedBudget] = useState(budgetRanges[0]);
	const [isSent, setIsSent] = useState(false);
	const formRef = useRef(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_ilp0l28", 
			"template_22zyseu", 
			formRef.current!,
			"G9JSHAx0gA7m-ixIQ" 
		).then(
			() => setIsSent(true),
			(error) => alert("Failed to send message: " + error.text)
		);
	};

	return (
		<div className="w-full rounded-2xl h-full bg-stone-900 overflow-clip">
			<div className="flex w-full rounded-2xl h-full">
				{/* Left Panel */}
				<div className="w-1/2 bg-red-500 p-12 min-h-[640px] relative overflow-clip">
					<div className="space-y-32">
						<div className="space-y-4">
							<h3 className="text-white text-3xl font-bold">{contactItems.title}</h3>
							<p className="text-white text-sm">{contactItems.subtitle}</p>
						</div>
						<div className="space-y-12">
							{contactItems.info.map(item => (
								<div className="flex items-center space-x-3" key={item.id}>
									<div className="w-6 h-6 text-white">
										{createElement(item.icon)}
									</div>
									<p className="text-white text-lg">{item.name}</p>
								</div>
							))}
						</div>
					</div>
					<img
						src="/assets/accent.svg"
						alt="decorative circles"
						className="absolute -bottom-4 -right-4 h-32 w-auto"
					/>
				</div>

				{/* Right Panel */}
				<form ref={formRef} onSubmit={handleSubmit} className="w-1/2 p-12 space-y-8 relative">
					{/* Name & Email */}
					<div className="flex space-x-8">
						<fieldset className="w-1/2 space-y-2">
							<label className="block text-white text-sm">Full Name</label>
							<input
								type="text"
								name="user_name"
								required
								className="mt-2 w-full h-12 px-4 bg-transparent border border-white/5 rounded-md"
								placeholder="John Doe"
							/>
						</fieldset>
						<fieldset className="w-1/2 space-y-2">
							<label className="block text-white text-sm">Email Address</label>
							<input
								type="email"
								name="user_email"
								required
								className="mt-2 w-full h-12 px-4 bg-transparent border border-white/5 rounded-md"
								placeholder="johndoe@example.com"
							/>
						</fieldset>
					</div>

					{/* Phone & Budget */}
					<div className="flex space-x-8 items-center">
						<fieldset className="w-1/2 space-y-2">
							<label className="block text-white text-sm">Phone Number</label>
							<input
								type="tel"
								name="user_phone"
								className="mt-2 w-full h-12 px-4 bg-transparent border border-white/5 rounded-md"
								placeholder="+1 123 456 7890"
							/>
						</fieldset>

						<fieldset className="w-1/2 space-y-2">
							<label className="block text-white text-sm">Budget</label>
							<input
								type="hidden"
								name="user_budget"
								value={selectedBudget.label}
							/>
							<Listbox value={selectedBudget} onChange={setSelectedBudget}>
								<div className="relative mt-4">
									<ListboxButton className="relative w-full h-12 pl-4 pr-10 text-left bg-transparent border border-white/5 rounded-md cursor-pointer">
										<span className="block truncate text-white">{selectedBudget.label}</span>
										<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
											<ChevronUpDownIcon className="w-5 h-5 text-white/60" />
										</span>
									</ListboxButton>
									<Transition
										as={Fragment}
										leave="transition ease-in duration-100"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-stone-800 border border-white/10 rounded-md p-2 text-base focus:outline-none">
											{budgetRanges.map(range => (
												<ListboxOption key={range.id} value={range}>
													{({ selected, focus }) => (
														<>
															<span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate text-white`}>
																{range.label}
															</span>
															{selected && (
																<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/60">
																	<CheckIcon className="w-5 h-5" />
																</span>
															)}
														</>
													)}
												</ListboxOption>
											))}
										</ListboxOptions>
									</Transition>
								</div>
							</Listbox>
						</fieldset>
					</div>

					{/* Project Description */}
					<div className="space-y-2">
						<label className="block text-white text-sm">Project Description</label>
						<textarea
							name="message"
							required
							className="mt-2 w-full h-32 px-4 py-2 bg-transparent border border-white/5 rounded-md resize-none text-white"
						/>
					</div>

					{/* NDA Checkbox & Submit */}
					<div className="space-y-6">
						<div className="flex items-center space-x-3">
							<input type="checkbox" name="needs_nda" className="h-4 w-4 text-red-500" />
							<span className="text-white text-base">{contactItems.note}</span>
						</div>

						<motion.button
							type="submit"
							className="flex items-center justify-center w-fit h-12 px-4 pr-2 bg-white border border-white rounded-full cursor-pointer"
							whileHover={{
								background: 'linear-gradient(0deg, rgba(0,56,255,0.02) 0%, rgba(0,56,255,0.02) 100%), #EF4136',
								scale: 1.01,
								transition: { duration: 0.3 }
							}}
						>
							<span className="text-stone-900 text-base font-bold mr-4">
								{isSent ? "Sent!" : "Send Message"}
							</span>
							<div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
								<ArrowUpRightIcon className="w-4 h-4 text-white" />
							</div>
						</motion.button>

						<img
							src="/assets/mail-sent.svg"
							alt="paper plane"
							className="absolute -bottom-12 left-72 h-32 w-auto"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
