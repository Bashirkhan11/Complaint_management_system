import React, { useState } from "react";
import Input from "../forms/Input";
import Button from "../reused-component/button";
import Footer from "../forms/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

export default function Adminlogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((p) => {
      return { ...p, [name]: value };
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/Adminlogin",
        data
      );
      const json = response.data;
      if (!json.success) {
        alert(json.message);
      }
      if (json.success) {
        if (json.get.Designation === "Admin") {
          localStorage.setItem("token", json.token);
          navigate("/HomeA");
        } else {
          localStorage.setItem("token", json.token);
          navigate("/HomeT");
        }
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto mt-5" style={khan}>
        <form onSubmit={handlesubmit}>
          {/* <Image /> */}
          <h1 className="h3 mb-3 fw-normal ms-5">
            <strong style={text}>Admin & Teacher Sign In!</strong>
          </h1>
          <Input
            type={"email"}
            name={"email"}
            place={"Enter Email"}
            class={"name"}
            onchange={handlechange}
            value={data.email}
          />
          <Input
            type={"password"}
            name={"password"}
            place={"Enter Password"}
            class={"password"}
            onchange={handlechange}
            value={data.password}
          />
          <Button value={"Sign In!"} class={"btn btn-primary w-100 py-2"} />
          <Footer />
        </form>
      </main>
    </>
  );
}
