import React from "react";
import CartCard from "../../UI/CartCard/CartCard";
import { toast } from "react-toastify";
import { TbAlertTriangleFilled } from "react-icons/tb";

const CartProductsCard = ({ cartItems, setCartItems }) => {
  let total = cartItems.reduce((sum, items) => sum + items.price, 0);
  const handleDelete = (cartItem) => {
    const deleteFilter = cartItems.filter((c) => c.id != cartItem.id);
    setCartItems(deleteFilter);
    toast(`${cartItem.name} is deleted successfully`);
  };
  const handleCheckOut = () => {
    setCartItems([]);
    toast.success("Payment Successful");
  };
  return (
    <div className="p-5 sm:p-10 space-y-6 border-2 border-[#F2F2F2]">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <div>
        {cartItems.length === 0 && (
          <div className="px-5 py-10 sm:p-10 flex items-center justify-center flex-col border border-gray-300 rounded-2xl space-y-2">
            <TbAlertTriangleFilled size={100} className="text-yellow-500" />
            <p className="text-xs sm:text-[14px]">Your selection is empty!</p>
            <h1 className="text-lg sm:text-3xl font-bold">
              Pick what's best for you
            </h1>
          </div>
        )}
      </div>
      <div className="space-y-4 rounded-2xl">
        {cartItems.map((cartItem) => (
          <CartCard
            handleDelete={handleDelete}
            key={cartItem.id}
            cartItem={cartItem}
          ></CartCard>
        ))}
      </div>

      <div
        className={`flex items-center justify-between ${cartItems.length === 0 ? "hidden" : "block"}`}
      >
        <span>Total:</span>
        <h1 className="text-2xl font-bold">${total}</h1>
      </div>
      <div className={`${cartItems.length === 0 ? "hidden" : "block"}`}>
        <button
          type="button"
          onClick={handleCheckOut}
          className="btn gradient rounded-full w-full text-white"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartProductsCard;
