import bannerImg from "../../assets/Rectangle 5.png"

const Banner = () => {
    return (
        <div 
  className=" bg-center grid w-full place-items-center bg-cover min-h-[470px] rounded-[48px] "
  style={{
    backgroundImage: `url('${bannerImg}')`, backgroundRepeat: "no-repeat" 
  }}>
  {/* <div className="hero-overlay bg-[#020043
47%]"></div> */}
  
</div>
    );
};

export default Banner;