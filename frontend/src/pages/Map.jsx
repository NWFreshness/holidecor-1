import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

function Map() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHouses() {
      try {
        const response = await axios.get(`/api/houses/`);
        console.log(response.data);
        setHouses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the house:", error);
        setLoading(false);
      }
    }
    getHouses();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {houses.map((house) => (
        <div key={house._id} className="card">
          <div className="container">
            <h4>
              <b>{house.name}</b>
            </h4>
            <p>{house.address.street}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Map;
