import React from 'react'
import Navbar from '../reused-component/Navbar';
import Footer from '../reused-component/Footer';

export default function Contact(props) {
  return (
    <>
        <Navbar
        firstli={"Home"}
        secondli={"About_Us"}
        thirdli={"Contact_Us"}
        nav = {"Students Complants System"}
        homepath = {props.path}
        aboutpath = {props.path1}
        contactpath = {props.path2}
      />


      <Footer />
    </>
  )
}
