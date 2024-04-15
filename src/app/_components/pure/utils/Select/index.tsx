import React from "react";
import Props from "./index.type";

function Select(props: Props) {
  const { className, defaultValue, children, addOns, ...others } = props;

  return (
    <select defaultValue={defaultValue} className={`${className}`} {...addOns} {...others}>
      {children}
    </select>
  );
}

export default Select;
