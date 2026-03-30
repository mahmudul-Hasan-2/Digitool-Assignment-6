import React from "react";

const Stats = () => {
  return (
    <div className="gradient py-15 mt-20">
      <div className="width-container">
        <div className="flex w-full flex-col lg:flex-row text-white justify-center">
          <div className="text-center px-15 flex items-center justify-center flex-col space-y-3">
            <h1 className="text-3xl lg:text-6xl font-extrabold">50K+</h1>
            <p className="text-base md:text-xl lg:text-2xl">Active Users</p>
          </div>
          <div className="divider lg:divider-horizontal border-white"></div>
          <div className="text-center px-15 flex items-center justify-center flex-col space-y-3">
            <h1 className="text-3xl lg:text-6xl font-extrabold">200+</h1>
            <p className="text-base md:text-xl lg:text-2xl">Premium Tools</p>
          </div>
          <div className="divider lg:divider-horizontal border-white"></div>
          <div className="text-center px-15 flex items-center justify-center flex-col space-y-3">
            <h1 className="text-3xl lg:text-6xl font-extrabold">4.9</h1>
            <p className="text-base md:text-xl lg:text-2xl">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
