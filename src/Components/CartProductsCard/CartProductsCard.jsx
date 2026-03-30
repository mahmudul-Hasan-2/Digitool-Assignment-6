import React from "react";
import CartCard from "../../UI/CartCard/CartCard";
import { toast } from "react-toastify";

const CartProductsCard = ({ cartItems, setCartItems }) => {
  let total = cartItems.reduce((sum, items) => sum + items.price, 0); 
  const handleDelete = (cartItem) => {
    const deleteFilter = cartItems.filter(c => c.id != cartItem.id);
    setCartItems(deleteFilter);
    toast(`${cartItem.name} is deleted successfully`);
  }
  const handleCheckOut = () => {
    setCartItems([]);
    toast.success('Payment Successful')
  }
  return (
    <div className="p-10 space-y-6 border-2 border-[#F2F2F2]">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      <div className="space-y-4 rounded-2xl">
        {cartItems.map((cartItem) => (
          <CartCard handleDelete={handleDelete} key={cartItem.id} cartItem={cartItem}></CartCard>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span>Total:</span>
        <h1 className="text-2xl font-bold">${total}</h1>
      </div>
      <div>
        <button onClick={handleCheckOut} className="btn gradient rounded-full w-full text-white">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartProductsCard;
