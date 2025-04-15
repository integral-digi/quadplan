import Cases from "./components/Cases";
import CTA from "./components/CTA";
import CursorAnim from "./components/CursorAnim";
import FallDiv from "./components/FallDiv";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeNav from "./components/HomeNav";
import Principle from "./components/Principle";
import Proposal from "./components/Proposal";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";

const Home = () => {
	return (
		<main className="bg-zinc-900 w-full relative">
			<div className="w-full space-y-40 py-8">
				<HomeNav />
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
				<Testimonials />
				<CTA />
				<Footer />
			</div>
			<CursorAnim />
		</main>
	)
}

export default Home;