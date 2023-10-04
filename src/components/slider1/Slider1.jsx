import "./slider1.css";
import Slider from "react-slick";
import recurso27 from "../../assets/images/SLIDE 1/Recurso27.jpg";
import recurso28 from "../../assets/images/SLIDE 1/Recurso28.jpg";

const Slider1 = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider className="slider pt-6 lg:pt-0 h-200 w-200" {...settings}>
      <div className="card w-full lg:h-600  xl:h-700">
        <img
          src={recurso27}
          alt="Slide 1"
          className="card__img h-300 xl:h-full w-full"
        />
      </div>
      <div className="card w-full lg:h-600 xl:h-700">
        <img
          src={recurso28}
          alt="Slide 2"
          className="card__img h-300 xl:h-full w-full"
        />
      </div>
    </Slider>
  );
};

export default Slider1;
