import "./slider1_section.css";
import Slider1 from "../../components/slider1/Slider1";
import Recurso18 from "../../assets/images/Recurso18.jpg";

const Slider1_section = () => {
  return (
    <section className="slider1_section bg-white w-full py-2 px-2 grid lg:py-10 lg:px-24 lg:flex">
      <div className="slider1_section__section-1 lg:w-55 h-auto lg:mr-10">
        <img
          src={Recurso18}
          alt="imagen numero 18 "
          className="slider1_section__image xl:h-3/4"
        />
      </div>
      <div className="slider1_section__section-2 text-blue">
        <Slider1 />
        <h2 className="slider1_section__section-2-title uppercase lg:text-1.8 font-custom font-bold ">
          satín azul cobalto
        </h2>
        <span className="slider1_section__section-2-title-small lg:text-1.8 font-custom font-thin">
          con textura de cebra
        </span>
      </div>
    </section>
  );
};

export default Slider1_section;
