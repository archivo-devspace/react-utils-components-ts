import React from "react";
import Props from "./index.type";
import Label from "../Label";

function FormGroup(props: Props) {
  const {
    className,
    label,
    formField,
    required = false,
    validationErrorMessage,
    ...others
  } = props;

  return (
    <div className={`${className}`} {...others}>
      <div>
        {typeof label === "string" ? <Label>{label}</Label> : label}
        {required && <b style={{ color: "red" }}>*</b>}
      </div>
      <div>{formField}</div>
      {validationErrorMessage && (
        <span style={{ color: "red" }}>{validationErrorMessage}</span>
      )}
    </div>
  );
}

export default FormGroup;
