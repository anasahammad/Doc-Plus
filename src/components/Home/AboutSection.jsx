import leftImage from "../../assets/about.png"

const AboutSection = () => {
    return (
        <section className="flex flex-col  lg:flex-row  my-32 justify-between items-center">
            {/* Left Part */}
            <div className="lg:w-[470px] h-[355px] space-y-4">
            <button className="px-4 hover:bg-[#FFC637] hover:text-white hover:border-white transition-all duration-700 text-[#020043] text-xl font-medium py-2 rounded-full border border-[#343268]">
            Who we are
          </button>

          <h2 className="text-[#020043] font-semibold text-4xl leading-[54px]">We Help To Get <br /> Soultions</h2>
          <p className="leading-6">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
          </p>

          <div className="mt-6">
          <button className="px-4 hover:bg-transparent hover:border-[#020043] transition-all duration-700 text-[#020043] bg-[#FFC637] text-xl font-medium py-2 rounded-xl border ">
            Learn more &#x2197;
          </button>
          </div>
            </div>

            {/* Right part */}

            <div className="lg:relative">
            <div
  className=" bg-center  grid lg:w-[568px] place-items-center bg-cover h-[415px] rounded-[48px] "
  style={{
    backgroundImage: `url('${leftImage}')`, backgroundRepeat: "no-repeat" 
  }}>
  
  
</div>

{/* card */}

<div className="lg:absolute -bottom-5 lg:-left-32 bg-[#343268] rounded-[36px] pl-[30px] pt-[47px] pr-[18px] text-white lg:w-[395px] h-[210px] ">
  <h1 className=" lg:text-[26px] font-medium mb-5">Our mission is simple</h1>
  <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
</div>
            </div>
        </section>
    );
};

export default AboutSection;