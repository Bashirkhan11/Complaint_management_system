import React, { useEffect, useState } from 'react'
import Navbar from '../reused-component/Navbar'
import Asidbar from '../reused-component/Asidbar'
import Footer from '../reused-component/Footer'
import Main from '../reused-component/main'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function AllComp() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [complaint, setComplaint] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!token){
          navigate('/signin');
        }
        const response = await axios.get('http://localhost:5000/usergetcomp',
           { headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${token}` 
        }}); 
        setComplaint(response.data.get); // Assuming 'get' contains the complaints array
        // console.log(response.data);
        // alert(response.data.message);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };

    fetchData();
  }, [token, navigate]);


const Deldata = async (id)=>{

        try {
          const response = await axios.delete(`http://localhost:5000/deletecomp/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = response.data;
        if(!json){
          alert(json.message);

        }
        if(json){
          setComplaint(complaint.filter(v => v._id !== id));
        }
      }
 catch (error) {
        if(error){
        console.log(error, id);
        alert(error.response.data.message);
        }
    }
}




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
      <Main data = {complaint} deldata =  {Deldata} />

      <Footer />

    </div>
  )
}
