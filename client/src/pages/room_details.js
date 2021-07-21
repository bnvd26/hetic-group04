import React from "react";
import { useParams } from "react-router";

const RoomDetails = () => {
  const { id } = useParams();

  return (
    <h1 className="text-gray-700 text-3xl font-medium">
      Détaille de la salle {id}
    </h1>
  );
};

export default RoomDetails;
