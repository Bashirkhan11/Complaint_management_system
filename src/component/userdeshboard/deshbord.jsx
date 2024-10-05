import React, { useEffect } from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
import Card from "./Cards";
import Footer from "../reused-component/Footer";
import { useNavigate } from "react-router-dom";

export default function Deshbord() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(()=>{
    const logout =()=>{
      if(!token){
        navigate('/signin');
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
        nav = {"Complant About Teachers"}
        homepath = {"/Home"}
        aboutpath = {"/About"}
        contactpath = {"/Contact"}
      />

      <Asidbar
        firstli={"Create-Complant"}
        secondli={"See_All_Complante"}
        thridli={"Unsuccess-Complante"}
        fourthli={"Success_Complante"}
        fifthli={"Log_Out"}
        deshboard={"User_Deshboard"}
        firstpath={"/Createcomp"}
        secondpath={"/Allcomp"}
        thridpath={"/unsuccesscomp"}
        fourthpath={"/successcomp"}
        path = {'/signin'}
      />

           <div className="container">
           <Card />
           </div>

      <Footer />
    </div>
  );
}
