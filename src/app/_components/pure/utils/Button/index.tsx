import React from "react";
import Props from "./index.type";

function Button(props: Props) {
  const { children, className, ...others } = props;

  return (
    <button className={`${className}`} {...others}>
      {children}
    </button>
  );
}

export default Button;