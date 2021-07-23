import React from "react";

const DataCircle = ({unit, value}) => {
  return (
    <div className="flex justify-center items-center content-center bg-white shadow h-44 w-44 rounded-full fill-current text-white mt-6 mr-12">
      <span className="flex flex-col items-center">
        <h1 className="text-gray-500 text-2xl uppercase">{unit}</h1>
        <p className="text-indigo-500 text-4xl font-regular">{value}</p>
      </span>
    </div>
  );
};

export default DataCircle;
