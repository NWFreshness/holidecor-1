import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function House() {
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { houseId } = useParams();

  useEffect(() => {
    async function getHouse(houseId) {
      try {
        const response = await axios.get(`/api/houses/${houseId}`);
        console.log(response.data);
        setHouse(response.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the house:", error);
        setLoading(false);
      }
    }
    getHouse(houseId);
  }, [houseId]);

  if (loading) return <div>Loading...</div>;
  if (!house) toast.error("Could not find house");

  return (
    <div>
      <h1>House</h1>
      <p>{house.name}</p>
      <ul>
        {house.comments &&
          house.comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
      </ul>
    </div>
  );
}

export default House;
