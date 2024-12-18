import Footer from "../components/home/footer/footer";
import HeroSection from "../components/home/homeFeatures/HeroSection"
import HowToRent from "../components/home/homeFeatures/HowToRent"
import WhyChoose from "../components/home/homeFeatures/WhyChoose"
import About from "../components/home/homeFeatures/About"
import ContactUs from "../components/home/homeFeatures/ContactUs";

function HomePage() {
    return (
        <>
        <HeroSection />
        <HowToRent/>
        <WhyChoose/>
        <About/>
        <ContactUs/>


    
            
            <Footer />
        </>
    );
}

export default HomePage;
