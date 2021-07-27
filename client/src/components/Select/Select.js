import React, { useState } from "react";

const Select = ({options, currentId, onChange}) => {
  const [selectedOption, setSelectedOption] = useState(
    options[currentId - 1].id
  );

  return (
    <>
      {selectedOption !== null && (
        <div className="relative inline-block w-full text-gray-700">
          <select
            onChange={(e) => {
              setSelectedOption(e.target.value)
              onChange(e.target.value);
            }}
            className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline bg-white bg-opacity-50 text-white"
            value={selectedOption}
          >
            {options.map((option) => (
              <option
                className="bg-white text-black"
                key={option.name}
                value={option.id}
              >
                {option.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
