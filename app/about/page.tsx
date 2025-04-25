"use client";

import Head from "next/head";
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";
import Hero from "./components/Hero";
import CTA from "../components/CTA";
import Pillars from "./components/Main";
import MobileNav from "../components/MobileNav";

const SITE_NAME = "Quadplan";
const BASE_URL = "https://www.quadplan.co"; 

const AboutHome = () => {
    const title = `About Us | ${SITE_NAME}`;
    const description = "Get to know Quadplan – a digital product studio built for bold brands. Learn about our mission, principles, and what sets us apart in design and development.";
    const pageUrl = `${BASE_URL}/about`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={pageUrl} />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${BASE_URL}/images/twitter-img.jpg`} />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${BASE_URL}/images/twitter-img.jpg`} />

                {/* Theme */}
                <meta name="theme-color" content="#EF4136" />

                {/* Structured Data (JSON-LD) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            name: title,
                            description,
                            url: pageUrl,
                            publisher: {
                                "@type": "Organization",
                                name: SITE_NAME,
                                url: BASE_URL,
                                logo: {
                                    "@type": "ImageObject",
                                    url: `${BASE_URL}/quadplan.svg`,
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <div className="w-full bg-zinc-900">
                <div className="w-full space-y-32 py-12">
                    <HomeNav />
                    <MobileNav />
                    <Hero />
                    <Pillars />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default AboutHome;
