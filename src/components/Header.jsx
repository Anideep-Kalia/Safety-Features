import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#4e7690",
        height: "30px",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src='new.png'
        alt=''
        style={{ width: "30px", height: "30px", marginRight: "5px" }}
      />
      <p style={{ color: "white", margin: 0 }}>
        Sub inspector Recruitment 2021 Appointment order of selected candidates
      </p>
      <img
        src='new.png'
        alt=''
        style={{ width: "30px", height: "30px", marginLeft: "5px" }}
      />
    </div>
  );
}

export default Header;
