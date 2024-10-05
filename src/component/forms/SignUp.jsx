import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
// import Image from "./Image";
import Button from "../reused-component/button";
import Footer from "./footer";
import { useNavigate } from "react-router-dom"; // Update this line
import { Link } from "react-router-dom";

const khan = {
   backgroundImage: `url("/image/imeges5.png")`,
   backgroundColor: '#cc8800',
   borderRadius: '7px'
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

export default function SignUp() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    gender: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setSignup((p) => {
      return { ...p, [name]: value };
    });
  };

  const handleGenderChange = (gender) => {
    setSignup((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignup({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repassword: "",
      gender: "",
    });
    const { firstname, lastname, email, password, repassword, gender } = signup;
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !repassword ||
      !gender
    ) {
      alert("Please fill all the filed");
    }
    if (password !== repassword) {
      alert("Password are not match");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/users",
          signup
        );
        alert(response.data.message);
        navigate("/signin");
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message);
        } else {
          alert("Something went Wromg!. please try again later!");
        }
        console.log(error);
      }
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto " style={khan}>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* <Image /> */}
          <h1 className="h3 mb-3 fw-normal ms-5">
            <strong style={text}>Please Sign Up</strong>
          </h1>
          <Input
            type={"text"}
            name={"firstname"}
            place={"Enter First Name"}
            class={"name"}
            value={signup.fname}
            onchange={handlechange}
          />
          <Input
            type={"text"}
            name={"lastname"}
            place={"Enter Last Name"}
            class={"khan"}
            value={signup.lname}
            onchange={handlechange}
          />
          <Input
            type={"email"}
            name={"email"}
            place={"Enter Email"}
            class={"khan"}
            value={signup.email}
            onchange={handlechange}
          />
          <Input
            type={"password"}
            name={"password"}
            place={"Enter Password"}
            class={"khan"}
            value={signup.password}
            onchange={handlechange}
          />
          <Input
            type={"password"}
            name={"repassword"}
            place={"Confirm Password"}
            class={"password"}
            value={signup.repassword}
            onchange={handlechange}
          />

          <div className="dropdown mt-2 mb-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Gender
            </button>
            <ul className="dropdown-menu">
              <li
                className="dropdown-item bg-info mt-1 d-flex justify-content-center "
                style={{ cursor: "pointer" }}
                onClick={() => handleGenderChange("Male")}
              >
                <strong>Male</strong>
              </li>
              <li
                className="dropdown-item bg-info mt-1 d-flex justify-content-center "
                style={{ cursor: "pointer" }}
                onClick={() => handleGenderChange("Female")}
              >
                <strong>Female</strong>
              </li>
              <li
                className="dropdown-item bg-info mt-1 d-flex justify-content-center "
                style={{ cursor: "pointer" }}
                onClick={() => handleGenderChange("Other")}
              >
                <strong>Other</strong>
              </li>
            </ul>
          </div>

          <Button value={"Sign Up"} class={"btn btn-primary w-100 py-2"} />
          <div>
            <button type="button" className="btn btn-danger mt-1 w-100 py-2">
              <Link className="text-light list-group-item" to="/signin">
                <strong>Already User</strong>
              </Link>
            </button>
          </div>
          <Footer />
        </form>
      </main>
    </>
  );
}
