"use client";

// import { useEffect } from "react"; // AUTO SLIDE
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IImage } from "../types";
import { BasicCard } from "./cards/BasicCard";

interface CarouselProps {
  content: IImage[];
}

export default function SliderMain({ content }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const currentImage = content[current];

  const basicCardProps = {
    title: currentImage.title,
    description: currentImage.description,
    location: currentImage.location,
    bgColor: currentImage.bgColor,
    textColor: currentImage.textColor,
  };
  const prevImage = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? content.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextImage = () => {
    const isLastSlide = current === content.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  // AUTO SLIDE
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextImage();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [current]);

  return (
    <div className='relative flex justify-center items-center my-10'>
      <button
        onClick={prevImage}
        className='absolute left-[2%] top-[50%] z-[40]'
      >
        <BsArrowLeft size={36} color='blue' />
      </button>
      <div className='align-middle'>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className='h-[600px] object-cover self-center shadow-xl m-2 rounded-3xl'
        />
        {current !== null ? <BasicCard {...basicCardProps} /> : undefined}
      </div>
      <button
        onClick={nextImage}
        className='absolute right-[2%] top-[50%] z-[40]'
      >
        <BsArrowRight size={36} color='blue' />
      </button>
    </div>
  );
}
