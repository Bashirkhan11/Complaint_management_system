import React, { useState } from "react";
import Input from "../forms/Input";
import Button from "../reused-component/button";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const formsigninkhan ={

  borderRadius: '0'
}

const formsigninpassword={
  marginBottom: '10px',
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0'
}

const khan = {
  backgroundImage: `url("/image/imeges5.png")`,
  backgroundColor: "#cc8800",
  borderRadius: "7px",
};
const text = {
  position: "relative",
  fontFamily: "Edu AU VIC WA NT Guides",
  fontOpticalSizing: "auto",
  fontStyle: "normal",
  fontSize: "0.6em",
  fontWeight: "bold",
  color: "white",
};


export default function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname:"",
    email:"",
    password:"",
    repassword:"",
    Designation:""
  });
  const handlechange = (e) => {
    const {name, value} = e.target;
    setData((p)=>{
      return {...p, [name]:value}
    })
  }
  const handleDesignationChange = (Designation)=>{
    setData((p)=>{
      return{...p, Designation}
    })
  }
  const handlesubmit = async (e) =>{
    e.preventDefault();
    setData({
      firstname:"",
      email:"",
      password:"",
      repassword:"",
      Designation:""
    });
   try {
    const response = await axios.post('http://localhost:5000/Acreatepost', data);
    const json = response.data;
    if(!json.success){
      alert(json.message)
    }
    if(json.success){
      console.log('user successfully created!')
      alert(json.message);
      navigate('/Teachersignup')
    }
   } catch (error) {
    console.log(error);
    alert(error.response.data.message);
   }

  }
  return (
    <>
        <div>
          <main className="form-signin w-100 m-auto " style={khan}>
            <form onSubmit={handlesubmit}>
              {/* <Image /> */}
              <h1 className="h3 mb-3 fw-normal ms-5">
                <strong style={text}>Admin & Teachers Sign Up!</strong>
              </h1>
              <Input
                type={"text"}
                name={"firstname"}
                place={"Enter Full Name"}
                class={"name"}
                value={data.firstname}
                onchange={handlechange}
              />
              <Input
                style ={formsigninkhan}
                type={"email"}
                name={"email"}
                place={"Enter Email"}
                value={data.email}
                onchange={handlechange}
              />
              <Input
              style={formsigninkhan}
                type={"password"}
                name={"password"}
                place={"Enter Password"}
                value={data.password}
                onchange={handlechange}
              />
              <Input
              style ={formsigninpassword}
                type={"password"}
                name={"repassword"}
                place={"Confirm Password"}
                value={data.repassword}
                onchange={handlechange}
              />

              <div className="dropdown mt-2 mb-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Designation
                </button>
                <ul className="dropdown-menu">
                  <li
                    className="dropdown-item bg-info mt-1 d-flex justify-content-center "
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDesignationChange("Admin")}
                  >
                    <strong>Admin</strong>
                  </li>
                  <li
                    className="dropdown-item bg-info mt-1 d-flex justify-content-center "
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDesignationChange("Teacher")}
                  >
                    <strong>Teacher</strong>
                  </li>
                </ul>
              </div>

              <Button value={"Sign Up"} class={"btn btn-primary w-100 py-2"} />
              <div>
                <button
                  type="button"
                  className="btn btn-danger mt-1 w-100 py-2"
                >
                  <Link className="text-light list-group-item" to="/signin">
                    <strong>Already User</strong>
                  </Link>
                </button>
              </div>
            </form>
          </main>
        </div>
    </>
  );
}
