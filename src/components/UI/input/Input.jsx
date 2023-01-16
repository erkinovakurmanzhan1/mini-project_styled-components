import React from "react";
import "./Input.css";

const Input = ({ labelname,...props }) => {
  return (
    <div>
      <label >{labelname}</label>
      <input type="text" className="input" {...props} />
      
    </div>
  );
};

export default Input;
