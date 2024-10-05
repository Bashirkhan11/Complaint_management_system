import React from "react";
import Input from "./Input";
// import Image from "./Image";
import Button from "../reused-component/button";
import Footer from "./footer";


export default function Change() {
  return (
    <>
    <main className="form-signin w-100 m-auto mt-5">
        <form>
        {/* <Image /> */}
         <h1 className="h3 mb-3 fw-normal ms-5"><strong>Change Password</strong></h1>
        <Input type={"password"} name={"password"} place={"Enter New password"} class={"name"} />
        <Input type={"password"} name={"password"} place={"Confirm Password"} class={"password"} />
        <Button value={"Change Password"} class = {"btn btn-primary w-100 py-2"} />
        <Footer />
        </form>
      </main>
    </>
  )
}
