import React from "react";

export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <>
      <div className="card text-center bg-primary ">
        <div className="card-body">
          <h5 className="card-title text-light">This is just demo project</h5>
          <p className="card-text text-light">
           Here we are using React and Bootstrip to create this project and to connect our project with database using Node.js and MongoDB
          </p>
        </div>
        <div className="card-footer text-body-secondary">
          <p>
            <strong className="text-light">CopyRight &copy; {Year}</strong>
          </p>
        </div>
      </div>
    </>
  );
}
