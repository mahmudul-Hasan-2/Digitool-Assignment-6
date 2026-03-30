import React from "react";

const Newsletter = () => {
  return (
    <div className="space-y-10 gradient mt-30 py-30 text-center flex items-center justify-center flex-col text-white">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-[40px] font-extrabold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-[14px] sm:text-base">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
      </div>
      <div>
        <div className="space-y-4 flex gap-4 justify-center">
          <button className="btn bg-white transform hover:scale-105 transition-all duration-1000 text-[#9514FA] rounded-full">
            Explore Products
          </button>
          <button className="btn bg-transparent transform hover:scale-105 transition-all duration-1000 text-white rounded-full">
            View Pricing
          </button>
        </div>
        <div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
