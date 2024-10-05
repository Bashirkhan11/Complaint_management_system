import React, { useEffect, useState } from 'react'
import Main from '../reused-component/main' 
import Navbar from '../reused-component/Navbar'
import Asidbar from '../reused-component/Asidbar'
import Footer from '../reused-component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
 export default function AllAdmincomp() {
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(()=>{
    try {
      if(!token){
        navigate('/Asignin');
      }
    const fetchallcompadmin = async() =>{
        const response = await axios.get('http://localhost:5000/Adminallcomp', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const json = response.data;
        if(!json.success){
          console.log('no response comes from backend')
        } 
        if(json.success){
          console.log('some data comes from database');
          // alert(json.message);
          setComplaint(json.get);
        }
      }
      fetchallcompadmin();
      } catch (error) {
        if(error){
          console.log(error);
          alert(error.response.data.message);
        }
    }
  }, [token, navigate]);


  const handledeleteclick = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:5000/Admindeletecomp/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = response.data;
        if(!json.success){
          console.log('no response comes from database');
          alert(json.message);
        }
        if(json.success){
          console.log('some data comes from database');
          alert(json.message);
          setComplaint(complaint.filter(v => v._id !== id));
        }
    } catch (error) {
      if(error){
        console.log(error);
        alert(error.response.data.message);
      }
    }
  }



   return ( 
    <>  
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
        path = {'/Asignin'}
      />
    <div className='container'>
    <Main data = {complaint}  deldata = {handledeleteclick}/>
    </div>
      <Footer />
    </div>

     </>
   )
 }
