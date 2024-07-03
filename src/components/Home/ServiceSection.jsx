import leftImage from "../../assets/XrayImage.png";
import maleDoctor from "../../assets/Doctor.png";
import femaleDoctor from "../../assets/female.png";

const ServiceSection = () => {
  return (
    <section className="px-12">

        {/* top section */}
      <div className="flex  my-32 justify-between items-center">

        {/* Left Part */}
      <div className="w-[500px] h-[355px] space-y-4">
        <button className="px-4 text-[#020043] text-xl font-medium py-2 rounded-full border border-[#343268]">
          Service
        </button>

        <h2 className="text-[#020043] font-semibold text-4xl leading-[54px]">
          Empowering Health, Enriching Lives
        </h2>
        <p className="leading-6">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>

        <div className="mt-6">
          <button className="px-4 text-[#020043] bg-[#FFC637] text-xl font-medium py-2 rounded-xl border ">
            Appointment &#x2197;
          </button>
        </div>
      </div>

      {/* Right part */}

      <div className="relative">
        <div
          className=" bg-center grid w-[568px] place-items-center bg-cover h-[415px] rounded-[48px] "
          style={{
            backgroundImage: `url('${leftImage}')`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* card */}

        <div className="absolute bg-opacity-60 bottom-5 left-6 bg-[#343268] rounded-[18px] pl-[18px] pt-[18px] pr-[18px] text-white w-[321px] h-[144px] ">
          <div className="flex gap-6 items-center">
            <div>
              <h1 className="text-[20px] font-medium mb-5">
                Advanced Technology
              </h1>
              <p className="text-justify text-xs">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>

            <div className="w-[20px] mt-16 h-[20px] flex justify-center items-center p-6 rounded-full bg-[#FFC637]">
              <span className=" text-white text-center font-bold">&#x2197;</span>
            </div>
          </div>
        </div>
      </div>
      </div>

    {/* bottom section */}
      <div className="flex justify-between items-center">
          {/*bottom left  */}

          <div className="relative">
        <div
          className=" bg-center grid w-[568px] place-items-center bg-cover h-[415px] rounded-[48px] "
          style={{
            backgroundImage: `url('${maleDoctor}')`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* card */}

        <div className="absolute bg-opacity-60 bottom-5 left-6 bg-[#343268] rounded-[18px] pl-[18px] pt-[18px] pr-[18px] text-white w-[321px] h-[144px]  ">
          <div className="flex gap-6 items-center">
            <div>
              <h1 className="text-[20px] font-medium mb-5">
              Online Doctor Meet
              </h1>
              <p className="text-justify text-xs">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>

            <div className="w-[30px] mt-16 h-[30px] flex justify-center items-center p-6 rounded-full bg-[#FFC637]">
              <span className=" text-white text-center font-bold">&#x2197;</span>
            </div>
          </div>
        </div>
      </div>
          {/*bottom right  */}

          <div className="relative">
        <div
          className=" bg-center grid w-[568px] place-items-center bg-cover h-[415px] rounded-[48px] "
          style={{
            backgroundImage: `url('${femaleDoctor}')`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* card */}

        <div className="absolute bg-opacity-60 bottom-5 left-6 bg-[#343268] rounded-[18px] pl-[18px] pt-[18px] pr-[18px] text-white w-[321px] h-[144px]  ">
          <div className="flex gap-6 items-center">
            <div>
              <h1 className="text-[20px] font-medium ">
              Consultancy your health
              </h1>
              <p className="text-justify text-xs">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>

            <div className="w-[30px] mt-16 h-[30px] flex justify-center items-center p-6 mr-4 rounded-full bg-[#FFC637]">
              <span className=" text-white text-center font-bold">&#x2197;</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServiceSection;
