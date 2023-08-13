"use client";
import SliderMain from "./(components)/SliderMain";
import { slider } from "./constants";
import { ThemeProvider } from "next-themes";

export interface ISliderType {
  image: string;
  sizes: string;
  title: string;
}

export default async function Home() {
  const slidenPics = slider.Image.map((image) => {
    return image;
  });

  return (
    <main className='w-full'>
      <ThemeProvider attribute='class'>
        <SliderMain content={slidenPics} />
      </ThemeProvider>
    </main>
  );
}
