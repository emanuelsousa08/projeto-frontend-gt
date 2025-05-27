import React, { Children } from "react";

const FilterGroup = ({ title, inputType = "checkbox", options = [] }) => {
  return (
    <div className="h-60 w-308 p-15 flex flex-col bg-white rounded justify-start items-start">
      <h3 className="filter-title">{title}</h3>
      {options.map((opt, index) => (
        <label key={index} className="filter-option">
          <input className="justify-start text-dark-gray text-sm font-medium font-['Inter'] leading-snug tracking-tight"
                type={inputType} 
                name={title} 
                value={opt.value} />
          <p className="justify-start text-dark-gray text-sm font-medium font-['Inter'] leading-snug tracking-tight">{opt.text}</p>
        </label>
      ))}
    </div>
  );
};

export default FilterGroup;
