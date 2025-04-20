import type { Metadata } from "next";
import "./globals.css";
import { ContentProvider } from "./context/ContentContext";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Quadplan - Custom Software & Product Design for Ambitious Startups",
	description: "We help startups build better products, faster. Full-stack design & development tailored to early-stage teams.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
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
				className="w-full"
			>
				<ContentProvider>
					{children}
				</ContentProvider>
			</body>
		</html>
	);
}
