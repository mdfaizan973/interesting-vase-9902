import React from "react";
import "./cards.css";
import { Link as RouterLink } from "react-router-dom";
export default function Simpleban() {
  return (
    <>
      <div className="smpban">
        <RouterLink to="/mens_pro">
          <div className="div1">
            <img src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/SBB-Hero-congo-20feb-n.jpg" />
          </div>
        </RouterLink>
        <RouterLink to="/mens_pro">
          <div className="div2">
            <img src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/SBB-Hero-Anniversary-20feb-n.jpg" />
          </div>
        </RouterLink>
      </div>{" "}
      <div className="div2">
        <img
          style={{
            marginTop: "20px",
          }}
          src="https://www.fnp.com/assets/images/custom/new-desk-home/offer-banners/fnp_desktop_strip.jpg"
        />
      </div>
    </>
  );
}
