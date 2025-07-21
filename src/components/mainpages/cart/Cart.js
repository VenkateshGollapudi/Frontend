// src/components/mainpages/Cart.jsx
import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const state = useContext(GlobalState);
  const [cart] = state.UserApi.cart;
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <h2 className="text-center text-5xl font-medium">Cart is Empty</h2>;
  }

  const totalAmount = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );

  const goToPayments = () => {
    navigate("/payments", { state: { total: totalAmount } });
  };

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Your Cart</h1>
      {cart.map((product) => (
        <div className="cart-item-container" key={product._id}>
          <div className="cart-image">
            <img src={product.images.url} alt={product.product_title} />
          </div>
          <div className="cart-details">
            <h2>{product.product_title}</h2>
            <h6>Product ID: {product.product_id}</h6>
            <p>
              ₹{product.price} × {product.quantity || 1}
            </p>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Sold: {product.sold}</p>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Total: ₹{totalAmount}</h2>
        <button className="proceed-button" onClick={goToPayments}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};
