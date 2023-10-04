import "./slider2_section.css";
import Slider2 from "../../components/slider2/Slider2";

const Slider2_section = () => {
  return (
    <section className="slider2_section h-90vh lg:pt-10 lg:pb-10 lg:pl-20 lg:pr-20 ">
      <div className="slider2_section lg:flex w-full justify-around h-full">
        <div className="slider2_section h-90% lg:w-1/3">
          <Slider2 />
        </div>
        <div className="slider2_section h-90% lg:w-1/3">
          <div className="slider2_section__card bg-no-repeat bg-center h-full w-full flex flex-col items-center justify-end pb-10">
            <button className="slider2_section__card-btn bg-blue text-white pl-4 pr-4 p-3 rounded-full font-custom font-medium">
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
      <div className="slider2_section__paragraph-container text-center lg:w-3/5">
        <p className="slider2_section__paragraph font-custom">
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
