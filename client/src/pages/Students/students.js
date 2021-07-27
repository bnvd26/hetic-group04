import React, { useEffect, useState } from "react";
import ProgressSpinner from "../../components/ProgressSpinner/ProgressSpinner";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";

import axios from "axios";
const Students = () => {
  const [allStudents, setAllStudents] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const getAllStudents = () => {
    if (allStudents === null) {
      axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/students/`,
      }).then((res) => {
        setAllStudents(res.data);
        setIsLoading(false);
        document.title = "Liste des étudiants";
      });
    }
  };

  useEffect(() => {
    getAllStudents();
  });

  return (
    <div>
      {loading === true ? (
        <ProgressSpinner />
      ) : (
        <div className="px-6 py-8 h-screen fadeIn">
          <h1 className="text-gray-700 text-3xl font-medium">
            Liste des étudiants{" "}
            <span className="text-xl">({allStudents.length})</span>
          </h1>

          <div className="w-full mt-4">
            <DataTable stripedRows value={allStudents} paginator rows={15}>
              <Column field="first_name" header="Prénom" sortable></Column>
              <Column field="last_name" header="Nom de famille" sortable></Column>
              <Column field="promotion" header="Promotion" sortable></Column>
            </DataTable>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
