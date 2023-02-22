import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExclusiveGifts from "../Cards/ExclusiveGifts";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Box textAlign="center" py={10} px={6} mt={"-12vh"}>
        <Slider {...settings}>
          <div boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <img
              borderRadius="20%"
              width="100%"
              //   height="50px"
              src="https://imgcdn.floweraura.com/flower_homepage_fa_desktop_2.jpg?tr=w-1583,dpr-1.5,q-70"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              //   height="50px"
              borderRadius="20%"
              src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt34prodlp/banners/perfume_d_interflora_banner_20230220.jpg"
              alt="sdfafs"
            />
          </div>
          <div>
            <img
              width="100%"
              //   height="50%"
              borderRadius="20%"
              src="https://imgcdn.floweraura.com/plant_homepage_fa_desktop_4.jpg?tr=w-1583,dpr-1.5,q-70"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              //   height="50%"
              borderRadius="20%"
              src="https://imgcdn.floweraura.com/birthday_homepage_fa_desktop_5.jpg?tr=w-1583,dpr-1.5,q-70"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              //   height="50%"
              borderRadius="20%"
              src="https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70"
              alt=""
            />
          </div>
        </Slider>
        <hr />
        <ExclusiveGifts />
      </Box>
    </>
  );
}
