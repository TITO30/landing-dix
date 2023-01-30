import React from "react";
import { ServicesCard } from "./ServiceCard/ServicesCard";
import { servicesData } from "./Services";
import { ServicesStyles } from "./Services.styles";

export const Services = () => {
  return (
    <ServicesStyles>
      <div>
        <h1 className="services-title">Nuestros servicios</h1>
        <div className="line"></div>
        <p className="services-paragraph">
          Creamos experiencias de marca líderes en su categoría que tengan
          significado y agreguen valor a nuestros clientes.
        </p>
        <div className="services-cards">
          {servicesData.map(({ title, description, icon }, i) => {
            return (
              <ServicesCard
                key={i}
                title={title}
                description={description}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </ServicesStyles>
  );
};
