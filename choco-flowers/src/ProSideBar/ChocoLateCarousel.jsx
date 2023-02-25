import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
const sliderData1 = [
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
  {
    image:
      "https://imgcdn.floweraura.com/Final-Home-Page-banner-for-Toothsome-cakes.jpeg?tr=w-1583,dpr-1.5,q-70",
  },
];

export default function ChocoLateCarousel() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="130px" marginLeft="40px" zIndex={1}>
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
    <Box position="absolute" marginTop="-50px" marginLeft="1200px">
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
