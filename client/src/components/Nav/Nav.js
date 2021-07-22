import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({routes}) => {
  return (
    <div className="z-30 inset-y-0 left-0 w-32 transform bg-white overflow-y-auto shadow">
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <NavLink
            className="text-gray-400 text-2xl mx-2 font-semibold"
            activeClassName="text-indigo-500"
            to="/"
          >
            IOT G4
          </NavLink>
        </div>
      </div>

      <nav className="flex items-center flex-col mt-10">
        {routes.map((route, index) => (
          <NavLink
            className="flex items-center justify-center mt-4 py-4 px-4 text-gray-400 w-full"
            activeClassName="text-indigo-500 border-solid border-r-4"
            to={route.url}
            key={index}
          >
            <FontAwesomeIcon icon={route.icon} className="text-lg" />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
