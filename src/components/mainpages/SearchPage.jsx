import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import { ProductList } from "./utils/ProductLists/ProductList";

export const SearchPage = () => {
  const state = useContext(GlobalState);
  const products = state.ProductApi.products[0];

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery().get("q")?.toLowerCase() || "";

  const filtered = products.filter((product) =>
    product.product_title.toLowerCase().includes(query)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search results for: “{query}”</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductList key={product._id} product={product} isAdmin={false} />
          ))
        ) : (
          <p>No results found for “{query}”</p>
        )}
      </div>
    </div>
  );
};
