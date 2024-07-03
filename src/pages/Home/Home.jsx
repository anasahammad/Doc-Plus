import AboutSection from "../../components/Home/AboutSection";
import Banner from "../../components/Home/Banner";
import CareSection from "../../components/Home/CareSection";
import FaqSection from "../../components/Home/FaqSection";
import ServiceSection from "../../components/Home/ServiceSection";
import TestimonialSec from "../../components/Home/TestimonialSec";
import VoucherCard from "../../components/Home/VoucherCard";




const Home = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Banner/>
            <CareSection/>
            <AboutSection/>
            <ServiceSection/>
            <TestimonialSec/>
            <FaqSection/>
            <VoucherCard/>
        </div>
    );
};

export default Home;