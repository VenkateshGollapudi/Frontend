import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { ProductList } from "../utils/ProductLists/ProductList";

export const Product = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductApi.products;
  const [isAdmin] = state.UserApi.isAdmin;

  if (!Array.isArray(products)) return <div>Loading products...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductList key={product._id} product={product} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};
