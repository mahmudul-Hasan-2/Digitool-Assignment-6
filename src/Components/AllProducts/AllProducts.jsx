import React from "react";
import AllProductsCard from "../../UI/AllProductsCard/AllProductsCard";

const AllProducts = ({ products, setCartItems, cartItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
      {products.map((product) => (
        <AllProductsCard
          setCartItems={setCartItems}
          key={product.id}
          product={product}
          cartItems={cartItems}
        ></AllProductsCard>
      ))}
    </div>
  );
};

export default AllProducts;
