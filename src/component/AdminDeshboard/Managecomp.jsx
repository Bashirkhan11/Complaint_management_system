import React, { useEffect, useState } from 'react'
import Navbar from '../reused-component/Navbar'
import Asidbar from '../reused-component/Asidbar'
import Footer from '../reused-component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const khan = {
  position: "absolute",
  right: "200%",
  transition: "right 0.5s ease",

}

const khan1 = {
  position: "absolute",
  right: "7%",
  top: "40%",
  backgroundColor: "white",
  transition: "right 0.5s ease",
  width: '87%',
  zIndex: "100",
}


 export default function Managecomp() {

  const navigate = useNavigate();
  const [textareavaue, setTextareavaue] = useState({textarea:""});
  const [showtextarea, setShowtextarea] = useState(false);
  const [complaintid, setComplaintid] = useState('');

  const handletextareachange = (e)=>{
    const {name, value} = e.target;
    setTextareavaue(p => {
      return {
        ...p, 
        [name]:value
      } })
  }

  const onclickfortextarea = async (id) => {
    setShowtextarea(!showtextarea);
    setComplaintid(id);
  };

  const handeleupdateclick = async (id)=>{
    try{
      const response = await axios.patch(`http://localhost:5000/updatadminstatus/${id}`, textareavaue);
      const json = response.data;
      if(!json.success){
        alert(json.message);
      }
      if(json.success){
        setTextareavaue({textarea:""});
        setShowtextarea(!showtextarea);
        setComplaintid("");

      }
    }catch(error){
      if(error){
        console.log(error);
        alert(error.json.message);
      }
    }
  }

const token = localStorage.getItem('token');

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchunsuccessdata = async () =>{
      try {
          if (!token){
            navigate('/Asignin');
          }
        const response = await axios.get('http://localhost:5000/Aunsuccesscomp', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = response.data;
        if(!json.success){
          alert(json.message);
        }
        if(json.success){
          setData(json.handledata);
        }
      }catch(error){
        if(error){
          console.log(error);
          alert(error.response.data.message);
        }
      }
    }
    fetchunsuccessdata();
  }, [navigate,token])


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
      <div style={{ position: "relative", width: "100%" }}>
        <div
          className=" form-floating "
          style={!showtextarea ? khan : khan1}
        >
          <textarea
            onChange = {handletextareachange}
            className="form-control"
            id="Textarea1"
            style={{ height: "100px" }}
            name = 'textarea'
            value={textareavaue.textarea}
          ></textarea>
          <label htmlFor="Textarea1">
            <strong>Eenter Your Feedback Message Here.....!</strong>
          </label>
          <button type="button" onClick = {()=>{handeleupdateclick(complaintid)}} className="btn btn-primary form-control mt-2">
            <strong>Submit</strong>
          </button>
        </div>
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
                  <strong>Teacher Feedback</strong>
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
                    <td>{data.teachersattus}</td>
                    <td>{data.adminsattus}</td>
                    <td> 
                      <button
                        onClick={()=>{onclickfortextarea(data._id)}}
                        type="button"
                        className="btn btn-primary"
                      >
                        Message
                      </button>
                      </td>
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
