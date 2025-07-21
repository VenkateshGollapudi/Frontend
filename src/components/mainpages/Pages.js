import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./cart/Cart";
import { Login } from "./login/Login";
import { Register } from "./login/Register";
import { Product } from "./products/Product";
import { DetailProduct } from "./utils/DetailProducts/DetailProduct";
import { Logout } from "./login/Logout";
import Tempp from "./products/Tempp";
import CreateProduct from "./products/CreateProduct";
import { DeleteProduct } from "./products/DeleteProduct";
import { Home } from "./Home";
import { Contact } from "./ContactPage";
import { Items } from "./Items";
import { Offers } from "./Offers";
import Payments from "./Payments";
import { MyCart } from "./MyCart";
import { SearchPage } from "./SearchPage"; // ✅ Import search page

const Pages = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create_product" element={<CreateProduct />} />
      <Route path="/delete/:id" element={<DeleteProduct />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/image" element={<Tempp />} />
      <Route path="/detail/:id" element={<DetailProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/items" element={<Items />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/MyCart" element={<MyCart />} />
      <Route path="/search" element={<SearchPage />} />
      {/* ✅ This enables /search */}
    </Routes>
  );
};

export default Pages;
