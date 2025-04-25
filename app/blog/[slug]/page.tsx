"use client"
import { useParams } from "next/navigation";
import BlogPost from "./components/BlogPost";
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";
import { useContent } from "@/app/context/ContentContext";
import MobileNav from "@/app/components/MobileNav";
import CTA from "@/app/components/CTA";
import Head from "next/head";
import BlogPostSkeleton from "./components/BlogSkeleton";

const ContentHome = () => {
	const params = useParams();
	const slug = params?.slug ? String(params.slug) : undefined;

	const content = useContent();

	if (!content || !content.items) {
		return <section className="w-full bgzinc-900 h-full"><BlogPostSkeleton /></section>;
	}

	const { items } = content;
	const post = items.find((p: any) => p.slug.toLowerCase() === slug?.toLowerCase());

	// Extract preview text (for meta description)
	const plainText = post?.post.replace(/::[a-z]+::/g, "").slice(0, 160);

	const siteUrl = "https://www.quadplan.co"; 
	const fullUrl = `${siteUrl}/blog/${slug}`;

	return (
		<div className="w-full py-12 space-y-16 bg-zinc-900">
			{post && (
				<Head>
					<title>{post.title} | Your Blog Name</title>
					<meta name="description" content={plainText} />
					<link rel="canonical" href={fullUrl} />

					{/* Open Graph Meta Tags */}
					<meta property="og:title" content={post.title} />
					<meta property="og:description" content={plainText} />
					<meta property="og:image" content={post.thumbnail || "/images/blog/blog-img.jpg"} />
					<meta property="og:url" content={fullUrl} />
					<meta property="og:type" content="article" />

					{/* Twitter Meta Tags */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={post.title} />
					<meta name="twitter:description" content={plainText} />
					<meta name="twitter:image" content={post.thumbnail || "//images/blog/blog-img.jpg"} />

					{/* Article Structured Data (JSON-LD) */}
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								"@context": "https://schema.org",
								"@type": "BlogPosting",
								headline: post.title,
								description: plainText,
								image: post.thumbnail || `${siteUrl}/images/blog/blog-img.jpg`,
								url: fullUrl,
								datePublished: post.date || new Date().toISOString(),
								author: {
									"@type": "Person",
									name: "Quadplan",
								},
							}),
						}}
					/>
				</Head>
			)}

			<HomeNav />
			<MobileNav />
			{post ? (
				<BlogPost
					thumbnail={post.thumbnail}
					title={post.title}
					post={post.post}
					tags={post.tags}
				/>
			) : (
				<section className="text-white py-20 text-center text-lg">Post not found</section>
			)}
			<CTA />
			<Footer />
		</div>
	);
};

export default ContentHome;
