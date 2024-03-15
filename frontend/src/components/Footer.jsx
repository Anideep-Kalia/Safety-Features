import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#4e7690",
        height: "40px",
        width: "100%",
        position: "fixed",
        top: "120px",
        left: "0",
        zIndex: "1000",
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <img
          src='menu.png'
          alt=''
          style={{ height: "20px", width: "20px", marginRight: "30px" }}
        />
        <img
          src='home.png'
          alt=''
          style={{ height: "20px", width: "20px", marginRight: "80px" }}
        />
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "14px",
            marginRight: "35px",
          }}
        >
          Emergency No.: 112
        </h1>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "14px",
            marginRight: "35px",
          }}
        >
          Garima Helpline: 1090
        </h1>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "14px",
            marginRight: "35px",
          }}
        >
          Ambulance: 108
        </h1>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "14px",
            marginRight: "35px",
          }}
        >
          Child Helpline: 1098
        </h1>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "14px",
            marginRight: "35px",
          }}
        >
          Cyber Helpline: 1930
        </h1>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "14px",
            marginRight: "70px",
          }}
        >
          State Centralized Call Centre no.: 181
        </h1>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            padding: "5px 30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Footer;
