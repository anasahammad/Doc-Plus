import bannerImg from "../../assets/Rectangle 5.png"

const Banner = () => {
    return (
        <div 
  className="hero min-h-[470px] rounded-[48px] "
  style={{
    backgroundImage: `url('${bannerImg}')`,
  }}>
  {/* <div className="hero-overlay bg-[#020043
47%]"></div> */}
  
</div>
    );
};

export default Banner;