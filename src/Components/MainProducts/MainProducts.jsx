import React, { use, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";

const MainProducts = ({ productPromise }) => {
  const [selectedType, setSelectedPlayers] = useState("products");
  const products = use(productPromise);
  return (
    <div className="width-container">
      <div className="mt-30">
        <div className="text-center space-y-4">
          <div>
            <h2 className="font-extrabold text-3xl sm:text-5xl">
              Premium Digital Tools
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <p className="max-w-xl text-gray-500 ">
              Choose from our curated collection of premium digital products
              designedto boost your productivity and creativity.
            </p>
          </div>
          <div className="flex justify-center mb-10 flex-col md:flex-row space-y-1">
            <button
              className={`rounded-full px-6 py-3.5 cursor-pointer ${selectedType === "products" ? "gradient text-white" : "bg-transparent"}`}
              onClick={() => setSelectedPlayers("products")}
            >
              Products
            </button>
            <button
              className={`rounded-full px-6 py-3.5 cursor-pointer ${selectedType === "carts" ? "gradient shadow-lg text-white" : "bg-transparent shadow-none"}`}
              onClick={() => setSelectedPlayers("carts")}
            >
              Cart (0)
            </button>
          </div>
        </div>
      </div>
      <div>
        {selectedType === "products" && <AllProducts products={products}></AllProducts>}
      </div>
    </div>
  );
};

export default MainProducts;
