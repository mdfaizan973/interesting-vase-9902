import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./cards.css";
// import Simpleban from "./Simpleban";
export default function Cakes() {
  return (
    <>
      <Heading as="h1" size="xl" mt={6} mb={2}>
        Send Flowers & Exclusive Gifts
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
          <img src="https://www.fnp.com/images/pr/l/v20221118132140/chocolate-cream-cake-half-kg_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Addidas Ultra Lite 3
          </Heading>
        </div>
        <div>
          <img
            src="https://www.fnp.com/images/pr/l/v20221205145048/black-forest-cake-half-kg_1.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Puma Xtream Pro
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20211130132724/dripping-2-tier-butterscotch-cake-1-5-kg_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            LeBron XX Stuffer'
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20221130121853/butterscotch-cake-half-kg_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Sega Xtream Ultra
          </Heading>
        </div>
        <div>
          <img src="https://www.fnp.com/images/pr/l/v20221205145728/chocolate-caramel-fudge-cake-half-kg_1.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Air XX Stocking
          </Heading>
        </div>
      </div>

      {/**/}
    </>
  );
}
