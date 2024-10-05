import React, { useEffect, useState } from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
import Footer from "../reused-component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Successcomp() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        if(!token){
          navigate('/signin');
        }
        const response = await axios.get("http://localhost:5000/handlecomp", {
          headers: {
            // Corrected 'header' to 'headers'
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const json = response.data;
        if (!json.success) {
          // alert(response.data.message);
        } else {
          setData(json.get);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      }
    };
    fetchdata();
  }, [token, navigate]);

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
  );
}
