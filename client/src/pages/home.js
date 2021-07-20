import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const routes = [
    {
      url: "rooms",
      label: "Salles",
    },
    {
      url: "students",
      label: "Etudiants",
    },
  ];

  return (
    <div>
      <h1>IOT Groupe 4</h1>
      {routes.map((route, index) => (
        <Link to={`/${route.url}`}>{route.label}</Link>
      ))}
    </div>
  );
};

export default Home;
