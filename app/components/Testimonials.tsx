"use client"
import ScrollButton from "./ScrollButton";

const testimonialItems = {
	title: "Testimonials",
	subtitle: "See what our esteemed clients have to say about their experience with Quadplan.",
	singles: [
		{ id: 1, review: "Outstanding designs and diligent work. It's a pleasure to work with Quadplan, really looking forward to our continued work", author: { avatar: "/images/8.jpg", name: "Jordan", company: "Test Ace" } },
		{ id: 2, review: "A star talent. I and my CDO are truly grateful for finding them. Incredible experience throughout, even with a few difficulties on our end. The skill level and attention to detail are next to none, and we thoroughly look forward to working with Quadplan again!", author: { avatar: "/images/3.jpg", name: "Levi", company: "MasteryEcom" } },
		{ id: 1, review: "Quadplan was an asset in the designing and development of our MVP, I look forward to our future collaborations.", author: { avatar: "/images/14.jpg", name: "Elo", company: "Travvelbaby" } }
	]
}

const Testimonials = () => {
	return (
		<div className="w-full">
			<div className="lg:px-24 px-4 space-y-16 relative">
				<div className="space-y-6">
					<h2 className="text-white font-bold text-2xl lg:text-4xl">
						{testimonialItems.title}
					</h2>
					<p className="text-white font-normal text-base">
						{testimonialItems.subtitle}
					</p>
				</div>
				<div className="overflow-x-scroll flex items-center justify-between space-x-6 w-full testimonial-section scrollbar-hide">
					{testimonialItems.singles.map((item)=>(
						<div className="bg-zinc-800/30 rounded-2xl p-6 w-full min-w-96" key={item.id}>
							<div className="space-y-5 w-full">
								<img src="/assets/quote.svg" alt="quote" className="h-8 w-auto" />
								<p className="text-white font-normal text-base">
									{item.review}
								</p>
								<div className="w-full justify-between flex items-center">
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12">
											<img 
												src={item.author.avatar} 
												alt={item.author.name} 
												className="w-full h-full rounded-full object-cover" 
											/>
										</div>
										<div className="space-y-1">
											<p className="text-base lg:text-lg text-white font-normal">
												{item.author.name}
											</p>
											<p className="text-sm lg:text-base text-white font-normal">
												{item.author.company}
											</p>
										</div>
									</div>
									<img
										src="/assets/star.svg"
										alt="rating"
										className="w-auto h-4 lg:h-6"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="relative flex items-center space-x-4">
					<ScrollButton 
						scrollAmount={400} 
						classSelector=".testimonial-section" 
						operator="-" 
					/>
					<ScrollButton 
						scrollAmount={400} 
						classSelector=".testimonial-section" 
						operator="+" 
					/>
				</div>
			</div>
		</div>
	)
}

export default Testimonials;