import "./App.css";
import Hero from "./components/Hero";
import egg from "./assets/mobile/image-transform.jpg";
import cup from "./assets/mobile/image-stand-out.jpg";
import LearnMore from "./components/LearnMore";
import SectionCherry from "./components/SectionCherry";
import SectionOrange from "./components/SectionOrange";

function App() {
  return (
    <div className="App">
      <Hero />
      <img src={egg} />
      <LearnMore
        title="Transform your brand"
        text="We are a full-service creative agency speacializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
      />
      <img src={cup} />
      <LearnMore
        title="Stand out to the right audience"
        text="Using collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
      />
      <SectionCherry />
      <SectionOrange />
    </div>
  );
}

export default App;
