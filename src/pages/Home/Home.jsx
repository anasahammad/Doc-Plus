import AboutSection from "../../components/Home/AboutSection";
import Banner from "../../components/Home/Banner";
import CareSection from "../../components/Home/CareSection";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto overflow-hidden">
            <Banner/>
            <CareSection/>
            <AboutSection/>
        </div>
    );
};

export default Home;