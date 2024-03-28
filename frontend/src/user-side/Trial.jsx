// import React, { useEffect } from 'react';

// const Trial = () => {

//     useEffect(() => {
//         let map;
//         let userMarker;

//         const initMap = () => {
//             // Create the map.
//             let pyrmont = { lat: 23.8701334, lng: 90.2713944 };
//             if (navigator.geolocation) {
//                 try {
//                     navigator.geolocation.getCurrentPosition(function(position) {
//                         pyrmont = { lat: position.coords.latitude, lng: position.coords.longitude };
//                         createMap(pyrmont);
//                     });
//                 } catch (err) {
//                     console.error(err);
//                     createMap(pyrmont);
//                 }
//             } else {
//                 createMap(pyrmont);
//             }
//         };

//         const createMap = (pyrmont) => {
//             map = new window.google.maps.Map(document.getElementById('map'), {
//                 center: pyrmont,
//                 zoom: 17
//             });

//             // Create a marker for the user's current location
//             userMarker = new window.google.maps.Marker({
//                 position: pyrmont,
//                 map: map,
//                 title: 'Your Location',
//                 icon: {
//                     url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Custom marker icon
//                 }
//             });

//             // Create the places service.
//             const service = new window.google.maps.places.PlacesService(map);

//             // Perform a nearby search.
//             service.nearbySearch({
//                 location: pyrmont,
//                 radius: 4000,
//                 type: ['hospital']
//             },
//             function(results, status, pagination) {
//                 if (status !== 'OK') return;

//                 createMarkers(results);
//                 pagination.hasNextPage && function() {
//                     pagination.nextPage();
//                 };
//             });
//         };

//         const createMarkers = (places) => {
//             const bounds = new window.google.maps.LatLngBounds();
//             for (let i = 0; i < places.length; i++) {
//                 const place = places[i];
//                 const image = {
//                     url: place.icon,
//                     size: new window.google.maps.Size(71, 71),
//                     origin: new window.google.maps.Point(0, 0),
//                     anchor: new window.google.maps.Point(17, 34),
//                     scaledSize: new window.google.maps.Size(25, 25)
//                 };

//                 const marker = new window.google.maps.Marker({
//                     map: map,
//                     icon: image,
//                     title: place.name,
//                     position: place.geometry.location
//                 });
//                 bounds.extend(place.geometry.location);
//             }
//             map.fitBounds(bounds);
//         };

//         // Load Google Maps API script
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBVzhfAB_XLqaayJkOSuThEdaK4vifdxAI&libraries=places`;
//         script.defer = true;
//         script.async = true;
//         script.onload = initMap;
//         document.head.appendChild(script);

//         return () => {
//             // Clean up
//             if (map) {
//                 map = null;
//             }
//         };
//     }, []);

//     return (
//         <div id="map" style={{ width: '100%', height: '500px' }}></div>
//     );
// };

// export default Trial;
