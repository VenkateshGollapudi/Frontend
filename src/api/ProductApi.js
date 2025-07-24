import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductApi = () => {
  const [products, setProducts] = useState([]);
  console.log("=== ENVIRONMENT DEBUG ===");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("REACT_APP_BACKEND_URL:", process.env.REACT_APP_BACKEND_URL);
  console.log(
    "All REACT_APP vars:",
    Object.keys(process.env).filter((key) => key.startsWith("REACT_APP"))
  );
  console.log("========================");
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
