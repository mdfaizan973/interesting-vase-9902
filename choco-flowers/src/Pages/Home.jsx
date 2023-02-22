import React from "react";
import HoveNav from "../Components/HoveNav";
import Navbar from "..//Components/Navbar";
import Carousel from "./Carousel";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HoveNav />
      <Carousel />
      <Footer />
    </div>
  );
}
