import AboutSection from "../../components/Home/AboutSection";
import Banner from "../../components/Home/Banner";
import CareSection from "../../components/Home/CareSection";
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
        </div>
    );
};

export default Home;