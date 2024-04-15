import React from "react";
import Props from "./index.type";

function Input(props: Props) {
  const { className, addOns, ...others } = props;

  return (
    <input className={`${className}`} {...addOns} {...others}  />
  );
}

export default Input;
