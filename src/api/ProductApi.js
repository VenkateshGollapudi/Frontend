import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductApi = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const baseUrl = process.env.REACT_APP_API_URL || "";
      const res = await axios.get(`${baseUrl}/api/products`);
      setProducts(res.data); // ✅ Fixed: Remove extra await
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]); // Set empty array on error
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: products, // ✅ Fixed: Return just the products array
    setProducts: setProducts, // ✅ Return setter separately if needed
    getProducts: getProducts, // ✅ Expose refetch function
  };
};
