import React from "react";
import { ColorBarStyles } from "./ColorBar.styles";
import backgroundOffice from "../../public/assets/img/imgOffice.jpg";

export const ColorBar = () => {
  return (
    <ColorBarStyles>
      {" "}
      <div
        className="color-container"
        style={{ backgroundImage: `url(${backgroundOffice.src})` }}
      >
        <div className="color-text">
          <h2 className="color-title">Cree el sitio web de sus sueños hoy</h2>
          <p  className="color-description">
            La pasión por la tecnología y desarrollo que compartimos como equipo
            de trabajo nos ha caracterizado y posicionado en la industria del
            software, se genera un combinación potencial entre nuestra pasión y
            gusto por apoyar el crecimiento de las iniciativas mediante la
            creación de software a la medida.
          </p>
        </div>
      </div>
    </ColorBarStyles>
  );
};
