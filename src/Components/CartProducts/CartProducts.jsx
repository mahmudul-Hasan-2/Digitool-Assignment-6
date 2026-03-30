import React from "react";
import CartProductsCard from "../CartProductsCard/CartProductsCard";
import { TbAlertTriangleFilled } from "react-icons/tb";

const CartProducts = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <CartProductsCard
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></CartProductsCard>
    </div>
  );
};

export default CartProducts;
