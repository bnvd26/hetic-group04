import React from "react";
import { useParams } from "react-router";

const StudentDetails = () => {
  const { id } = useParams();

  return (
    <h1 className="text-gray-700 text-3xl font-medium">
      Détails de l'étudiant {id}
    </h1>
  );
};

export default StudentDetails;
