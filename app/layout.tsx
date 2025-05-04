import type { Metadata } from "next";
import "./globals.css";
import { ContentProvider } from "./context/ContentContext";
import Script from "next/script";
import { ChaportChat } from "./components/Chaport";

export const metadata: Metadata = {
	title: "Quadplan - Custom Software & Product Design for Ambitious Startups",
	description: "We help startups build better products, faster. Full-stack design & development tailored to early-stage teams.",
};

const ogImage = "/images/twitter-img.png"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Open Graph */}
				<meta property="og:title" content="Quadplan – Custom Software & Product Design for Startups" />
				<meta property="og:description" content="Build better products, faster. Full‑stack design and development tailored for early‑stage teams." />
				<meta property="og:url" content="https://www.quadplan.co/" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Quadplan – Custom Software & Product Design for Startups" />
				<meta name="twitter:description" content="Build better products, faster. Full‑stack design and development tailored for early‑stage teams." />
				<meta name="twitter:image" content={ogImage} />
				
				{/* Google Analytics */}
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-7PSYCDW5LG"
				/>
				<Script
					id="gtag-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-7PSYCDW5LG');
						`,
					}}
				/>
			</head>
			<body
				className="w-full bg-zinc-900 text-white"
			>
				<ContentProvider>
					{children}
					{/* <ChaportChat /> */}
				</ContentProvider>
			</body>
		</html>
	);
}
