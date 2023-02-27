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
import AddFlower from "../Admins/AddFlower";
import UsersAcc from "../Admins/UsersAcc";
import AddChocoCake from "./../Admins/AddChocoCake";
import AdminDashboard from "../Admins/AdminDashboard";
import Cakes from "./../Pages/Cakes";
import Checkout from "./../Pages/Checkout";
import LogInPop from "../PopUp/LogInPop";
import PrivateRoutes from "../Context/PrivateRoutes";
import Delhivery from "../Pages/Delhivery";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/all_products" element={<AllProducts />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/choco"
        element={
          <PrivateRoutes>
            <Choco />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/plants" element={<Plants />}></Route>
      <Route
        path="/singleProducts/:id"
        element={
          <PrivateRoutes>
            <SingleProducts />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/login" element={<LogInPop />}></Route>
      <Route
        path="/flowers"
        element={
          <PrivateRoutes>
            <Flowers />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/payments"
        element={
          <PrivateRoutes>
            <Payments />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/addFlower" element={<AddFlower />}></Route>
      <Route path="/add_choco" element={<AddChocoCake />}></Route>
      <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
      <Route path="/users_acc" element={<UsersAcc />}></Route>
      <Route
        path="/cakes"
        element={
          <PrivateRoutes>
            <Cakes />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/checkout"
        element={
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/loginpop" element={<LogInPop />}></Route>
      <Route
        path="/all_pro"
        element={
          <PrivateRoutes>
            <AllProducts />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/delhivery"
        element={
          <PrivateRoutes>
            <Delhivery />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
}
