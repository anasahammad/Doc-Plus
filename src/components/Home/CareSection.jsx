import chartIcon from "../../assets/icons/Group 12.png"
import contactIcon from "../../assets/icons/contract (1) 1.png"
import starIcon from "../../assets/icons/Vector.png"
import mans from "../../assets/icons/Group 7.png"
import coinsIcon from "../../assets/icons/Group.png"
import videoIcon from "../../assets/icons/Group (1).png"

const CareSection = () => {
    return (
        <section className="my-10 ">
            <div className="grid grid-cols-5 gap-5">
                {/* Left Div */}
                <div className="w-[216px] h-[312px] bg-white pt-5 pl-5 pr-12 rounded-3xl">
                    <div className="mb-[23px]">
                        <h1 className="text-[40px] font-semibold text-[#020043]">90%</h1>
                        <p className="leading-[21px]">Patient satisfaction rate, reflecting our commitment.</p>
                        
                    </div>

                    <figure>
                    <img src={chartIcon} alt="" />
                    </figure>
                </div>

                {/* Middle Div */}
                <div className="col-span-3">
                    <h1 className="text-5xl text-center text-[#020043] font-semibold leading-[56px]">Comprehensive Care for Every Patient</h1>

                    <div className="grid grid-cols-3 gap-5">

                        {/* card 1 */}
                        <div className="border border-[#02004333] bg-white/60 pt-5 pr-5  rounded-3xl ">
                        <div className=" pl-5">
                        <h1 className="text-[40px] font-semibold text-[#020043]">500+</h1>
                        <p className="leading-[21px]">Board-certified <br /> doctors.</p>
                        
                    </div> 

                    <figure className="pl-[119px]">
                    <img src={contactIcon} alt="" />
                    </figure>

                        </div>

                        {/* card 2 */}

                      
                        <div className="border ml-4 w-[216px]  h-[162px] mt-[49px] border-[#02004333] bg-white/60 p-5 rounded-3xl ">
                        <div className=" mb-5">
                        <h1 className="text-[40px] flex gap-3 items-center font-semibold text-[#020043]">4.8 <span>
                            <img src={starIcon} alt="" />
                            </span></h1>
                        <p className="leading-[21px]">Over 20,000 Patient</p>
                        
                    </div> 

                    <figure className="">
                    <img src={mans} alt="" />
                    </figure>

                        </div>

                        {/* card 3 */}
                        <div className="border border-[#02004333] bg-white/60 pt-5 pr-5  rounded-3xl ">
                        <div className=" pl-5">
                        <h1 className="text-[40px] font-semibold text-[#020043]">$5000</h1>
                        <p className="leading-[21px]">Money spend <br />
                        for poor patient  </p>
                        
                    </div> 

                    <figure className="pl-[119px]">
                    <img src={coinsIcon} alt="" />
                    </figure>

                        </div>
                       
                    </div>
                </div>

                {/* Right Div */}
                <div className="w-[216px] h-[312px] bg-white pt-5 pl-5 pr-12 rounded-3xl ml-5">
                    <div className="mb-[23px]">
                        <h1 className="text-[40px] font-semibold text-[#020043]">50+</h1>
                        <p className="leading-[21px]">Free lession video 
                        for patient.</p>
                        
                    </div>

                    <figure>
                    <img src={videoIcon} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default CareSection;