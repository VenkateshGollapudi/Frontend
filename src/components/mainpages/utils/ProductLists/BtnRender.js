import React, { useContext } from "react";
import { GlobalState } from "../../../../GlobalState";
import { Link } from "react-router-dom";

export const BtnRender = ({ product }) => {
  const state = useContext(GlobalState);
  const [isAdmin] = state.UserApi.isAdmin;
  const [cart, setCart] = state.UserApi.cart;
  const addCart = state.UserApi.addCart;

  const existing = cart.find((item) => item._id === product._id);
  const quantity = existing?.quantity || 0;

  const increaseQty = () => {
    addCart(product); // ✅ Always use central logic
  };

  const decreaseQty = () => {
    if (!existing) return;

    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item._id !== product._id));
    } else {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div className="row_btn flex justify-between items-center mt-4 space-x-4">
      {isAdmin ? (
        <>
          <Link
            to={`delete/${product._id}`}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full text-center"
          >
            Delete
          </Link>
          <Link
            to={`detail/${product._id}`}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full text-center"
          >
            Edit
          </Link>
        </>
      ) : (
        <div className="flex items-center space-x-3">
          <button
            onClick={decreaseQty}
            className="px-3 py-1 bg-gray-400 text-white rounded"
          >
            −
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={increaseQty}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
