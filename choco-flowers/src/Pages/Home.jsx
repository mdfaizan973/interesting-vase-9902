import React from "react";
import HoveNav from "../Components/HoveNav";
import Navbar from "..//Components/Navbar";
import Carousel from "./Carousel";
import Footer from "../Components/Footer";
import CustmerSay from "../Cards/CustmerSay";
import ProCarousal from "./../ProSideBar/ProCarousal";
export default function Home() {
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
