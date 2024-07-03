import AboutSection from "../../components/Home/AboutSection";
import Banner from "../../components/Home/Banner";
import CareSection from "../../components/Home/CareSection";
import ServiceSection from "../../components/Home/ServiceSection";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto overflow-hidden">
            <Banner/>
            <CareSection/>
            <AboutSection/>
            <ServiceSection/>
        </div>
    );
};

export default Home;