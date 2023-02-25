import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
const sliderData1 = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/small-sitalpati-planter-32143502999684.jpg?v=1673868611&width=375",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/single-propagation-tube-wooden-test-tube-planter-32259146285188.jpg?v=1675516494&width=375",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/small-white-tivoli-planter-31977987768452.jpg?v=1675617310&width=375",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/unnamed_2.jpg?v=1668493851&width=375",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/small-ivory-zuri-vase-ball-rib-31642716569732.jpg?v=1675633145&width=375",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/small-natural-square-cane-planter-32143794503812.jpg?v=1673867879&width=375",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/small-merlot-red-zuri-vase-ball-groove-31642330660996.jpg?v=1676021220&width=375",
  },
];

export default function PlantsCarousal() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="200px" marginLeft="40px" zIndex={1}>
      <ChevronLeftIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-200px" marginLeft="1200px">
      <ChevronRightIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderData1.map((el, index) => {
          return (
            <div key={index}>
              <Box padding="10px">
                <Image borderRadius="8px" src={el.image} />
              </Box>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
