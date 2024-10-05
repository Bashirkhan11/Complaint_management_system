import React, { useEffect, useState } from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
import Footer from "../reused-component/Footer";
import Input from "../forms/Input";
import Button from "../reused-component/button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const khan = {
  backgroundImage: `url("/image/imeges5.png")`,
  backgroundColor: '#cc8800',
  borderRadius: '7px',
}
const text = {
 position: "relative",
 fontFamily: "Edu AU VIC WA NT Guides",
 fontOpticalSizing: 'auto',
 fontStyle: 'normal',
 fontSize: '0.6em',
 fontWeight: 'bold',
 color: 'white'
}

export default function Createcomp() {
  const navigate = useNavigate();
  const [createcomp, setCreatecomp] = useState({
    department:"",
    complaint:"",
    option:"",
    message:""
  });
  const [teachername, setTeachername] = useState([]);

  // let userId = localstorage.Item(json.token);


  const handlechange = (e)=> {
    const {name, value} = e.target;
    setCreatecomp((p) => {
      return {...p,
        [name]:value
      }
    })
  }

  // const handledesignation =(option)=>{
  //   setCreatecomp((p)=>{
  //     return { ...p,
  //       option,
  //     }
  //   })
  // }

const token = localStorage.getItem('token');


  const handlesubmit = async (e) =>{
    e.preventDefault();
    setCreatecomp({
      department:"",
      complaint:"",
      option:"",
      message:""
    });
   try {
    if(!createcomp.department || !createcomp.complaint || !createcomp.option || !createcomp.message){
      alert("please fill all the fields");
    }
    else{
      const response = await axios.post(
        'http://localhost:5000/createcomp',
        { ...createcomp },
        { headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${token}` } } // Send token in headers
      );
        alert(response.data.message); 
        navigate("/Allcomp");
    }
   } catch (error) {
    console.log(error);
    alert(error.response.data.message);
   }
  }

   useEffect(()=>{
    const fetchteachername = async () =>{
      try {
        if(!token){
          navigate('/signin');
        }
        const response = await axios.get('http://localhost:5000/usergetteachername', {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const json = response.data;
        if(!json.success){
          alert(json.message);
        }
        if(json.success){
          // jaon.Designation
          setTeachername(json.teachernames);
        }
      } catch (error) {
       if(error){
        console.log(error.response.data.message);
       } 
      }
    }
    fetchteachername();
   },[token, navigate])


  return (
    <div>
      <Navbar
        firstli={"Home"}
        secondli={"About_Us"}
        thirdli={"Contact_Us"}
        nav={"Complant About Teachers"}
        homepath={"/Home"}
        aboutpath={"/About"}
        contactpath={"/Contact"}
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
      <div className="container  mb-3">
        <main className="form-signin w-100 m-auto  " style={khan}>
          <h1><strong style={text}>Create Your Complaints</strong></h1>
          <form className="form" onSubmit={handlesubmit}>
            <label>
              <strong>Department!</strong>
            </label>
            <Input
              type={"text"}
              place={"Enter Department Name ....!"}
              name = {"department"}
              value = {createcomp.department}
              onchange = {handlechange}
            />

            <label>
              <strong>Teacher Name!</strong>
            </label>
            <select className="form-control" onChange={handlechange}  name="option" value = {createcomp.option}>
              <option className="form-control">Select Name ---</option>
              {teachername.map((value, index)=>{
                return <option className="form-control" key = {index}>{value.firstname}</option>
              })}
            </select>

            <label className="form-label">
              <strong>Complant About!</strong>
            </label>
            <Input
               type={"text"}
              place={"Complant About Attendence ....!"}
              name = {"complaint"}
              value = {createcomp.complaint}
              onchange = {handlechange}
            />

            <label>
              <strong>Complant!</strong>
            </label>
            <div className="form-floating">
              <textarea
                name="message"
                value = {createcomp.message}
                onChange = {handlechange}
                className="form-control"
                place="Leave a comment here"
                id="floatingTextarea2"
                style={{height: "100px"}}
              ></textarea>
              <label htmlFor="floatingTextarea2"><strong>Enter Your Complant Here....</strong><strong/></label>
            </div>

            <Button
              class={"form-control btn btn-primary mt-2"}
              btn={"Submit"}
              value={"Submit"}
            />
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}
