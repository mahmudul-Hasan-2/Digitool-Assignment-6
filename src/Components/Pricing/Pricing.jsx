import React from "react";
import PricingCard from "../../UI/PricingCard/PricingCard";

const pricingPlans = [
  {
    id: 1,
    planName: "Starter",
    price: 0,
    description: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
  },
  {
    id: 2,
    planName: "Pro",
    price: 29,
    description: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    isPopular: true,
  },
  {
    id: 3,
    planName: "Enterprise",
    price: 99,
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="width-container">
      <div className="mt-30">
        <div className="space-y-4 text-center mb-10">
          <h2 className="text-2xl sm:text-5xl font-bold text-[#101727]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {pricingPlans.map((plans) => (
            <PricingCard key={plans.id} plans={plans}></PricingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
