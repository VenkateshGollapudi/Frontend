import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductApi = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const baseUrl = process.env.REACT_APP_API_URL || "";
      const res = await axios.get(`${baseUrl}/api/products`);
      setProducts(res.data); //
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: products,
    setProducts: setProducts,
    getProducts: getProducts,
  };
};
