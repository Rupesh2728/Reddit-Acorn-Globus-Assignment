import React, { useState } from 'react';

const Filter = ({filterfunc}) => {
    const [selectedValue, setSelectedValue] = useState("");

    const frameworks = {
        items: [
          { value: "news", label: "News" },
          { value: "technology", label: "Technology"},
          { value: "lovestory", label: "Love Story" },
          { value: "gaming", label: "Gaming" },
          { value: "movie", label: "Movie" },
          { value: "gifs", label: "Gifs" },
        ],
      };

  const handleChange = (event) => {
    filterfunc(event.target.value);
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