import CardDestaque from "../components/CardDestaque";
import Section from "../components/Section";
const HomePage = ({ titleAlign = "left" }) => {
  return (
    <>
      <main>
        <div className="container mx-2 py-8 items-center justify-arround">
          <Section>
            <CardDestaque />
            {/* <div className="max-w-[600px] flex flex-col gap-6">
              <div
                className={`text-amber-500 text-base font-bold font-['Inter'] leading-normal tracking-wide
                                                ${
                                                  titleAlign === "center"
                                                    ? "justify-start"
                                                    : "justify-between"
                                                }`}
              >
                {arrayTitulos.title.text1}
              </div>
              <h1 className="text-dark-gray text-6xl font-extrabold leading-[66px] tracking-wide">
                {arrayTitulos.title.text2}
              </h1>
              <div className="w-[495px] justify-start text-zinc-700 text-lg font-normal font-['Inter'] leading-loose tracking-wide">
                {arrayTitulos.title.text3}
              </div>
              <button className="primary-button text-neutral-100 font-bold text-base tracking-wide">
                Ver ofertas
              </button>
            </div> */}
          </Section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
