import bannerImg from "../../assets/voucher.png"
import logo from "../../assets/logo light.png"
const VoucherCard = () => {
    return (
        <div className="my-12 ">

<div 
  className="relative bg-center grid w-full place-items-center bg-cover min-h-[470px] rounded-[48px] "
  style={{
    backgroundImage: `url('${bannerImg}')`, backgroundRepeat: "no-repeat" 
  }}>
  
  <div className="absolute inset-0 bg-gradient-to-r from-[#020043] to-[#020043] rounded-[48px] -rotate-180 opacity-75"></div>

  <div className=" absolute w-full px-[15px] lg:px-[60px]">
    <div className="flex justify-between">
    <div className="w-[530px] ">
        <h1 className="text-white font-semibold text-2xl lg:text-[40px] lg:leading-[60px] ">Get Your <br />
First Appointment <br />
at 50% Off!</h1>

<div className="mt-6 flex flex-col lg:flex-row gap-6">
<button className="px-4 text-[#020043] hover:bg-transparent hover:border-[#020043] transition-all duration-700 bg-[#FFC637] text-xl font-medium py-2 rounded-xl border ">
            Appointment &#x2197;
          </button>
<button className="px-4 hover:bg-[#FFC637] transition-all duration-700 hover:text-white hover:border-white text-white  text-xl font-medium py-2 rounded-xl border ">
            Learn More &#x2197;
          </button>
</div>
    </div>

    <div>
        <img src={logo} alt="" />
    </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default VoucherCard;