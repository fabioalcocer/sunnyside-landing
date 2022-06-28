import "./App.css";
import Hero from "./components/Hero";
import EggImg from "./assets/mobile/image-transform.jpg";
import CupImg from "./assets/mobile/image-stand-out.jpg";
import LearnMore from "./components/LearnMore";
import dataLearnMore from "./data/learnmore";
import SectionCherry from "./components/SectionCherry";
import SectionOrange from "./components/SectionOrange";
import Testimonials from "./components/Testimonials";
import dataTestimonials from "./data/testimonials";
import GridImages from "./components/GridImages";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Hero />
      <img src={EggImg} />
      <LearnMore
        title= {dataLearnMore.brand.title}
        text={dataLearnMore.brand.text}
      />
      <img src={CupImg} />
      <LearnMore
        title={dataLearnMore.audience.title}
        text={dataLearnMore.audience.text}
      />
      <SectionCherry />
      <SectionOrange />
      <section className="testimonials" id="testimonials">
        <h3 className="testimonials__title">Client testimonials</h3>
        <Testimonials
          image={dataTestimonials.emily.image}
          text={dataTestimonials.emily.text}
          name={dataTestimonials.emily.name}
          job={dataTestimonials.emily.job}
        />
        <Testimonials
          image={dataTestimonials.thomas.image}
          text={dataTestimonials.thomas.text}
          name={dataTestimonials.thomas.name}
          job={dataTestimonials.thomas.job}
        />
        <Testimonials
          image={dataTestimonials.jenny.image}
          text={dataTestimonials.jenny.text}
          name={dataTestimonials.jenny.name}
          job={dataTestimonials.jenny.job}
        />
      </section>
      <GridImages />
      <Footer />
    </div>
  );
}

export default App;
