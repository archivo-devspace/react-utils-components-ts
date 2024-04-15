import React from "react";
import Props from "./index.type";

function Label(props: Props) {
  const { className, children, ...others } = props;

  return (
    <label className={`${className}`} {...others}>
      {children}
    </label>
  );
}

export default Label;
