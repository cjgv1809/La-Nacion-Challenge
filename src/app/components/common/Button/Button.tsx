interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

function Button({
  text,
  className = "--btn --secondary",
  onClick,
}: ButtonProps) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
