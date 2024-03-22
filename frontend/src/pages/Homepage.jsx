import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import Footer from "../components/Footer.jsx";
import MapsOverhshadow from "../components/MapsOverhshadow.jsx";

const containerStyle = {
  display: 'flex',
  border:'20px',
  marginTop:'25vh',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw', // Adjust the width as needed
  height: '50vh', // Adjust the height as needed
};

// Replace with your Google Maps API key
const googleMapsApiKey = 'AIzaSyBVzhfAB_XLqaayJkOSuThEdaK4vifdxAI';

function Homepage() {
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          alert('Geolocation is not supported by this browser.');
        }
      );
    }
  };
  useEffect(() => {
    fetchLocation();
  }, []);
  return (
    <>
        <Header />
        <MainContent />
        <Footer />
        <MapsOverhshadow />
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
    </>
  );
}

export default Homepage;
