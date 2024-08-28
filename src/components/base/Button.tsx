interface ButtonProps {
  text: string;
  buttonStyle?: string;
  disable?: boolean;
  onClick: () => void;
}

const Button = ({
  text,
  buttonStyle,
  disable = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-primary-100 text-white py-2 px-4 ${buttonStyle}`}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
