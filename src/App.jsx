import "./App.css";
import Bottom from "./components/bottom/Bottom";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Slider1_section from "./containers/slider1_section/Slider1_section";
import Slider2_section from "./containers/slider2_section/Slider2_section";

const App = () => {
  return (
    <>
      <Hero />
      <Slider1_section />
      <Gallery />
      <Slider2_section />
      <Bottom />
    </>
  );
};

export default App;
