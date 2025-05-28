import React, { Children } from "react";

const FilterGroup = ({ title, inputType = "checkbox", options = [] }) => {
  return (
    <>
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
    </>
  );
};

export default FilterGroup;
