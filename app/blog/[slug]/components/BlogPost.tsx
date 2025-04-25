"use client";

import React from "react";
import Image from "next/image";
import { parseMiniMarkup } from "@/utils/contentParser";

interface BlogPostProps {
	thumbnail: string;
	title: string;
	post: string;
	tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({
	thumbnail,
	title,
	post,
	tags,
}) => {
	const htmlContent = parseMiniMarkup(post);

	return (
		<article className="max-w-4xl mx-auto py-4 lg:py-24 px-4 space-y-8">
			{/* Hero Image */}
			{thumbnail && (
				<div className="w-full h-96 relative rounded-xl overflow-hidden">
					<Image
						src={thumbnail}
						alt={title}
						fill
						className="object-cover"
						priority
					/>
				</div>
			)}

			{/* Title */}
			<h1 className="text-3xl lg:text-5xl font-black text-white leading-tight">
				{title}
			</h1>

			{/* Tags */}
			{tags?.length > 0 && (
				<div className="flex flex-wrap gap-3">
					{tags.map((tag, index) => (
						<span
							key={`${tag}-${index}`} 
							className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
						>
							{tag}
						</span>
					))}
				</div>
			)}

			{/* Post Content */}
			<div
				className="prose prose-invert prose-lg text-white max-w-none text-base lg:text-xl font-medium space-y-4"
				dangerouslySetInnerHTML={{ __html: htmlContent }}
			/>
		</article>
	);
};

export default BlogPost;
