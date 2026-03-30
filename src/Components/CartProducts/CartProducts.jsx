import React from "react";
import CartProductsCard from "../../UI/CartProductsCard/CartProductsCard";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

const CartProducts = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? <ErrorMessage></ErrorMessage> : cartItems.map((cartItem) => (
        <CartProductsCard cartItem={cartItem}></CartProductsCard>
      ))}
    </div>
  );
};

export default CartProducts;
