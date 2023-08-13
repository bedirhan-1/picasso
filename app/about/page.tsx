import { About as AboutContent } from "../constants";

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20'>
      <h1 className='text-4xl font-bold mb-4'>{AboutContent[0].aboutTitle}</h1>
      <p className='text-lg text-center max-w-md'>
        {AboutContent[0].aboutText}
      </p>
    </div>
  );
};

export default About;
