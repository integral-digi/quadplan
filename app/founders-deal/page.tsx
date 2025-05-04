// app/founders-deal/page.tsx

"use client";

import Head from "next/head";
import FAQSection from "../components/FAQ";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import Hero from "./components/Hero";
import InvestSection from "./components/Invest";
import Offer from "./components/Offer";
import OurProductFade from "./components/OurProductFade";
import OurProducts from "./components/OurProducts";
import MobileNav from "../components/MobileNav";
import Showcase from "../components/Showcase";

const FounderHome = () => {
	const pageUrl = "https://quadplan.co/founders-deal";
	const ogImage = "https://quadplan.co/assets/twitter-img.png";

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				"@id": `${pageUrl}#foundersDeal`,
				"name": "Founder’s Deal – CTO Subscription",
				"serviceType": "Fractional CTO Subscription",
				"provider": {
					"@type": "Organization",
					"name": "Quadplan",
					"url": "https://quadplan.co"
				},
				"description": "Get on‑demand CTO expertise—strategy, architecture, feature builds, bug fixes—through a predictable monthly subscription."
			},
			{
				"@type": "Service",
				"@id": `${pageUrl}#equityBuild`,
				"name": "Equity-for-Build Program",
				"serviceType": "MVP Build in Exchange for Equity",
				"provider": {
					"@type": "Organization",
					"name": "Quadplan",
					"url": "https://quadplan.co"
				},
				"description": "Pitch your startup idea and, if accepted, we build your MVP in exchange for equity or a blended cash+equity model."
			},
			{
				"@type": "WebPage",
				"@id": `${pageUrl}#webpage`,
				"url": pageUrl,
				"name": "Founder’s Deal & Equity-for-Build | Quadplan",
				"description": "Explore Quadplan’s Founder’s Deal for fractional CTO support, or apply to our Equity-for-Build program to get your MVP built in exchange for equity."
			}
		]
	};

	return (
		<>
			<Head>
				<title>
					Founder’s Deal | Fractional CTO Subscription & Equity-for-Build | Quadplan
				</title>
				<meta
					name="description"
					content="Empower your startup with Quadplan’s Founder’s Deal: on‑demand CTO expertise for a monthly fee. Or apply to our Equity-for-Build program to get your MVP built in exchange for equity or a blended cash + equity model."
				/>
				<meta
					name="keywords"
					content="fractional CTO, CTO subscription, startup CTO, equity build, MVP equity, on-demand CTO, Quadplan Founder’s Deal"
				/>
				<meta property="og:title" content="Founder’s Deal & Equity-for-Build | Quadplan" />
				<meta
					property="og:description"
					content="Fractional CTO services for a monthly subscription + MVP build in exchange for equity. Learn more and apply now."
				/>
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Founder’s Deal & Equity-for-Build | Quadplan" />
				<meta
					name="twitter:description"
					content="Fractional CTO services for a monthly subscription + MVP build in exchange for equity. Learn more and apply now."
				/>
				<meta name="twitter:image" content={ogImage} />

				{/* Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			<div className="w-full space-y-16 lg:space-y-32 py-12 bg-zinc-900">
				<HomeNav />
				<MobileNav />
				<Hero />
				<Showcase />
				<section className="flex flex-col space-y-16 lg:flex-row items-center xl:-space-x-72 w-full px-4 lg:px-24">
					<section className="space-y-16 w-full">
						<OurProducts />
					</section>
					<section className="w-full lg:w-1/3">
						<OurProductFade />
					</section>
				</section>
				<InvestSection />
				<FAQSection />
				<Offer />
				<Footer />
			</div>
		</>
	);
};

export default FounderHome;
