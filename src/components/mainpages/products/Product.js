import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { ProductList } from "../utils/ProductLists/ProductList";

export const Product = () => {
  const state = useContext(GlobalState);
  const products = state.ProductApi.products; // ✅ Fixed: Access the products array directly
  const [isAdmin] = state.UserApi.isAdmin;

  // ✅ Add safety checks
  if (!products) {
    return <div className="container mx-auto p-4">Loading products...</div>;
  }

  if (!Array.isArray(products)) {
    return <div className="container mx-auto p-4">No products available.</div>;
  }

  if (products.length === 0) {
    return <div className="container mx-auto p-4">No products found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Grid container for the products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductList key={product._id} product={product} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};
