import React from "react";
import { SiTicktick } from "react-icons/si";

const AllProductsCard = ({ product }) => {
  return (
    <div className="p-6 border-2 border-[#F2F2F2] space-y-4">
      <div className="flex justify-end">
        <span
          className={`badge rounded-full py-1.5 px-3 ${product.tag === "best seller" && "bg-[#FEF3C6] text-[#bb4e00]"} ${product.tag === "popular" && "bg-[#E1E7FF] text-[#9514fa]"} ${product.tag === "new" && "text-[#0A883E] bg-[#DBFCE7]"}`}
        >
          {product.tagType}
        </span>
      </div>
      <div>
        <img src={product.icon} alt="" className="w-15 h-15" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#101727]">{product.name}</h2>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <span className="text-[#101727] text-2xl font-bold">
          {product.price}
        </span>
        <span className="text-gray-600">
          /{product.period === "Monthly" ? "Mo" : product.period}
        </span>
      </div>
      <div className="space-y-2">
        {product.features.map((feature) => (
          <p className="flex items-center gap-2">
            <SiTicktick className="text-green-500"/>
            {feature}
          </p>
        ))}
      </div>
      <div>
        <button className="btn gradient transform hover:scale-105 transition-all duration-1000 rounded-full text-white w-full">Buy Now</button>
      </div>
    </div>
  );
};

export default AllProductsCard;
