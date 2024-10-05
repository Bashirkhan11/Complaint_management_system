import React from "react";
import Button from "./button";
import Listitem from "./Listitem";



export default function Asidbar(props) {


  const handleLogout = () => {
    // Clear the JWT token

    localStorage.removeItem('token');   
    
    sessionStorage.removeItem('token');

  }



  return (
    <>
      <Button
        class={"btn btn-primary ms-1  mt-1"}
        type={"button"}
        controls={"offcanvasScrolling"}
        target={"#offcanvasScrolling"}
        toggle={"offcanvas"}
        value={"Click"}
      />

      <div
        className="offcanvas offcanvas-start bg-primary"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-light ms-5"
            id="offcanvasSc rollingLabel"
          >
            {props.deshboard}
          </h5>
          <button
            type="button"
            className="btn-close bg-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-light ">
          <ul className="list-unstyled ">
            <Listitem
              class={`mt-5 pb-2 pt-2 text-center text-light bg-primary rounded-5`}
              classa={"text-decoration-none"}
              value={props.firstli}
              path={props.firstpath}
            />
            <Listitem
              class={"mt-5 pb-2 pt-2 text-center text-light bg-primary rounded-5"}
              classa={"text-decoration-none"}
              value={props.secondli}
              path={props.secondpath}
            />
            <Listitem
              class={"mt-5 pb-2 pt-2 text-center text-light bg-primary rounded-5"}
              classa={"text-decoration-none"}
              value={props.thridli}
              path={props.thridpath}
            />
            <Listitem
              class={"mt-5 pb-2 pt-2 text-center text-light bg-primary rounded-5"}
              classa={"text-decoration-none"}
              value={props.fourthli}
              path={props.fourthpath}
            />
            <Listitem
              class={"mt-5 pb-2 pt-2 text-center text-light bg-primary rounded-5"}
              classa={"text-decoration-none"}
              value={props.fifthli}
              // path = {props.fifthpath}
              onclick = {handleLogout}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
