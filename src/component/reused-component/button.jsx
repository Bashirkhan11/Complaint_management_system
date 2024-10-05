import React from "react";


export default function Button(props) {
  return (
    <div>
      <button
        type={props.type}
        className={props.class}
        aria-controls={props.controls}
        data-bs-target={props.target}
        data-bs-toggle={props.toggle}
        data-bs-dismiss={props.dismiss}
        aria-expanded ={props.expanded}
      >
        <strong>{props.value}</strong>
        <span className={props.span}></span>
      </button>
    </div>
  );
}
