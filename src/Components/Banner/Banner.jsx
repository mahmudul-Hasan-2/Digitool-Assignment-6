import React from "react";
import circle from "../../assets/circle.png";
import bannerImg from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="width-container w-[80%]">
      <div className="flex items-center justify-between flex-col-reverse md:flex-col lg:flex-row gap-15 px-2">
        <div className="max-w-2xl">
          <h2 className="flex items-center gap-2.5 bg-[#E1E7FF] px-2 sm:px-4 py-2 rounded-full max-w-[320px]">
            <div>
              <img src={circle} alt="" />
            </div>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[14px] sm:text-base">
              New: AI-Powered Tools Available
            </span>
          </h2>
          <div className="space-y-4 mt-4">
            <h2 className="text-3xl sm:text-7xl font-extrabold">
              Supercharge Your Digital Workflow
            </h2>
            <p className="max-w-[640px]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
          </div>
          <div className="flex items-center mt-8 gap-4 flex-col sm:flex-row">
            <button className="btn gradient rounded-full text-white h-14 w-full sm:w-[32%] hover:-translate-y-2 transition-all duration-1000">
              Explore Products
            </button>
            <div className="p-[1.5px] w-full sm:w-[32%] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full inline-block group h-14 hover:-translate-y-2 duration-1000">
              <button className="btn bg-white w-full hover:bg-gray-50 text-purple-600 border-none rounded-full flex items-center gap-2 py-4 min-h-0 transition-all h-full">
                <CiPlay1 size={24} className="stroke-[1.5]" />

                <span className="font-semibold tracking-wide">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
