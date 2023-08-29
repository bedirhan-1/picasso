export enum ButtonTypes {
  Primary,
  Secondary,
  Tertiary,
  Danger,
  Warning,
  Success,
  Info,
  Light,
  Dark,
  Link,
  Slider,
}

interface ButtonProps {
  children?: React.ReactNode;
  text: string;
  onClick: () => void;
  buttonType: ButtonTypes;
  isDisabled: boolean;
  className?: string;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  buttonType,
  isDisabled = false,
  children,
  className,
}) => {
  return (
    <button
      className={
        className
          ? className
          : `bg-green-700 justify-center items-center px-6 py-2  rounded-md ${buttonType === ButtonTypes.Primary && "bg-blue-700 text-white"
          } ${buttonType === ButtonTypes.Secondary && "bg-slate-600 text-white"
          }
        ${buttonType === ButtonTypes.Tertiary && "bg-slate-400 text-white"}
        ${buttonType === ButtonTypes.Danger && "bg-red-700 text-white"}
        ${buttonType === ButtonTypes.Warning && "bg-yellow-700 text-white"}
        ${buttonType === ButtonTypes.Success && "bg-green-700 text-white"}
        ${buttonType === ButtonTypes.Info && "bg-blue-700 text-white"}
        ${buttonType === ButtonTypes.Light && "bg-gray-200 text-black"}
        ${buttonType === ButtonTypes.Dark && "bg-gray-800 text-white"}
        ${buttonType === ButtonTypes.Link && "bg-transparent text-blue-700"}
        ${buttonType === ButtonTypes.Slider && "bg-transparent text-blue-700"}
        ${isDisabled && "opacity-50 cursor-not-allowed"}
      `
      }
      type={"button"}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children ? children : null}
      {text}
    </button>
  );
};

export default Button;
