import React from "react";

const BlogPostSkeleton: React.FC = () => {
	return (
		<article className="max-w-4xl mx-auto py-4 lg:py-24 px-4 space-y-8 animate-pulse">
			{/* Hero Image Skeleton */}
			<div className="w-full h-96 bg-zinc-800 rounded-xl" />

			{/* Title Skeleton */}
			<div className="space-y-3">
				<div className="h-6 lg:h-10 w-3/4 bg-zinc-800 rounded" />
				<div className="h-6 lg:h-10 w-1/2 bg-zinc-800 rounded" />
			</div>

			{/* Tags Skeleton */}
			<div className="flex flex-wrap gap-3">
				{Array.from({ length: 3 }).map((_, i) => (
					<span
						key={i}
						className="h-6 w-20 bg-blue-200/30 rounded-full"
					/>
				))}
			</div>

			{/* Post Content Skeleton */}
			<div className="space-y-4">
				{Array.from({ length: 6 }).map((_, i) => (
					<div
						key={i}
						className={`h-4 bg-zinc-800 rounded ${i % 3 === 0 ? "w-5/6" : i % 4 === 0 ? "w-3/4" : "w-full"}`}
					/>
				))}
			</div>
		</article>
	);
};

export default BlogPostSkeleton;
