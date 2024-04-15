import React from "react";
import Props from "./index.type";

function Checkbox(props: Props) {
  const { className, ...others } = props;

  return (
    <input
      type="checkbox"
      className={`${className}`}
      {...others}
    />
  );
}

export default Checkbox;
