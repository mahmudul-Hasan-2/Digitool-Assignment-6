import React from "react";
import footerLogo from "../../assets/DigiToolsFooter.png";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="width-container pt-30 pb-7.5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 justify-center">
          <div className="space-y-4">
            <img src={footerLogo} alt="" />
            <p className="text-[14px]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold">Social Links</h2>

            <ul className="flex items-center gap-4">
              <li className="bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200 transition-all">
                <FaInstagram className="text-black text-xl" />
              </li>

              <li className="bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200 transition-all">
                <FaFacebookSquare className="text-black text-xl" />
              </li>

              <li className="bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200 transition-all">
                <FaXTwitter className="text-black text-xl" />
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-20 mb-7.5 border-none h-[1px] bg-gray-500 opacity-30" />
        <div className="flex items-center justify-between flex-col md:flex-row gap-2">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
