import FilterGroup from "../components/FilterGroup";
import LabelSelect from "../components/LabelSelect";
import { useState } from "react";

const ProductListingPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const labelChange = (e) => {
    console.log("Filtrar por:", e.target.value);
  };
  const marcas = [
    { text: "Adidas", value: "opt1" },
    { text: "Balenciaga", value: "opt2" },
    { text: "K-swiss", value: "opt3" },
    { text: "Nike", value: "opt4" },
    { text: "Puma", value: "opt5" },
  ];

  const categoria = [
    { text: "Esporte e lazer", value: "opt1" },
    { text: "Casual", value: "opt2" },
    { text: "Utilitário", value: "opt3" },
    { text: "Corrida", value: "opt4" },
  ];
  const genero = [
    { text: "Feminino", value: "opt1" },
    { text: "Masculino", value: "opt2" },
    { text: "Unisex", value: "opt3" },
  ];
  const estado = [
    { text: "Novo", value: "opt1" },
    { text: "Usado", value: "opt2" },
  ];
  return (
    <>
      {/*Botão do filtro */}
      <button
        onClick={toggleFilter}
        className="md:hidden p-2 m-2 bg-primary text-white rounded"
      >
        Filtrar por
      </button>
      <aside
        className={`fixed top-0 left-0 w-4/5 h-full bg-white z-50 p-5 overflow-y-auto shadow-lg transition-transform transform ${
          showFilter ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:w-64`}
      >
        <button
          onClick={toggleFilter}
          className="md:hidden text-right text-lg mb-4"
        >
          ✕
        </button>
        <LabelSelect onChange={labelChange} />
        <div className="m-7 h-308 w-60 p-5 flex flex-col bg-white rounded justify-start items-start">
          <FilterGroup
            className="text-dark-gray-2 filter-title"
            title="Marca"
            inputType="checkbox"
            options={marcas}
          />
          <FilterGroup
            className="text-dark-gray-2 filter-title"
            title="Categoria"
            inputType="checkbox"
            options={categoria}
          />
          <FilterGroup
            className="text-dark-gray-2 filter-title"
            title="Gênero"
            inputType="checkbox"
            options={genero}
          />
          <FilterGroup
            className="text-dark-gray-2 filter-title"
            title="Estado"
            inputType="radio"
            options={estado}
          />
        </div>
      </aside>
    </>
  );
};

export default ProductListingPage;
