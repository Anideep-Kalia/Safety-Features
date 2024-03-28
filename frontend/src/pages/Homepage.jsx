import React, { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import Footer from "../components/Footer.jsx";
import MapsOverhshadow from "../components/MapsOverhshadow.jsx";


function Homepage() {
  return (
    <>
        <Header />
        <MainContent />
        <Footer />
        <MapsOverhshadow />
    </>
  );
}

export default Homepage;
