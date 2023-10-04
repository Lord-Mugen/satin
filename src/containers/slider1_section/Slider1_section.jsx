import "./slider1_section.css";
import Slider1 from "../../components/slider1/Slider1";
import Recurso18 from "../../assets/images/Recurso18.jpg";

const Slider1_section = () => {
  return (
    <section className="slider1_section bg-white w-full h-auto py-2 px-2 grid lg:py-10 lg:px-24 md:flex lg:items-start md:gap-7  xl:justify-center">
      <div className="slider1_section__section-1 md:w-50 h-auto w-screen grid justify-items-center	 ">
        <img
          src={Recurso18}
          alt="imagen numero 18 "
          className="slider1_section__image h-420  md:h-auto xl:w-full"
        />
      </div>
      <div className="slider1_section__section-2 text-blue w-screen md:w-40 h-420 md:h-auto xl:h-800">
        <div className="slider1_section__section-2-container h-350 xl:h-800">
          <Slider1 />
        </div>
        <div className="slider1_section__section-2-title-container md:text-1.7">
          <h2 className="slider1_section__section-2-title uppercase lg:text-1.8 font-custom font-bold ">
            satín azul cobalto
          </h2>
          <span className="slider1_section__section-2-title-small lg:text-1.8 font-custom font-thin">
            con textura de cebra
          </span>
        </div>
      </div>
    </section>
  );
};

export default Slider1_section;
