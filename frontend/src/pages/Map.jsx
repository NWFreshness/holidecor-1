import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
};
