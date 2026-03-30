import React from "react";
import CartProductsCard from "../CartProductsCard/CartProductsCard";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

const CartProducts = ({ cartItems, setCartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <ErrorMessage></ErrorMessage>
      ) : (
        <CartProductsCard cartItems={cartItems} setCartItems={setCartItems}></CartProductsCard>
      )}
    </div>
  );
};

export default CartProducts;
