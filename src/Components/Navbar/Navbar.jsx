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
    <a href={item.path} key={item.id}>
      {item.name}
    </a>
  ));
  return (
    <div class="bg-base-100 shadow-sm">
      <div className="navbar width-container">
        <div class="navbar-start">
          <a class="">
            <img src={logoImg} alt="" />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-8 px-1">{items}</ul>
        </div>
        <div class="navbar-end">
          <div className="flex gap-5 items-center ">
            <div className="relative inline-block p-2 md:mr-2 mr-0">
              <span className="absolute top-0 right-0 transform flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                0
              </span>
              <BsCart2 size={25} />
            </div>
            <div className="hidden sm:flex gap-4 items-center">
              <span className="font-semibold cursor-pointer">Login</span>
              <button className="btn rounded-full gradient text-white px-4 py-3">
                Get Started
              </button>
            </div>
          </div>
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow flex-col w-auto p-5 ml-[-105px] overflow-x-hidden space-y-5"
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
