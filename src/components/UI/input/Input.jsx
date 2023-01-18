import React from "react";
import style from "./Input.module.css";

const Input = ({ labelname,...props }) => {
  return (
    <div>
      <label className={style.label}>{labelname}</label>
      <input className={style.input} type="text" {...props} />
      
    </div>
  );
};

export default Input;
