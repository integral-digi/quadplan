"use client";

import { useRouter } from "next/navigation";
import { useContent } from "@/app/context/ContentContext";
import EmptyTray from "./ContentTrayEmpty";
import ContentTraySkeleton from "./ContentSkeleton";
import { parseMiniMarkup } from "@/utils/contentParser";

const ContentTray: React.FC = () => {
	const router = useRouter();
	const content = useContent();

	// Loading state
	if (!content) {
		return <ContentTraySkeleton />;
	}

	const { items = [] } = content;

	if (items.length === 0) {
		return (
			<section className="w-full px-4 lg:px-24 pt-8">
				<EmptyTray />
			</section>
		);
	}

	return (
		<div className="w-full space-y-8 pb-12 px-4 lg:px-24">
			<div className="w-full flex flex-wrap gap-8">
				{items.map((item: any) => {
					const htmlPreview = parseMiniMarkup(item.post?.slice(0, 100) || "");
					const tags = item.tags || [];

					return (
						<section
							key={item.id}
							className="cursor-pointer w-full lg:w-[31.7%] min-h-[30rem] h-max border border-sky-200/20 rounded-2xl overflow-hidden hover:bg-[rgba(0,56,255,0.05)] hover:scale-105 transition-transform duration-300"
							onClick={() => router.push(`/blog/${item.slug?.toLowerCase()}`)}
						>
							<div className="p-5 space-y-6">
								{/* Thumbnail */}
								<div className="w-full h-52 overflow-hidden rounded-lg bg-zinc-900">
									<img
										src="/images/blog/blog-img.jpg"
										alt={item.title || "Blog thumbnail"}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Title and Preview */}
								<div className="space-y-4">
									<h3 className="text-2xl font-bold text-white break-words">
										{item.title || "Untitled"}
									</h3>

									<div
										className="text-base font-medium text-white line-clamp-3"
									>
										{item.preview}
									</div>

									{/* Tags */}
									<div className="flex flex-wrap gap-3 pt-2">
										{tags.map((tag: string, index: number) => (
											<span
												key={`${tag}-${index}`}
												className="px-3 py-1 bg-zinc-800/30 rounded-full text-sm font-medium text-white"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</section>
					);
				})}
			</div>
		</div>
	);
};

export default ContentTray;