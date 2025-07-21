// src/components/mainpages/utils/DetailProducts/DetailProduct.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import "./style2.css";

export const DetailProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const products = state.ProductApi.products[0];
  const [cart, setCart] = state.UserApi.cart;

  const [detailProduct, setDetailProduct] = useState(null);

  useEffect(() => {
    if (params && products.length > 0) {
      const foundProduct = products.find(
        (product) => product._id === params.id
      );
      setDetailProduct(foundProduct || null);
    }
  }, [params, products]);

  if (!detailProduct) return null;

  const cartItem = cart.find((item) => item._id === detailProduct._id);
  const quantity = cartItem?.quantity || 0;

  const increaseQty = () => {
    const existing = cart.find((item) => item._id === detailProduct._id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === detailProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...detailProduct, quantity: 1 }]);
    }
  };

  const decreaseQty = () => {
    const existing = cart.find((item) => item._id === detailProduct._id);
    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item._id !== detailProduct._id));
    } else {
      setCart(
        cart.map((item) =>
          item._id === detailProduct._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="detail">
      <div>
        <img src={detailProduct.images.url} alt="productImage" />
      </div>
      <div className="box-detail">
        <div className="row">
          <h2>{detailProduct.product_title}</h2>
        </div>
        <h6>{detailProduct.product_id}</h6>
        <span>₹{detailProduct.price}</span>
        <p>{detailProduct.description}</p>
        <p>{detailProduct.content}</p>
        <p>Sold: {detailProduct.sold}</p>

        <div className="quantity-controls">
          <button onClick={decreaseQty} className="qty-btn">
            −
          </button>
          <span className="qty-value">{quantity}</span>
          <button onClick={increaseQty} className="qty-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
