import "./slider2_section.css";
import Slider2 from "../../components/slider2/Slider2";

const Slider2_section = () => {
  return (
    <section className="slider2_section grid justify-items-center h-auto pb-10 lg:pt-10 lg:pb-16 lg:pl-20 lg:pr-20 xl:pl-28 xl:pr-28 xl:h-auto ">
      <div className="slider2_section md:flex md:gap-3 w-full justify-around h-auto">
        <div className="slider2_section h-96 md:w-2/5 lg:h-420 lg:w-1/3 xl:min-h-620">
          <Slider2 />
        </div>
        <div className="slider2_section h-96 md:w-2/5 lg:h-420 xl:h-500 lg:w-1/3 ">
          <div className="slider2_section__card bg-no-repeat bg-center h-full w-full max-w-420 flex flex-col items-center justify-end pb-3 lg:pb-10 xl:h-600">
            <button className="slider2_section__card-btn bg-blue text-white pl-4 pr-4 p-3 rounded-full font-custom font-medium hover:text-blue hover:bg-white">
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
      <div className="slider2_section__paragraph-container text-center pt-10 lg:w-3/4 xl:w-2/4">
        <p className="slider2_section__paragraph font-custom lg:text-1.5 leading-tight">
          El satín está de moda con su elegancia y sofisticación{" "}
          <span className="slider2_section__paragraph-dark font-bold">
            atemporal
          </span>
          , esta vez le damos una interpretación fresca con una textura de cebra
          y diferentes siluetas.
        </p>
      </div>
    </section>
  );
};

export default Slider2_section;
