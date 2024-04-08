import React, { useContext, useState, useEffect } from "react";
import pageContext from "../context/notes/pageContext";

const Front = () => {
  const { places, addPlace, deletePlace, editPlace, getPlaces } = useContext(pageContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [expiration, setExpiration] = useState('');

  useEffect(() => {
    getPlaces();
    console.log(places)
  }, []); // Fetch places on component mount

  const handleAddPlace = async () => {
    try {
      // Convert coordinates string to array
      const coordArray = coordinates.split(',').map(coord => parseFloat(coord.trim()));

      await addPlace(name, address, coordArray, parseInt(expiration));
      // Clear form fields after successful addition
      setName('');
      setAddress('');
      setCoordinates('');
      setExpiration('');
    } catch (error) {
      console.error('Error adding place:', error.message);
    }
  };

  const handleDeletePlace = async (id) => {
    try {
      await deletePlace(id);
    } catch (error) {
      console.error("Error deleting place:", error.message);
    }
  };

  return (
    <div>
      {places.map((place) => (
          <li key={place._id}>
            {place.name} - {place.address} - {place.coordinates}
            <button onClick={() => handleDeletePlace(place._id)}>Delete</button>
          </li>
        ))}
      <h2>Add New Place</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <input
        type="text"
        value={coordinates}
        onChange={(e) => setCoordinates(e.target.value)}
        placeholder="Coordinates (e.g., -73.968, 40.78)"
      />
      <input
        type="number"
        value={expiration}
        onChange={(e) => setExpiration(e.target.value)}
        placeholder="Expiration (hours)"
      />
      <button onClick={handleAddPlace}>Add Place</button>
    </div>
  );
};

export default Front;
