import { useState } from "react";

import "./styles.css";

type Props = {
  placeholder: string;
};

export default function Input(props: Props) {
  const [value, setValue] = useState("");

  return (
    <input
      className="Input"
      placeholder={props.placeholder}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
