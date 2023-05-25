import React from "react";
import testimonials from "../json/testimonials.json";

const Testimonials = () => {
  return (
    <div className="section-testimonial">
      {testimonials &&
        testimonials.map((element, index) => {
          return (
            <div key={index} className="testimonial-card">
              <div className="testimonial">
                <p>{element.testimonial}</p>
              </div>
              <div className="footer-card">
                <div className={element.avatar} />
                <div className="avatar-titles">
                  <h1>{element.name}</h1>
                  <h2>{element.posicion}</h2>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Testimonials;
