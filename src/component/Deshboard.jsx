import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./reused-component/Navbar";
import Footer from "./reused-component/Footer";
import Crousel from "./Crousel";

const khan = {
  backgroundImage: `url("/image/imeges5.png")`,
  backgroundColor: "#cc8800",
  borderRadius: "7px",
};
const text = {
  fontFamily: "Edu AU VIC WA NT Guides",
  fontOpticalSizing: "auto",
  fontStyle: "normal",
  fontSize: "0.6em",
  fontWeight: "bold",
  color: "white",
};

export default function Deshboard() {
  return (
    <div>
      <Navbar
        firstli={"User_LogIn"}
        secondli={"Teacher_LogIn"}
        thirdli={"Admin_LogIn"}
        nav={"Students Complants"}
        homepath={"/Tsignin"}
        aboutpath={"/Asignin"}
        contactpath={"/Asignin"}
      />
      <Crousel />
      <div className="container mt-5 text-center " >
      <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-2 g-lg-4" >
        <div className="col container mt-2 mb-5 ms-1 col " style={{backgroundColor: "#cc8800"}}>
            <div className="card">
              <div className="card-body" style={khan} >
                <h3 className="card-title"><strong style={text}>User_SignUp</strong></h3>
                <Link to="/signup" className="btn btn-danger">
                  <strong>SignUp</strong>
                </Link> 
              </div> 
            </div>
          </div>
          <div className="col container mt-2 mb-5 ms-1 " style={{backgroundColor: "#cc8800"}}>
            <div className="card">
              <div className="card-body" style={khan}>
                <h3 className="card-title"><strong style={text}>User_SignIn</strong></h3>
                <Link to="/signin" className="btn btn-danger">
                  <strong>Signin!</strong>
                </Link>
              </div>
            </div>
          </div>
          <div className="col container mt-2 mb-5 ms-1" style={{backgroundColor: "#cc8800"}}>
            <div className="card">
              <div className="card-body" style={khan}>
                <h3 className="card-title"><strong style={text}>Admin-&-Teacher SignIn</strong></h3>
                <Link to="/Asignin" className="btn btn-danger">
                  <strong>Signin!</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
