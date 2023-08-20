"use client";

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
    const newIndex = (current - 1 + content.length) % content.length;
    setCurrent(newIndex);
  };

  const nextImage = () => {
    const newIndex = (current + 1) % content.length;
    setCurrent(newIndex);
  };

  return (
    <div className='relative flex justify-center items-center my-10'>
      <button onClick={prevImage} className='absolute left-[2%] top-[50%] z-40'>
        <BsArrowLeft size={36} color='blue' />
      </button>
      <div className='align-middle'>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className='h-[600px] w-full object-cover shadow-xl m-2 rounded-3xl'
        />
        {currentImage && <BasicCard {...basicCardProps} />}
      </div>
      <button onClick={nextImage} className='absolute right-[2%] top-[50%] z-40'>
        <BsArrowRight size={36} color='blue' />
      </button>
    </div>
  );
}
