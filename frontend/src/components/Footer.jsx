import React from "react";
// import "../css/Footer.css"; // Import CSS file for styles

function Footer() {
  return (
    <>
      <div className="flex w-screen h-[4.75rem] bg-[#4E7690] mt-[9.5rem] mb-0 items-center">
        <div className=" flex w-1/5 justify-center">
          <img src="menu.png" alt="" className="w-4 h-5 mr-6" />
          <img src="home.png" alt="" className="w-4 h-5 mr-6" />
        </div>  
      <div className="flex w-4/5 justify-center">
        <h1 className="font-semibold mr-6">Emergency No.: 112</h1>
        <h1 className="font-semibold mr-6">Garima Helpline: 1090</h1>
        <h1 className="font-semibold mr-6">Ambulance: 108</h1>
        <h1 className="font-semibold mr-6">Child Helpline: 1098</h1>
        <h1 className="font-semibold mr-6">Cyber Helpline: 1930</h1>
        <h1 className="font-semibold mr-6">State Centralized Call Centre no.: 181</h1>
      </div>
      </div>
    </>
    // <div className="footer-container mt-6 ">
    //   <div className="footer-content">
    //     <div className="footer-icons flex ml-16">
    //       <img src="menu.png" alt="" className="footer-icon" />
    //       <img src="home.png" alt="" className="footer-icon" />
    //     </div>
    //     <h1 className="footer-text ml-80 font-semibold">Emergency No.: 112</h1>
    //     <h1 className="footer-text font-semibold">Garima Helpline: 1090</h1>
    //     <h1 className="footer-text font-semibold">Ambulance: 108</h1>
    //     <h1 className="footer-text font-semibold">Child Helpline: 1098</h1>
    //     <h1 className="footer-text font-semibold">Cyber Helpline: 1930</h1>
    //     <h1 className="footer-text font-semibold">State Centralized Call Centre no.: 181</h1>

    //   </div>
    // </div>
  );
}

export default Footer;
