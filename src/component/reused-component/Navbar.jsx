import React from "react";
import Listitem from "./Listitem";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" >
        <div className="container-fluid">
          <Link to ={props.homepath} className="text-decoration-none">
          <strong className="navbar-brand text-light">{props.nav}</strong>
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Listitem
                class={"nav-item"}
                classa={"nav-link active text-light"}
                current={"page"}
                value={props.firstli}
                path = {props.homepath}              
              />
              <Listitem
                class={"nav-item"}
                classa={"nav-link text-light"}
                value={props.secondli} 
                path = {props.aboutpath}               
              />
              <Listitem
                class={"nav-item"}
                classa={"nav-link text-light"}
                value={props.thirdli}  
                path = {props.contactpath}              
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
