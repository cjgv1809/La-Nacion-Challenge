interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <div className="col-12 hlp-text-center hlp-margintop-40">
      <button type="button" className="--btn --secondary">
        {text}
      </button>
    </div>
  );
}

export default Button;
