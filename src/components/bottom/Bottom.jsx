import "./bottom.css";
import Recurso31 from "../../assets/images/Recurso31.jpg";
import Recurso32 from "../../assets/images/Recurso32.jpg";

const Bottom = () => {
  return (
    <section className="bottom grid justify-items-center md:flex lg:items-center justify-center h-auto bg-light__gray gap-10 pb-10 lg:pb-16">
      <div className="bottom__section h-620 md:w-1/2 lg:w-1/3">
        <img
          src={Recurso31}
          alt="imagen de recurso 31"
          className="bottom__section-img h-500 lg:h-800"
        />
      </div>
      <div className="bottom__section grid justify-items-center lg:justify-items-start md:w-1/2 lg:w-1/3">
        <p className="bottom__section-text lg:text-1.5 text-center lg:text-left font-custom">
          Anímate a llevarlo en blusas o sácale el máximo partido al color de
          temporada,{" "}
          <span className="bottom__section-text-dark font-bold">
            azul cobalto
          </span>
          , con una falda de corte sirena, un crop top, plataformas y un bolso
          inesperado.
        </p>
        <div className="bottom__section-cta grid justify-items-center">
          <img
            src={Recurso32}
            alt="imagen de recurso 32"
            className="bottom__section-cta-img w-64 lg:h-96 lg:w-96 pt-5 pb-5"
          />
          <button className="bottom__section-cta-btn  bg-blue text-white pl-2 pr-2 p-1 lg:pl-4 lg:pr-4 lg:p-3 rounded-full font-custom font-medium hover:text-blue hover:bg-white">
            Comprar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
