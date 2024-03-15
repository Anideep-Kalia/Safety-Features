import React from "react";

const MapsOverhshadow = () => {
  return (
    <>
      <div className="container">
        <div className="yellow-box" />
        <button className="button">Police Stations</button>
        <button className="button">Petrol</button>
        <button className="button">Hospital / Clinics</button>
        <button className="button">More ...</button>
      </div>
    </>
  );
};

export default MapsOverhshadow;

// CSS styles
const styles = `
  .container {
    position: fixed;
    top: 160px;
    height: 135px;
    width: 100%;
    z-index: 1000;
    padding: 30px 60px;
    display: flex;
    align-items: center;
  }

  .yellow-box {
    height: 70px;
    width: 350px;
    background-color: yellow;
    border-radius: 50px;
  }

  .button {
    background-color: #4e7690;
    color: white;
    border-radius: 5px;
    padding: 7px 22px;
    border: none;
    margin-left: 10px;
    cursor: pointer;
  }
`;

// Apply the styles to the document
const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [styleSheet];
