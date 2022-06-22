import "./App.css";
import Hero from "./components/Hero";
import eggImg from "./assets/mobile/image-transform.jpg";
import cupImg from "./assets/mobile/image-stand-out.jpg";
import emilyImg from "./assets/image-emily.jpg";
import jennieImg from "./assets/image-jennie.jpg";
import thomasImg from "./assets/image-thomas.jpg";
import LearnMore from "./components/LearnMore";
import SectionCherry from "./components/SectionCherry";
import SectionOrange from "./components/SectionOrange";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <img src={eggImg} />
      <LearnMore
        title="Transform your brand"
        text="We are a full-service creative agency speacializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
      />
      <img src={cupImg} />
      <LearnMore
        title="Stand out to the right audience"
        text="Using collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
      />
      <SectionCherry />
      <SectionOrange />
      <section className="testimonials">
        <h3 className="testimonials__title">Client testimonials</h3>
        <Testimonials
          image={emilyImg}
          text=" We put our trust in Sunnyside and they delivered, making sure our need
          were met and deadlines were always hit."
          name="Emily.R"
          job="Marketing Director"
        />
        <Testimonials
          image={thomasImg}
          text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.."
          name="Thomas S."
          job="Chief Operating Officer"
        />
        <Testimonials
          image={jennieImg}
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!."
          name="Jennie F."
          job="Business Owner"
        />
      </section>
    </div>
  );
}

export default App;
