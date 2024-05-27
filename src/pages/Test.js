import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import "leaflet/dist/leaflet.css";
import "./Test.css";
import { Icon } from "leaflet";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });
  const [nearbyTailors, setNearbyTailors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('https://backend-owo0.onrender.com/api/nearbytailors', {
          params: {
            latitude: userLocation.latitude,
            longitude: userLocation.longitude
          }
        });
        console.log(response.data.data);
        setNearbyTailors(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetails();
  }, [userLocation]);

  const customMarker = new Icon({
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Pco3dm6X6eXrduk-ZypK96TN8u5L2FRbFw&usqp=CAU",
    iconSize: [25, 25],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });

  const customMarker2 = new Icon({
    iconUrl: "https://w7.pngwing.com/pngs/244/287/png-transparent-google-map-maker-pin-computer-icons-google-maps-map-icon-angle-black-map-thumbnail.png",
    iconSize: [25, 25],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });

  if (!userLocation.latitude || !userLocation.longitude || !nearbyTailors.length) {
    // Render loading or empty state while waiting for data
    return <div>Loading...</div>;
  }

  return (
    <div className="map-container">
      <MapContainer center={[userLocation.latitude, userLocation.longitude]} zoom={13} className="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[userLocation.latitude, userLocation.longitude]} icon={customMarker}>
          <Popup>Your current location</Popup>
        </Marker>

        {nearbyTailors.map((tailor) => (
          <Marker key={tailor._id} position={[tailor.location.latitude, tailor.location.longitude]} icon={customMarker2}>
            <Popup>
              {tailor.name} <br />
              <Link to={`/ratings/${tailor.name}/${tailor.email}/${tailor.Number}`}>View Details</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UserPage;
