import React from "react";
import "../Styles/FormInput.css";

function FormInput(props) {
  return (
    <div className="app">
      <form>
        <input ref={props.refer} placeholder={props.placeholder} />
      </form>
    </div>
  );
}

export default FormInput;
