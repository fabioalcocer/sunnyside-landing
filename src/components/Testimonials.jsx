import "../styles/Testimonials.css";

function Testimonials({ image, text, name, job }) {
  return (
    <>
      <div className="testimonials__card">
        <img src={image} className="card__photo" />
        <p className="card__text">{text}</p>
        <p className="card__name">{name}</p>
        <p className="card__job">{job}</p>
      </div>
    </>
  );
}

export default Testimonials;
