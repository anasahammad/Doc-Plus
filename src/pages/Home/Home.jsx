import AboutSection from "../../components/Home/AboutSection";
import Banner from "../../components/Home/Banner";
import CareSection from "../../components/Home/CareSection";
import FaqSection from "../../components/Home/FaqSection";
import ServiceSection from "../../components/Home/ServiceSection";
import TestimonialSec from "../../components/Home/TestimonialSec";




const Home = () => {
    return (
        <div className="max-w-7xl mx-auto overflow-hidden">
            <Banner/>
            <CareSection/>
            <AboutSection/>
            <ServiceSection/>
            <TestimonialSec/>
            <FaqSection/>
        </div>
    );
};

export default Home;