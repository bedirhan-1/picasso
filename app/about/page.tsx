import { BsCheckLg, BsFillExclamationTriangleFill } from "react-icons/bs";
import WarningCard from "../(components)/cards/WarningCard";
import { About as AboutContent } from "../constants";

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20'>
      <WarningCard
        title={AboutContent[0].aboutTitle}
        description={AboutContent[0].aboutText}
        iconColor={"#F87171"}
        className="p-4 m-4 w-[80%]"
      />
    </div>
  );
};

export default About;
