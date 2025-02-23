import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  // Default center coordinates (latitude, longitude) and zoom level
  const position = [51.505, -0.09]; // London, UK

  return (
    <div>
      <div className='bg-black blur-xs' style={{zIndex:-1, width:"90%", height:"100%", position:"absolute", opacity:"70%", margin:"3rem", marginTop:"1.75rem" }} ></div>
      <h1 className="text-white font-dm-sans text-2xl">Locations which are suffering from disasters at present:</h1>
      <label>
        <select className="text-white bg-black opacity-60 my-5 font-dm-sans">
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Japan</option>
        </select>
      </label>

      <div>
        <MapContainer center={position} zoom={13} style={{ height: "400px", width: "70%", borderRadius: "10%" }}>
        
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <Marker position={position}>
            <Popup>Welcome to London!</Popup>
          </Marker>
        </MapContainer>
      </div>
      
    </div>
    
  );
};

export default MapComponent;
