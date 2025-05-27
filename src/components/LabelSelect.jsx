import React from "react";

const LabelSelect = ({ onChange }) => {
  return (
    <div className="p-10 label-select">
      <label htmlFor="label" className="justify-start text-dark-gray-2 text-base font-bold font-['Inter'] leading-normal tracking-wide title-label">
        Filtrar por
      </label>
      <select id="label" className="lable-dropdown rounded-sm p-2" onChange={onChange}>
        <option value="menor_preco">Menor preço</option>
        <option value="maior_preco">Maior preço</option>
      </select>
    </div>
  );
};

export default LabelSelect;
