import FilterGroup from "./FilterGroup";

const Form = () => {
  const disclaimer = [
    {
      text: "Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.",
      value: "opt1",
    },
  ];
  return (
    <>
      <h2 className="w-full max-w-[750px] md:max-w-2xl justify-center mx-auto pt-8 text-dark-gray text-3xl font-bold font-['Inter'] leading-9 tracking-wide">
        Criar conta
      </h2>
      {/*INFORMAÇÕES PESSOAIS */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[auto] md:min-h-screen px-4 md:px-8 gap-8 md:gap-40">
        <div className="w-full max-w-[750px] my-8 p-6 bg-white rounded-lg flex flex-col items-start gap-6 shadow-md">
          <div className="self-stretch justify-start items-start gap-6">
            <h3 class="py-4 text-dark-gray text-base font-bold font-['Inter'] leading-7 tracking-wide">
              Informações Pessoais
            </h3>
            <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-stone-300" />
            <div>
              <form className="w-full max-w-[750px] mx-auto px-4 py-2 bg-white rounded-lg flex flex-col items-start">
                <label className="text-dark-gray mt-6 text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Nome completo*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu nome"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  CPF*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu CPF"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  E-mail*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu email"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Celular*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu celular"
                  required
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*INFORMAÇÕES DE ENTREGA */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[auto] md:min-h-screen px-4 md:px-8 gap-8 md:gap-40">
        <div className="w-full max-w-[750px] my-8 p-6 bg-white rounded-lg flex flex-col items-start gap-6 shadow-md">
          <div className="self-stretch justify-start items-start gap-6">
            <h3 class="py-4 text-dark-gray text-base font-bold font-['Inter'] leading-7 tracking-wide">
              Informações de Entrega
            </h3>
            <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-stone-300" />
            <div>
              <form className="w-full max-w-[750px] mx-auto px-4 py-2 bg-white rounded-lg flex flex-col items-start">
                <label className="text-dark-gray mt-6 text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Endereço*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu endereço"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Bairro*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu bairro"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Cidade*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu cidade"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  CEP*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu cep"
                  required
                />
                <label className="text-dark-gray text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Complemento*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[750px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira o complemento do seu endereço"
                  required
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[750px] justify-start mx-auto px-4 md:px-6 mt-2">
        <label className="text-dark-gray font-normal font-['Inter'] leading-2 tracking-wide">
          <FilterGroup title="" inputType="checkbox" options={disclaimer} />
        </label>
        <button className="w-full flex justify-center items-center mx-auto px-2 mt-8 mb-6 primary-button">
          Criar Conta
        </button>
      </div>
    </>
  );
};

export default Form;
