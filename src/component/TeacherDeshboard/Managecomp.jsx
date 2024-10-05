import React, { useEffect, useState } from 'react'
import Main from '../reused-component/main' 
import Navbar from '../reused-component/Navbar'
import Asidbar from '../reused-component/Asidbar'
import Footer from '../reused-component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
 export default function  Managecomp() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(()=>{
    const fetchdata = async ()=>{
      try {
        if(!token){
          navigate('/Asignin');
        }
        const response = await axios.get('http://localhost:5000/tgetmanagecomofself', {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
          }
        });
        const json = response.data;
        if(!json.success){
          alert(json.message);
        }
        if(json.success){
          setData(json.get);
        }
      } catch (error) {
        if(error){
          console.log(error.response.data.message);
        }
      }
    }
    fetchdata();
  }, [token, navigate]);

  const handledeleteclick = async (id)=>{
     try {
      const deletedata = await axios.patch(`http://localhost:5000/tupdatedata/${id}`);
      const json = deletedata.data;
      if(!json.success){
        alert(json.message);
      } 
      if(json.success){
        setData(data.filter(v => v._id !== id));
      }
     } catch (error) {
      if(error){
        alert(error.deletedata.data.message);
        console.log(error);
      }
     }
  }


   return ( 
    <>  
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

     <div className='container'>
       <Main data = {data} deldata = {handledeleteclick}/>
     </div>
     <Footer />

     </>
   )
 }
 