import React from "react";
import { BsCart2 } from "react-icons/bs";
import logoImg from "../../assets/DigiTools.png";

const navItems = [
  { id: 1, name: "Products", path: "/products" },
  { id: 2, name: "Features", path: "/features" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const items = navItems.map((item) => (
    <a className="font-semibold" href={item.path} key={item.id}>
      {item.name}
    </a>
  ));
  return (
    <div className="bg-base-100 shadow-sm py-2 mb-20">
      <div className="navbar width-container">
        <div className="navbar-start">
          <a className="">
            <img src={logoImg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5 items-center ">
            <div className="relative inline-block p-2 md:mr-2 mr-0">
              <span className="absolute top-0 right-0 transform flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                0
              </span>
              <BsCart2 size={25} />
            </div>
            <div className="hidden sm:flex gap-4 items-center">
              <span className="font-semibold cursor-pointer">Login</span>
              <button className="btn rounded-full gradient text-white px-4 py-3 hover:scale-105 transition-all duration-1000">
                Get Started
              </button>
            </div>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow flex-col w-auto p-5 ml-[-105px] overflow-x-hidden space-y-5"
            >
              {items}
              <span className="font-semibold cursor-pointer">Login</span>
              <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-3">
                Get Started
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
