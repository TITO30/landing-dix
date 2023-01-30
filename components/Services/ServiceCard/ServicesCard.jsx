import React from "react";
import { ServiceCardStyles } from "./ServiceCard.styles";

export const ServicesCard = ({ title, icon, description }) => {
  return (
    <ServiceCardStyles>
      <div className="card-container">
        <div>{icon}</div>
        <div className="service-text">
          <h4 className="service-title">{title}</h4>
          <p className="service-description">{description}</p>
        </div>
      </div>
    </ServiceCardStyles>
  );
};
