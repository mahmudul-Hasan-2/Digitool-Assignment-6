import { Check } from "lucide-react";
import React from "react";

const PricingCard = ({ plans }) => {
  return (
    <div
      className={`space-y-6 p-6 rounded-2xl ${plans.isPopular ? "gradient text-white" : "bg-[#F9FAFC] border-2 border-[#F2F2F2] text-black"}`}
    >
      <div className="mt-[-40px] flex justify-center">
        {plans.isPopular ? (
          <span className="badge rounded-full text-[#BB4D00] bg-[#FEF3C6]">
            Most Popular
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{plans.planName}</h2>
        <p className={`${plans.isPopular ? "text-white" : "text-[#627382]"}`}>
          {plans.description}
        </p>
      </div>
      <div className="flex items-center">
        <span className="text-[40px] font-bold">${plans.price}</span>
        <span
          className={`text-2xl ${plans.isPopular ? "text-white" : "text-[#627382]"}`}
        >
          /Month
        </span>
      </div>
      {plans.features.map((feature, ind) => (
        <p key={ind} className="flex items-center gap-2">
          <Check></Check> {feature}
        </p>
      ))}
      <div>
        <button className={`btn ${plans.isPopular ? "btn-white text-[#4F39F6]" : "gradient text-white"} w-full`}>
          {plans.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
