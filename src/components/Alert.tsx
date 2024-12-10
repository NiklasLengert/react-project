interface Props {
  alertText: string;
}

const Alert = ({ alertText }: Props) => {
  return <div className="alert alert-primary">{alertText}</div>;
};

export default Alert;
