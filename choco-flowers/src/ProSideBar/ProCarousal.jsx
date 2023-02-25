import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
const sliderData1 = [
  {
    image: "https://www.justbake.in/assets/img/slider/IMG-20210525-WA0028.jpg",
  },
  {
    image:
      "https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/blt4380d3f95942a921/63d2dc365ba46f75ddba032f/230126-Occasions-Dept-2Spot-Birthday.jpg?quality=85&auto=webp&optimize={medium}",
  },
  {
    image:
      "https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/bltf2d879da01817a5c/63d2dc5e9d7bcb542235067a/230126-Occasions-Dept-2Spot-Sympathy.jpg?quality=85&auto=webp&optimize={medium}",
  },
  {
    image:
      "https://images.contentstack.io/v3/assets/blt22a4279bb3e9cfce/blt352e2643d9812b7a/63f387f7fa12dd32abd5c6e2/SB_LoveandRomance_FY23_12-19-22_(1).jpg?quality=60&auto=webp&optimize={medium}",
  },
  {
    image: "https://www.justbake.in/assets/img/slider/IMG-20210525-WA0028.jpg",
  },
  {
    image:
      "https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/blt4380d3f95942a921/63d2dc365ba46f75ddba032f/230126-Occasions-Dept-2Spot-Birthday.jpg?quality=85&auto=webp&optimize={medium}",
  },
  {
    image:
      "https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/bltf2d879da01817a5c/63d2dc5e9d7bcb542235067a/230126-Occasions-Dept-2Spot-Sympathy.jpg?quality=85&auto=webp&optimize={medium}",
  },
];

export default function ProCarousal() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="160px" marginLeft="40px" zIndex={1}>
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
    <Box position="absolute" marginTop="-50px" marginLeft="1460px">
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
