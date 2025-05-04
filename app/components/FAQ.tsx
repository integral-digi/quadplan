"use client";

import React from "react";
import Head from "next/head";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
	{
		question: "What services does Quadplan offer?",
		answer:
			"We provide product strategy, UX/UI design, and full-stack web & mobile development.",
	},
	{
		question: "How long does an MVP take?",
		answer:
			"Our MVP process typically runs 6–8 weeks, including validation, design, and development.",
	},
	{
		question: "What technologies do you use?",
		answer:
			"We specialize in React, Next.js, Tailwind CSS, Node.js, and serverless architectures.",
	},
	{
		question: "How do I apply for the Founder’s Deal?",
		answer:
			"Fill out the form on our Founder’s Deal page to apply and we will get back to you shortly.",
	},
	{
		question: "How do I book a discovery call?",
		answer:
			"Click the “Book a Free Discovery Call” button in the header or footer and choose a time.",
	},
	{
		question: "What is Quadplan’s pricing model?",
		answer:
			"We offer fixed-price MVP packages or hourly rates for custom engagements—reach out for a quote.",
	},
];

const FAQSection = () => {
	const faqStructuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer,
			},
		})),
	};

	return (
		<>
			{/* ✅ JSON-LD script placed directly in <Head> */}
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqStructuredData),
					}}
				/>
			</Head>

			<section className="w-full px-4 lg:px-24 mx-auto">
				<h2 className="text-3xl lg:text-4xl font-bold text-white mb-20">
					Popular Questions
				</h2>

				<div className="space-y-12">
					{faqs.map((faq, idx) => (
						<Disclosure
							key={idx}
							as="div"
							className="border-b border-gray-700 pb-12"
						>
							{({ open }) => (
								<>
									<DisclosureButton className="flex justify-between w-full text-left">
										<span className="text-xl lg:text-3xl font-bold text-white">
											{faq.question}
										</span>
										<PlusIcon
											className={`h-6 w-6 text-white transform transition-transform duration-200 ${
												open ? "rotate-45" : ""
											}`}
										/>
									</DisclosureButton>
									<AnimatePresence initial={false}>
										{open && (
											<DisclosurePanel
												as={motion.div}
												initial={{ opacity: 0, y: -24 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -24 }}
												className="mt-8 text-gray-200"
											>
												<p className="text-base font-normal">{faq.answer}</p>
											</DisclosurePanel>
										)}
									</AnimatePresence>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</section>
		</>
	);
};

export default FAQSection;