import React from "react";
import AllProductsCard from "../../AllProductsCard/AllProductsCard";

const AllProducts = ({products}) => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {
            products.map(product => <AllProductsCard key={product.id} product={product}></AllProductsCard>)
        }
    </div>
  );
};

export default AllProducts;
