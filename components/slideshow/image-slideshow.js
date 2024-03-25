"use client";

// import burgerImg from "@/assets/images/burger.avif";
import curryImg from "@/assets/images/curry.webp";
import dumplingsImg from "@/assets/images/dumplings.jpg";
import pizzaImg from "@/assets/images/pizza.png";
import classes from "./image-slideshow.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { image: pizzaImg, alt: "A Delicious, Juicy Burger" },
  { image: curryImg, alt: "A Delicious, Juicy Curry" },
  { image: dumplingsImg, alt: "A Delicious, Juicy dumplings" },
];
const ImageSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        ></Image>
      ))}
    </div>
  );
};
export default ImageSlideShow;
