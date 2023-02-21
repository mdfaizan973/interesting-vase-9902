import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import AllProducts from "./../Pages/AllProducts";
import Blog from "./../Pages/Blog";
import Cart from "./../Pages/Cart";
import Choco from "./../Pages/Choco";
import Login from "./../Pages/Login";
import Signup from "./../Pages/Signup";
import Plants from "./../Pages/Plants";
import SingleProducts from "./../Pages/SingleProducts";
import Flowers from "./../Pages/Flowers";
import NotFound from "../Pages/NotFound";
import Payments from "../Pages/Payments";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/all_products" element={<AllProducts />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/choco" element={<Choco />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/plants" element={<Plants />}></Route>
      <Route path="/singleProducts/:id" element={<SingleProducts />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/flowers" element={<Flowers />}></Route>
      <Route path="/payments" element={<Payments />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
