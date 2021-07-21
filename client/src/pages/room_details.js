import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import axios from 'axios';


const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null)

  useEffect(() => {
    if(room === null) {
      axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/rooms/${id}`,
      }).then((res) => {
        setRoom(res.data);
        console.log(res.data)
      })
    }
  })

  if (!room) return null;

  return (
    <h1 className="text-gray-700 text-3xl font-medium">
      Salle: {room.name}
    </h1>
  );
};

export default RoomDetails;
