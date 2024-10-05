import React, {useEffect} from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
// import Main from "../reused-component/main";
import Footer from "../reused-component/Footer";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

export default function  Admindesh() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(()=>{
    const logout =()=>{
      if(!token){
        navigate('/Asignin');
      }
    }
    logout();
  },[token, navigate])


  return (
    <div>
      <Navbar
        firstli={"Home"}
        secondli={"About_Us"}
        thirdli={"Contact_Us"}
        nav = {"Students Complants System"}
        homepath = {"/HomeA"}
        aboutpath = {"/AboutA"}
        contactpath = {"/ContactA"}
      />

      <Asidbar
        firstli={"All Complants"}
        secondli={"Complante_HandleBy_Teachers"}
        thridli={"UnHandle-Complante"}
        fourthli={"Teachers&Admin_Sign_up"}
        fifthli={"Log_Out"}
        deshboard={"Admin_Deshboard"}
        firstpath={"/ComplantA"}
        secondpath={"/HandlecompA"}
        thridpath={"/ManagecompA"}
        fourthpath={"/Teachersignup"}
        fifthlipath={"/A_Logout"}
        path = {'/Asignin'}
      />
     <div className="container mt-3 text-center ">
     <div className="row row-cols-1 row-cols-md-3  row-cols-lg-5 g-2 g-lg-3">
      <Cards /> 
      </div>
      </div>
      <Footer />
    </div>
  );
}