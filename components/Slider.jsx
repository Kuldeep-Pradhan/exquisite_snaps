import React, { useState } from "react";
import Image from "next/image";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) return null;
  return (
    <div id="gallery" className="max-width[1240px] mx-auto">
      <h1 className=" flex text-2xl font-bold justify-center items-center h-[50px] mt-5">
        Gallery
      </h1>

      <div className="relative flex justify-center p-4">
        {SliderData.map((data, index) => {
          return (
            <div
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
              key={index}
            >
              <FaArrowCircleLeft
                className=" absolute top-[45%] lg:top-[50%] left-[30px] lg:left-[100px] text-white/70  cursor-pointer select-none"
                size={50}
              />
              {index === current && (
                <Image
                  src={data.image}
                  alt="images"
                  width={1220}
                  height={600}
              
                />
              )}
              <FaArrowCircleRight
                className=" absolute top-[45%] lg:top-[50%] right-[30px] lg:right-[100px] text-white/70 cursor-pointer select-none"
                size={50}
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
