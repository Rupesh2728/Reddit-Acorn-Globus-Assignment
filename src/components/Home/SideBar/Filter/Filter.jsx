import React, { useState } from 'react';

const Filter = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const frameworks = {
        items: [
          { value: "favorites", label: "Favorites" },
          { value: "reddit feeds", label: "Reddit Feeds"},
          { value: "community", label: "Community" },
        ],
      };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
    return (
        <div className="w-[12rem]">
        <select
          id="framework-select"
          value={selectedValue}
          onChange={handleChange}
          className=" text-[0.75rem] cursor-pointer block w-full px-2 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="" disabled>  
            Filter by
          </option>
          {frameworks.items.map((movie) => (
            <option value={movie.value} key={movie.value}>
              {movie.label}
            </option>
          ))}
        </select>
       
      </div>
  )
}

export default Filter