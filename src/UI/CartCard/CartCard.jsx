import React from "react";

const CartCard = ({ cartItem, handleDelete }) => {
  return (
    <div className="p-5 bg-[#F9FAFC] flex items-center justify-between flex-col sm:flex-row gap-5">
      <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-start">
        <div>
          <img src={cartItem.icon} alt="" className="h-15 w-15" />
        </div>
        <div>
          <span>{cartItem.name}</span>
          <p>${cartItem.price}</p>
        </div>
      </div>
      <div>
        <button className="text-[#FF3980] font-bold cursor-pointer" onClick={() => handleDelete(cartItem)}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
