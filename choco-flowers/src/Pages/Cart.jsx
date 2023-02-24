import React from "react";
import ExclusiveGifts from "../Cards/ExclusiveGifts";
import MultiPro from "../Cards/MultiPro";
import Footer from "../Components/Footer";
import HoveNav from "../Components/HoveNav";
import Navbar from "../Components/Navbar";
import Cakes from "../Cards/Cakes";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <HoveNav />
      <ExclusiveGifts />
      <MultiPro />
      <Cakes />
      <Footer />
    </div>
  );
}
