import React from "react";
import services from "../json/services.json";

const Services = () => {
  return (
    <div className="section-services">
      {services &&
        services.map((element) => {
          return (
            <div key={element.id} className="service-card">
              <div className={element.img} />
              <h1>{element.title}</h1>
              <p>
                {element.ph}
              </p>
            </div>
          );
        })}
      <div ></div>
    </div>
  );
};

export default Services;
