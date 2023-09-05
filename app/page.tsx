"use client";
import Introduction from "./(components)/Introduction";
import SliderMain from "./(components)/SliderMain";
import { slider } from "./constants";

export interface ISliderType {
  image: string;
  sizes: string;
  title: string;
}

export default function Home() {
  const slidenPics = slider.Image.map((image) => {
    return image;
  });

  return (
    <main className='w-full'>
      <SliderMain content={slidenPics} />
      <Introduction />
    </main>
  );
}
