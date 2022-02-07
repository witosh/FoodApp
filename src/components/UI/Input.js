import React from "react";
import calsses from "./Card.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={calsses.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
