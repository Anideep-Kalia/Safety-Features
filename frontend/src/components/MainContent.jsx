import React from "react";

function MainContent() {
  return (
    <div
      style={{
        height: "90px",
        width: "100%",
        position: "fixed",
        top: "30px",
        left: "0",
        zIndex: "999",
        padding: "8px 30px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          position: "relative",
          top: "0",
          left: "0",
          zIndex: "999",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "340px",
            height: "70px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src='emblem.png'
            alt=''
            style={{ width: "60px", height: "70px", marginRight: "12px" }}
          />
          <img
            src='police.png'
            alt=''
            style={{ width: "80px", height: "80px", marginRight: "12px" }}
          />
          <h1 style={{ fontSize: "18px", margin: 0 }}>Rajasthan police</h1>
        </div>

        <div
          style={{
            width: "428px",
            height: "70px",
            display: "flex",
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              width: "172px",
              height: "80px",
              backgroundColor: "yellow",
            }}
          >
            {/* buttons */}
          </div>

          <div
            style={{
              width: "256px",
              height: "70px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src='bhajan_lal.webp'
              alt=''
              style={{ width: "40px", height: "40px" }}
            />
            <h2
              style={{
                textAlign: "center",
                fontSize: "13px",
                margin: 0,
                marginTop: "5px",
              }}
            >
              Shri Bhajan Lal Sharma
              <br />
              Hon'ble Chief Minister of Rajasthan
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
