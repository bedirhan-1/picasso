export type ISlider = {
  Image: IImage[];
};

export type IImage = {
  width?: any;
  src: string;
  alt: string;
  title: string;
  description: string;
  location: string;
  bgColor: string;
  textColor?: string;
  index: number;
};
