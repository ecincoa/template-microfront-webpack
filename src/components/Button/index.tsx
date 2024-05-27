import "./styles.css";

type Props = {
  text: string;
  onClick: () => void;
};

export default function Button(props: Props) {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
