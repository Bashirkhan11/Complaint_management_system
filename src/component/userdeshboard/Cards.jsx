import React from "react";

const khan = {
  width: "100%",
  height: "260px",
  position: "relative",
  fontFamily: "Edu AU VIC WA NT Guides",
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontSize: '2em',
  fontWeight: 'bold'
};
const khan1 = {
  position: "absolute",
  top: "60%",
  color: 'white'
}
const paragraph = {
  fontFamily: "Oleo Script Swash Caps",
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  color: 'white',
  fontSize: '1.2em'
}

export default function Cards() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mb-3"
        data-bs-ride="carousel"
        style={{
          width: " 100%",
          backgroundImage: `url("/image/imeges5.png")`,
          backgroundColor: "#cc8800",
          position: "relative",
        }}
      >
        <div className="container carousel-inner">
          <div className="container carousel-item active">
            <h3 className="d-flex justify-content-center" style={khan}>
              <strong style={khan1}> Create Complaint </strong>
            </h3>
            <p style={paragraph}>
              In this section, you can view the status of your submitted
              complaints. Stay informed about any updates, resolutions, or
              actions taken regarding your concerns. We believe in transparency
              and want you to feel empowered in the complaint management
              process. Your voice matters, and we are committed to addressing
              every issue promptly and thoroughly. If you have any further
              questions our dedicated support team is always
              here to help you. Thank you for being an integral part of our
              ongoing improvement efforts and contributing to a better
              experience for everyone!
            </p >
          </div>
          <div className="container carousel-item">
            <h3 className="d-flex justify-content-center" style={khan}>
              <strong style={khan1}> My Complaint</strong>
            </h3>
            <p style={paragraph}>
              In this section, you can view the status of your submitted
              complaints. Stay informed about any updates, resolutions, or
              actions taken regarding your concerns. We believe in transparency
              and want you to feel empowered in the complaint management
              process. If you have any further questions about this page  or need assistance, our
              support team is always here to help. Thank you for being an
              integral part of our ongoing improvement efforts!  once again Think You!
            </p >
          </div>
          <div className="container carousel-item">
            <h3 className="d-flex justify-content-center" style={khan}>
              <strong style={khan1}> Handle Complaint by Teacher</strong>
            </h3>
            <p style={paragraph}>
              In this section, teachers can review and manage complaints
              submitted by students or parents. Each complaint is categorized
              for easy access, allowing you to track its status and respond
              promptly. Use the tools provided to investigate the issue,
              communicate with the complainant, and document your actions. Our
              goal is to foster a supportive environment where concerns are
              addressed effectively, ensuring a positive experience for all.
              Thank you for your commitment to resolving issues and enhancing
              our community!
            </p >
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
