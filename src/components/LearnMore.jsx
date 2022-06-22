import "../styles/LearnMore.css";

function LearnMore({ title, text }) {
  return (
    <section className="learn">
      <h3 className="learn__title">{title}</h3>
      <p className="learn__text">{text}</p>
      <a href="#" className="learn__cta">
        Learn More
      </a>
    </section>
  );
}

export default LearnMore;
