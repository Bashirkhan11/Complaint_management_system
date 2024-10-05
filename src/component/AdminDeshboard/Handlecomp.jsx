import React, { useEffect, useState } from 'react'
import Navbar from '../reused-component/Navbar'
import Asidbar from '../reused-component/Asidbar'
import Footer from '../reused-component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 export default function Handlecomp() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchdata = async ()=>{
    try{
      if(!token){
        navigate('/Asignin');
      }
        const response = await axios.get('http://localhost:5000/Ahandlecompbyteacher', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = response.data;
        if(!json.success){
          alert(json.message);
        }
        if(json.success){
          setData(json.handelcomp);
        }

    }catch(error){
      if(error){
        console.log(error, 'some error');
        alert(error.response.data.message);
      }
    }
    }
    fetchdata();
  }, [navigate, token]);


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
      <div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <td>
                  <strong>Id No</strong>
                </td>
                <td>
                  <strong>Name</strong>
                </td>
                <td>
                  <strong>Department</strong>
                </td>
                <td>
                  <strong>Complant</strong>
                </td>
                <td>
                  <strong>Teacher Feedback</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.option}</td>
                    <td>{data.department}</td>
                    <td>{data.message}</td>
                    <td>{data.teachersattus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>

     </>
   )
 }
