import React, { useRef, useState } from "react";
import { IImage } from "../types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BasicCard } from "./cards/BasicCard";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';


interface CarouselProps {
  content: IImage[];
}

export default function SliderMain({ content }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setCurrent(swiper.realIndex);
  };

  const currentImage = content[current];

  const basicCardProps = {
    title: currentImage.title,
    description: currentImage.description,
    location: currentImage.location,
    bgColor: currentImage.bgColor,
    textColor: currentImage.textColor,
  };

  return (
    <div className="relative flex justify-center ">
      <button
        className="p-4 opacity-40 hover:opacity-100 transition-all duration-300 "
        onClick={() => swiperRef?.current?.slidePrev()}
      >
        <BsArrowLeft size={32} color="black" />
      </button>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        scrollbar={{
          draggable: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {content.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <img
                src={image.src}
                alt={image.alt}
                className='h-[800px] object-cover'
              />
              {currentImage && <BasicCard {...basicCardProps} />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="p-4 opacity-30 hover:opacity-100 transition-all duration-300"
        onClick={() => swiperRef?.current?.slideNext()}
      >
        <BsArrowRight size={32} color="black" />
      </button>
    </div>
  );
}
