import React from "react";
import { Heading, Text, Image } from "@chakra-ui/react";
import "./cards.css";
// import Simpleban from "./Simpleban";
export default function Cakes() {
  return (
    <>
      <Heading as="h1" size="xl" mt={6} mb={2}>
        Shop Our Best Selling Chocolate Covered Cakes
      </Heading>
      <div className="prople_card">
        <div>
          <img
            src="https://www.fnp.com/images/pr/l/v20221214145641/chocolate-truffle-cream-cake-half-kg_1.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Ethereal Bliss
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20220603122240/assorted-truffles-8-pcs_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            ChocoLate Cakes
          </Heading>
        </div>
        <div>
          <img
            src="https://www.fnp.com/images/pr/l/v20221205145048/black-forest-cake-half-kg_1.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Butterscotch Cakes
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20200206074634/chocolate-heart-bouquet_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Pineapple Cakes
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20221130121853/butterscotch-cake-half-kg_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Flowers N Cakes
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20230105124723/chocolate-delight-love-hamper_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Black Forest
          </Heading>
        </div>
      </div>
    </>
  );
}
