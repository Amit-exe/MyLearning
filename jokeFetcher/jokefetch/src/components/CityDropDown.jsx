import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CityDropdown = ({ options, setCity, city }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <label className="text-lg font-semibold text-gray-700 mb-2">
        Select a City 🌆
      </label>

      <div className="w-64">
        <Dropdown
          options={options}
          onChange={(selectedOption) => setCity(selectedOption.value)}
          value={city}
          placeholder="Select a city"
          className="w-full"
          controlClassName="bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm px-4 py-2 cursor-pointer hover:border-blue-500 focus:border-blue-500 transition-all duration-200"
          menuClassName="bg-white border border-gray-300 rounded-lg shadow-lg"
          arrowClassName="text-gray-500"
        />
      </div>
    </div>
  );
};

export default CityDropdown;
