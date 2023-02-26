import React, { useContext } from "react";
import HoveNav from "../Components/HoveNav";
import Navbar from "..//Components/Navbar";
import Carousel from "./Carousel";
import Footer from "../Components/Footer";
import CustmerSay from "../Cards/CustmerSay";
import ProCarousal from "./../ProSideBar/ProCarousal";
// import { AuthContext } from "../Context/AuthContext";
export default function Home() {
  // const { login, logout, isAuth } = useContext(AuthContext);
  // console.log(login, logout, isAuth);
  return (
    <div>
      <Navbar />
      <HoveNav />
      <Carousel />
      <CustmerSay />

      <Footer />
    </div>
  );
}
