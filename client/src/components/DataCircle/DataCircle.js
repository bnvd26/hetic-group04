import React from "react";

const DataCircle = ({ unit, value, type }) => {
  
  const handleMaxCapacity = () => {
    let valueStyle = "text-4xl font-regular"; 
    if (value < 0 && type === 'capacity') {
      return `${valueStyle} text-red-500`;
    } else {
      return `${valueStyle} text-indigo-500`;
    }
  }

  return (
    <div className="flex justify-center items-center content-center bg-white shadow h-44 w-44 rounded-full fill-current mt-6 mr-12">
      <span className="flex flex-col items-center">
        <h1 className="text-gray-500 text-2xl uppercase">{unit}</h1>
        <p className={handleMaxCapacity(value)}>{value}</p>
      </span>
    </div>
  );
};

export default DataCircle;
