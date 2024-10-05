import React from "react";
import { Link } from "react-router-dom";

export default function Listitem(props) {
  return (
    <div           onClick={props.onclick}>
      <li className={props.class}>
        <Link
          className={props.classa}
          aria-current={props.current}
          to={props.path}
        >
          <strong className="text-light">{props.value}</strong>
        </Link>
      </li>
    </div>
  );
}
