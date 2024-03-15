import React from "react";
import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import Footer from "../components/Footer.jsx";
import MapsOverhshadow from "../components/MapsOverhshadow.jsx";

function Homepage() {
  return (
    <>
      <div>
        <Header />
        <MainContent />
        <Footer />
        <MapsOverhshadow />
      </div>
    </>
  );
}

export default Homepage;
