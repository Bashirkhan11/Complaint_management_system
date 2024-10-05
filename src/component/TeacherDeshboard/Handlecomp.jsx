import React, { useEffect, useState } from "react";
import Navbar from "../reused-component/Navbar";
import Asidbar from "../reused-component/Asidbar";
import Footer from "../reused-component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Handlecomp() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        if(!token){
          navigate('/Asignin');
        }
        const response = await axios.get(
          "http://localhost:5000/tgetcomhindleofself",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        if (!json.success) {
          alert(json.message);
        }
        if (json.success) {
          setData(json.get);
        }
      } catch (error) {
        if (error) {
          console.log(error.response.data.message);
        }
      }
    };
    fetchdata();
  }, [token, navigate]);

  return (
    <>
      <Navbar
        firstli={"Home"}
        secondli={"About_Us"}
        thirdli={"Contact_Us"}
        nav={"Students Complants"}
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
        path={"/Asignin"}
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
                  <strong>My Feedback</strong>
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
    </>
  );
}
