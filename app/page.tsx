import Cases from "./components/Cases";
import CTA from "./components/CTA";
import CursorAnim from "./components/CursorAnim";
import FallDiv from "./components/FallDiv";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeNav from "./components/HomeNav";
import MobileNav from "./components/MobileNav";
import Principle from "./components/Principle";
import Proposal from "./components/Proposal";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import Head from "next/head";

const Home = () => {
	return (
		<main className="bg-zinc-900 w-full relative">
			<Head>
				<title>Quadplan – Custom Software & Product Design for Startups</title>
				<meta name="description" content="Quadplan is a software design & development studio helping startups and scale‑ups build elegant, scalable digital products—from MVP to launch." />
				<meta property="og:title" content="Quadplan – Custom Software & Product Design for Startups" />
				<meta property="og:description" content="Build better products, faster. Full‑stack design and development tailored for early‑stage teams." />
				<meta property="og:url" content="https://quadplan.co/" />
				<meta property="og:type" content="website" />
				<meta name="keywords" content="software development, product design, MVP, startup design agency, web development, app development, SaaS, UI/UX design" />
				<meta name="author" content="Quadplan" />

				{/* JSON‑LD Schema */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `
						{
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "Organization",
									"name": "Quadplan",
									"url": "https://www.quadplan.co",
									"logo": "https://www.quadplan.co/assets/quadplan.svg",
									"description": "Quadplan is a product-focused software design and development studio helping startups build world-class digital products—from MVP to scale.",
									"foundingDate": "2022-10-21",
									"founder": {
										"@type": "Person",
										"name": "Efe Ojadua"
									},
									"address": {
										"@type": "PostalAddress",
										"addressCountry": "NG"
									},
									"sameAs": [
										"https://www.linkedin.com/company/quadplan",
										"https://twitter.com/thequadplan",
										"https://www.instagram.com/thequadplan",
										"https://github.com/quadplan"
									],
									"contactPoint": {
										"@type": "ContactPoint",
										"telephone": "+234-706-857-2474",
										"contactType": "Customer Support",
										"areaServed": "NG",
										"availableLanguage": ["English"]
									}
								},
								{
									"@type": "WebSite",
									"url": "https://www.quadplan.co",
									"name": "Quadplan – Software Design & Development Studio",
									"potentialAction": {
										"@type": "SearchAction",
										"target": "https://www.quadplan.co/?s={search_term_string}",
										"query-input": "required name=search_term_string"
									}
								}
							]
						}
						`,
					}}
				/>
			</Head>

			<div className="w-full space-y-24 lg:space-y-40 py-8">
				<HomeNav />
				<MobileNav />
				<div className="flex items-center justify-center">
					<Hero />
				</div>
				<Slider />
				<Principle />
				<Showcase />
				<FallDiv />
				<Proposal />
				<Services />
				<Cases />
				<FAQSection />
				<Testimonials />
				<CTA />
				<Footer />
			</div>
			<CursorAnim />
		</main>
	);
};

export default Home;
