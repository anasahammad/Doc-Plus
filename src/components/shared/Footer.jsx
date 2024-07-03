import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo light.png"

const Footer = () => {
    return (
        <footer className="  bg-[#020043] text-white px-[166px] py-[120px]">
             <img src={logo} alt="" />

            <div className="grid grid-cols-4 mt-8">
            <div className="space-y-[33px]">
               

               <p>123 Main Street Anytown, USAPostal Code: 12345

</p>

<p>Support: support@oyolloo.com
(Available : 10:00am to 07:00pm)</p>
           </div>

           <div className="ml-[130px]">
               <ul className="leading-[30px]">
                   <li>Home</li>
                   <li>About</li>
                   <li>Success Page</li>
                   <li>Terms And Condition</li>
               </ul>
           </div>
           <div className="ml-[140px]">
               <ul className="leading-[30px]">
                   <li>Services</li>
                   <li> Scheduling</li>
                   <li>Contact Us</li>
                   <li>Patient Portal</li>
               </ul>
           </div>

           <div className="ml-[100px] leading-[30px] ">
               <h6>Follow Us</h6>

               <div className="flex gap-2 ">
               <FaFacebook className="text-2xl"/>
               <FaInstagram className="text-2xl"/>
               <FaLinkedin className="text-2xl"/>
               <FaYoutube className="text-2xl"/>

               </div>

               <p className="mt-8">@docplus 2024</p>
           </div>
            </div>
        </footer>
    );
};

export default Footer;