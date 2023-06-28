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
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  buttonType: ButtonTypes;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, buttonType }) => {
  return (
    <button
      className={`bg-green-700 justify-center items-center p-4 rounded-md text-white`}
      type='submit'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
