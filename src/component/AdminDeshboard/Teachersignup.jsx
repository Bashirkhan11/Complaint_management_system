import React, {useEffect} from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
import Footer from "../reused-component/Footer";
import Form from "./form";
import { useNavigate } from "react-router-dom";


export default function Teacherlogin() {

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
    <>
      <div>
        <Navbar
          firstli={"Home"}
          secondli={"About_Us"}
          thirdli={"Contact_Us"}
          nav={"Students Complants System"}
          homepath={"/HomeA"}
          aboutpath={"/About"}
          contactpath={"/Contact"}
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
        />
        <div className="container">
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
}
