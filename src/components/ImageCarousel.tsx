import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { Box, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define type for each image object
interface CarouselImage {
  image: string;
  imageText: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider | null>(null);
  const mobileView = useMediaQuery("(max-width:500px)");

  const AUTO_SCROLL_INTERVAL = 3000;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current?.slickNext();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  const styles = {
    carouselContainer: {
      position: "relative",
      width: "100%",
      height: "auto",
      marginBottom: "1rem",
    } as const,
    image: {
      maxHeight: "15rem",
      width: mobileView ? "100%" : "auto",
      height: mobileView ? "auto" : "15rem",
      margin: "0 auto",
    } as const,
    imageText: {
      color: "#fff",
      textAlign: "center" as const,
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
      fontSize: "0.65rem",
    },
  };

  return (
    <Box sx={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.image}
              alt={`carousel-image-${index}`}
              style={styles.image}
            />
            <p style={styles.imageText}>
              <em>{img.imageText}</em>
            </p>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
