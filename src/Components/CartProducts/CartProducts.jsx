import React from "react";
import CartProductsCard from "../CartProductsCard/CartProductsCard";
import { TbAlertTriangleFilled } from "react-icons/tb";

const CartProducts = ({ cartItems, setCartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="p-10 flex items-center justify-center flex-col border border-gray-300 rounded-2xl space-y-2">
          <TbAlertTriangleFilled size={100} className="text-yellow-500" />
          <p className="text-xs sm:text-[14px]">Your selection is empty!</p>
          <h1 className="text-lg sm:text-3xl font-bold">
            Pick what's best for you
          </h1>
        </div>
      ) : (
        <CartProductsCard
          cartItems={cartItems}
          setCartItems={setCartItems}
        ></CartProductsCard>
      )}
    </div>
  );
};

export default CartProducts;
