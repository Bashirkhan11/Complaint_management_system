import React, { useState } from "react";
import Input from "./Input";
// import Image from "./Image";
import Button from "../reused-component/button";
import Footer from "./footer";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";


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
 fontSize: '1.2em',
 fontWeight: 'bold',
 color: 'white'
}

export default function SignInForm() {
  const navigate = useNavigate();
 const [login, setLogin] = useState({
  email:"",
  password:""
 });

const handlechange = (e)=>{
  const {name, value} = e.target;
  setLogin((p) => {
    return{
      ...p,
       [name]:value
      }})
}
const handlesubmit = async (e) =>{
  e.preventDefault()
  try {
    const response = await axios.post("http://localhost:5000/login", login)
  const json = response.data;
  console.log('response:', json);
  if(!json.success){
    alert(json.message);
  }
  if(json.success){
    localStorage.setItem("token", json.token);
    console.log('Token stored. Navigating to home page.');
    navigate('/Home');
  }
  } catch (error) {
    // if(error.response && error.response.status === 404){
      if(error){
      // alert(error.response.data.message);
      console.log(error);
    }
    // console.log(error);
    // alert("Something is wrong in your project");
  }

}

  return (
    <>
      <main className="form-signin m-auto  mt-5" style={khan}>
        <form onSubmit={handlesubmit}>
          {/* <Image /> */}
          <h1 className="h3 mb-3 fw-normal ms-5">
            <strong style={text}>Please Sign In</strong>
          </h1>
          <Input
            type={"email"}
            name={"email"}
            place={"Enter Email"}
            class={"name"}
            onchange = {handlechange}
            value = {login.email}
          />
          <Input
            type={"password"}
            name={"password"}
            place={"Enter Password"}
            class={"password"}
            onchange = {handlechange}
            value = {login.password}
          />
          <Button value={"Sign In"} class = {"btn btn-primary w-100 py-2"} />
          <div>
      <button
        type="button"
        className="btn btn-danger mt-1 w-100 py-2"
      >
        <Link className ="text-light list-group-item" to ="/signup"><strong>Sign Up!</strong></Link>
      </button>
    </div>
          <Footer />
        </form>
      </main>
    </>
  );
}
