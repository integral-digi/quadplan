import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import MobileNav from "../components/MobileNav";
import Testimonials from "../components/Testimonials";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

const ContactHome = () => {
    return (
        <div className="space-y-40 w-full py-12">
            <HomeNav />
            <MobileNav />
            <div className="px-24 w-full">
                <Hero />
                <ContactForm />
            </div>
            <Testimonials />
            <Footer />
        </div>
    )
}

export default ContactHome;