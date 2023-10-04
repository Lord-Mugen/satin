import "./slider2.css";
import Slider from "react-slick";
import recurso24 from "../../assets/images/SLIDE 2/Recurso 24.jpg";
import recurso25 from "../../assets/images/SLIDE 2/Recurso 25.jpg";
import recurso26 from "../../assets/images/SLIDE 2/Recurso 26.jpg";

const Slider2 = () => {
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
          src={recurso24}
          alt="Slide 1"
          className="card__img h-300 xl:h-full w-full"
        />
      </div>
      <div className="card w-full lg:h-600 xl:h-700">
        <img
          src={recurso25}
          alt="Slide 2"
          className="card__img h-300 xl:h-full w-full"
        />
      </div>
      <div className="card w-full lg:h-600 xl:h-700">
        <img
          src={recurso26}
          alt="Slide 2"
          className="card__img h-300 xl:h-full w-full"
        />
      </div>
    </Slider>
  );
};

export default Slider2;
