import React from "react";
import Props from "./index.type";

function Radio(props: Props) {
  const { className, ...others } = props;

  return (
    <input type="radio" className={`${className}`} {...others} />
  );
}

export default Radio;
