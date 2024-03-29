interface IContent {
  title: string;
  description: string;
  location?: string;
  bgColor?: string;
  textColor?: string;
}

export const BasicCard: React.FC<IContent> = ({
  title,
  description,
  location,
  bgColor,
}) => {
  return (
    <div
      className={`absolute ${location + " " + bgColor} p-6  rounded-3xl shadow-2xl bg-black bg-opacity-20 backdrop-blur-xl`}
    >
      <h1 className='my-4 text-[3rem] font-bold text-white'>{title}</h1>
      <h4 className='text-[1.2rem] text-white'>{description}</h4>
    </div>
  );
};
