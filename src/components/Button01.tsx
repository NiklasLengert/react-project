interface Props {
  BtnText: string;
  onClick: () => void;
}

const Button01 = ({ BtnText, onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {BtnText}
    </button>
  );
};

export default Button01;
