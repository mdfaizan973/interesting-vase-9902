import React from "react";
import "./cards.css";
import { Link as RouterLink } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
export default function Simpleban() {
  return (
    <>
      <div className="smpban">
        <RouterLink to="/cakes">
          <div className="div1">
            <img src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/SBB-Hero-congo-20feb-n.jpg" />
          </div>
        </RouterLink>
        <RouterLink to="/flowers">
          <div className="div2">
            <img src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/SBB-Hero-Anniversary-20feb-n.jpg" />
          </div>
        </RouterLink>
      </div>{" "}
      <div
        style={{
          marginTop: "20px",
        }}
        className="div2"
      >
        <Heading>Offers</Heading>

        <img src="https://www.fnp.com/assets/images/custom/new-desk-home/offer-banners/fnp_desktop_strip.jpg" />
        <img
          style={{
            marginTop: "20px",
          }}
          src="https://cdn.igp.com/f_auto,q_auto,t_pnopt34prodlp/banners/sale_banner_20220622.jpg"
        />
        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt34prodlp/banners/covid-strip-3.jpg?v=5" />
      </div>
    </>
  );
}
