"use client";

import React, { Fragment } from "react";
import Head from "next/head";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion, easeOut } from "framer-motion";

const homeFaqs = [
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

export default function FAQSection({ faqs = homeFaqs }: any) {
	// Build JSON‑LD for the FAQs
	const faqJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq: any) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer,
			},
		})),
	};

	return (
		<Fragment>
			{/* JSON‑LD ensures Google sees acceptedAnswer even if JS toggles panel */}
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
				/>
			</Head>

			<section
				className="w-full px-4 lg:px-24 mx-auto"
				itemScope
				itemType="https://schema.org/FAQPage"
			>
				<h2 className="text-3xl lg:text-4xl font-bold mb-20">
					Popular Questions
				</h2>
				<div className="space-y-12">
					{faqs.map((faq: any, idx: number) => (
						<Disclosure
							key={idx}
							as="div"
							className="border-b border-gray-700 pb-12"
							itemScope
							itemType="https://schema.org/Question"
							itemProp="mainEntity"
						>
							{({ open }) => (
								<>
									<DisclosureButton className="flex justify-between w-full text-left">
										<span
											className="text-xl lg:text-3xl font-bold"
											itemProp="name"
										>
											{faq.question}
										</span>
										<PlusIcon
											className={`h-6 w-6 transform transition-transform duration-200 ${
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
												style={{
													transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
												}}
												className="mt-8 text-gray-200"
												itemScope
												itemType="https://schema.org/Answer"
												itemProp="acceptedAnswer"
											>
												<p itemProp="text" className="text-base font-normal">
													{faq.answer}
												</p>
											</DisclosurePanel>
										)}
									</AnimatePresence>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</section>
		</Fragment>
	);
}