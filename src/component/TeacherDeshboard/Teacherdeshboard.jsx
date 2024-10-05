import React, {useEffect} from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
// import Main from "../reused-component/main";
import Footer from "../reused-component/Footer";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

export default function Teacherdeshboard() {

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
        nav = {"Students Complants"}
        homepath = {"/HomeT"}
        aboutpath = {"/AboutT"}
        contactpath = {"/ContactT"}
      />

      <Asidbar
        firstli={"Complants_On_You"}
        secondli={"Handle_Complante"}
        thridli={"Manage-Complante"}
        fourthli={"Message_On_Complant"}
        fifthli={"Log_Out"}
        deshboard={"Teacher_Deshboard"}
        firstpath={"/ComplantT"}
        secondpath={"/HandlecompT"}
        thridpath={"/ManagecompT"}
        fourthpath={"/MessagecompT"}
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
