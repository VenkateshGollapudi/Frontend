import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductApi = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || "";
    const res = await axios.get(`${baseUrl}/api/products`);
    const data = await res.data;
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: [products, setProducts],
  };
};
