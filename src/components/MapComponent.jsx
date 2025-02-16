import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  // Default center coordinates (latitude, longitude) and zoom level
  const position = [51.505, -0.09]; // London, UK

  return (
    <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker */}
      <Marker position={position}>
        <Popup>Welcome to London!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;