import React from "react";
import user from "../../assets/user.png";
import products from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="width-container">
      <div className="mt-30 space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-5xl font-bold text-[#101727]">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          <div className="space-y-4 p-6 border-2 border-[#F1F1F1] rounded-2xl">
            <div className="flex items-center justify-end">
              <span className="px-3 py-2.5 w-10 h-10 gradient text-white rounded-full">
                01
              </span>
            </div>
            <div className="flex justify-center">
              <img
                src={user}
                alt=""
                className="p-5 bg-[#F0EAFE] rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl text-[#101727] font-bold">
                Create Account
              </h2>
            </div>
            <div className="text-center">
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="space-y-4 p-6 border-2 border-[#F1F1F1] rounded-2xl">
            <div className="flex items-center justify-end">
              <span className="px-3 py-2.5 w-10 h-10 gradient text-white rounded-full">
                02
              </span>
            </div>
            <div className="flex justify-center">
              <img
                src={products}
                alt=""
                className="p-5 bg-[#F0EAFE] rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl text-[#101727] font-bold">
                Choose Products
              </h2>
            </div>
            <div className="text-center">
              <p className="text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="space-y-4 p-6 border-2 border-[#F1F1F1] rounded-2xl">
            <div className="flex items-center justify-end">
              <span className="px-3 py-2.5 w-10 h-10 gradient text-white rounded-full">
                03
              </span>
            </div>
            <div className="flex justify-center">
              <img
                src={rocket}
                alt=""
                className="p-5 bg-[#F0EAFE] rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl text-[#101727] font-bold">
                Start Creating
              </h2>
            </div>
            <div className="text-center">
              <p className="text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
