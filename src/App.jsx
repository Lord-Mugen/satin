import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Slider1_section from "./containers/slider1_section/Slider1_section";

const App = () => {
  return (
    <>
      <Hero />
      <Slider1_section />
      <Gallery />
    </>
  );
};

export default App;
