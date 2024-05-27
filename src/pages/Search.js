import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'

// function Search() {
  

// // Initialize Leaflet map
// var map = L.map('map');

// // Use Geolocation API to get user's current location
// if ('geolocation' in navigator) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     var userLat = position.coords.latitude;
//     var userLng = position.coords.longitude;

//     // Center the map on user's location
//     map.setView([userLat, userLng], 13);

//     // Add marker for user's location
//     L.marker([userLat, userLng])
//       .addTo(map)
//       .bindPopup('Your current location')
//       .openPopup();

//     // Fetch tailor shop locations (example: hardcoded data)
//     var tailorShops = [
//       { name: 'Tailor Shop 1', lat: 51.51, lng: -0.08 },
//       { name: 'Tailor Shop 2', lat: 51.52, lng: -0.1 },
//       // Add more tailor shop locations as needed
//     ];

//     // Add markers for nearby tailor shops
//     tailorShops.forEach(function (shop) {
//       L.marker([shop.lat, shop.lng])
//         .addTo(map)
//         .bindPopup(shop.name);
//     });
//   }, function (error) {
//     console.error('Error getting user location:', error);
//   });
// } else {
//   console.error('Geolocation is not supported by this browser.');
// }

// // Add Leaflet OpenStreetMap tiles to the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Set initial map view
// map.setView([0, 0], 1); // Default view if geolocation is not supported or user denies permission

//   return (
//     <div>
//       <div id="map" style={{ height: '400px' }}></div>
//       </div>
//   )
// }

// export default Search







































// // import React, { Component } from 'react';

// // // Haversine formula to calculate distance between two points
// // function calculateDistance(lat1, lon1, lat2, lon2) {
// //   const R = 6371; // Radius of the earth in kilometers
// //   const dLat = deg2rad(lat2 - lat1);
// //   const dLon = deg2rad(lon2 - lon1);
// //   const a =
// //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// //     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
// //     Math.sin(dLon / 2) * Math.sin(dLon / 2);
// //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// //   const distance = R * c; // Distance in kilometers
// //   return distance;
// // }

// // // Convert degrees to radians
// // function deg2rad(deg) {
// //   return deg * (Math.PI / 180);
// // }

// // // User's location coordinates
// // const userLatitude = 37.7749;
// // const userLongitude = -122.4194;

// // // Array of tailor objects with their coordinates
// // const tailors = [
// //   { name: 'Tailor 1', latitude: 37.7749, longitude: -122.4194 },
// //   { name: 'Tailor 2', latitude: 37.7749, longitude: -122.4195 },
// //   { name: 'Tailor 3', latitude: 37.7750, longitude: -122.4194 },
// // ];

// // // Calculate distances and sort tailors based on distance
// // const sortedTailors = tailors.map(tailor => ({
// //   ...tailor,
// //   distance: calculateDistance(userLatitude, userLongitude, tailor.latitude, tailor.longitude)
// // })).sort((a, b) => a.distance - b.distance);

// // // Generate an ordered list of nearby tailors
// // const nearbyTailorsList = sortedTailors.map(tailor => `${tailor.name} - ${tailor.distance.toFixed(2)} km`);

// // console.log(nearbyTailorsList);
