import React from "react";
import Input from "./Input";
// import Image from "./Image";
import Button from "../reused-component/button";
import Footer from "./footer";
export default function Forget() {
  return (
    <>
      <main className="form-signin w-100 m-auto mt-5">
        <form>
          {/* <Image /> */}
          <h1 className="h3 mb-3 fw-normal ms-5">
            <strong>Forget Password</strong>
          </h1>
          <Input
            type={"email"}
            name={"email"}
            place={"Enter Email"}
            class={"name"}
          />
          <Button value={"Enter"} class = {"btn btn-primary w-100 py-2"} />
          <Footer />
        </form>
      </main>
    </>
  );
}
