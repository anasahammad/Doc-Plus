import logo from "../../assets/logo dark.png"


const Navbar = () => {

    
    return (
        <div className="navbar max-w-7xl mx-auto py-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#020043] font-medium">
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
      
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-xl px-1 text-[#020043] font-medium">
    <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="px-4 text-[#020043] text-xl  font-medium py-2 rounded-xl border border-[#343268]">Appointment &#x2197;</button>
  </div>
</div>
    );
};

export default Navbar;