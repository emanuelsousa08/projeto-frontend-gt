import FilterGroup from "../components/FilterGroup";
import LabelSelect from "../components/LabelSelect";

const ProductListingPage = () => {
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
    <aside>
      <LabelSelect onChange={labelChange} />
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
    </aside>
  );
};

export default ProductListingPage;
