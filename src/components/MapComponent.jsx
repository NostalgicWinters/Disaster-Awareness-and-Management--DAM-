import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component to update map center dynamically
const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const MapComponent = () => {
  const [num, setNum] = useState(1);
  const [position, setPosition] = useState([28.679079, 77.069710]); // Default to Delhi

  // Update position when num changes
  useEffect(() => {
    if (num === 1) {
      setPosition([28.679079, 77.069710]); // Delhi
    } else if (num === 2) {
      setPosition([19.076090, 72.877426]); // Mumbai
    } else if (num === 3) {
      setPosition([36.204824, 138.252924]); // Japan
    }
  }, [num]);

  return (
    <div className="bg-black opacity-70 p-8 rounded-2xl">
      <h1 className="text-white font-dm-sans text-2xl">
        Locations suffering from disasters:
      </h1>

      <label>
        <select
          className="text-white bg-black opacity-60 my-5 font-dm-sans"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        >
          <option value={1}>Delhi</option>
          <option value={2}>Mumbai</option>
          <option value={3}>Japan</option>
        </select>
      </label>

      <div>
        <MapContainer
          className="flex justify-self-center"
          center={position}
          zoom={13}
          style={{ height: "400px", width: "70%", borderRadius: "10%" }}
        >
          {/* Dynamically update the center */}
          <ChangeView center={position} />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={position}>
            <Popup>{num === 1 ? "Delhi" : num === 2 ? "Mumbai" : "Japan"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
