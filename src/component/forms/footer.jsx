import React from "react";


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="mt-4 mb-3 text-body-secondary ms-5">
        <strong style={{color: 'white'}}>CopyRight &copy; {year}</strong>
      </p>
    </div>
  );
}
