/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// const laptop = "./assets/laptop.png";
// const ph = "./assets/ph.png";
const samsung = "./assets/samsung.png";
// const tv = "./assets/tv.png";
const watch = "./assets/watch.png";
import "./index.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="bg-gray-50">
      <div className="flex card items-center">
        <h3>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </h3>

        <img
          src="https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
          alt="laptop"
          className="w-[400px] h-[400px]"
        />
      </div>
      <div className="flex card justify-between items-center">
        <h3>Fine quality Branded Product Keep in a cool and dry place</h3>
        <img
          src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
          alt="phone"
          className="w-[400px]  h-[400px]"
        />
      </div>
      <div className="flex  card justify-between items-center">
        {" "}
        <h3>
          Samsung Galaxy Book S (2024) Laptop With Intel Lakefield Chip, 8GB of
          RAM Launched
        </h3>
        <img src={samsung} alt="samsung" className="w-[400px] h-[400px]" />
      </div>
      <div className="flex  card  justify-between items-center">
        {" "}
        <h3>Product details of Bake Parlor Big Elbow Macaroni - 400 gm</h3>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="tv"
          className="w-[400px] h-[400px]"
        />
      </div>
      <div className="flex  card  justify-between items-center">
        {" "}
        <h3>
          A watch is a portable timepiece intended to be carried or worn by a
          person. It is designed to keep a consistent movement despite the
          motions caused by the person's activities
        </h3>
        <img src={watch} alt="watch" className="w-[400px] h-[400px]" />
      </div>
    </Slider>
  );
}
