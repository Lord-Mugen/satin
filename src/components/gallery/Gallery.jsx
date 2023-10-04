import "./gallery.css";
import Recurso20 from "../../assets/images/Recurso20.jpg";
import Recurso21 from "../../assets/images/Recurso21.jpg";
import Recurso22 from "../../assets/images/Recurso22.jpg";
import Recurso23 from "../../assets/images/Recurso23.jpg";

const Gallery = () => {
  return (
    <section className="gallery grid grid-cols-3 gap-3 lg:gap-8 h-3/5 py-2 px-2 lg:py-0 lg:px-0">
      <div className="gallery__column">
        <img
          src={Recurso20}
          alt="imagen de galeria"
          className="gallery__image h-full"
        />
      </div>
      <div className="gallery__column col-span-1 grid grid-rows-2 gap-2">
        <div className="">
          <img
            src={Recurso21}
            alt="imagen de galeria"
            className="gallery__image h-full"
          />
        </div>
        <div className="">
          <img
            src={Recurso22}
            alt="imagen de galeria"
            className="gallery__image h-full"
          />
        </div>
      </div>
      <div className="gallery__column">
        <img
          src={Recurso23}
          alt="imagen de galeria"
          className="gallery__image h-full"
        />
      </div>
    </section>
  );
};

export default Gallery;
