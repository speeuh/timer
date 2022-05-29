import React from "react";

import style from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: () => void;
}

function Button({ onClick, text, type }: Props) {
  return (
    <button type={type} onClick={onClick} className={style.botao}>
      {text}
    </button>
  );
}

export default Button;
