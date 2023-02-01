import Image from "next/image";
import React from "react";
import Img1 from "../../public/assets/img/growth-analytics.svg";
import { InformationStyles } from "./Information-Banner.styles";
import 'animate.css';

export const Information = ({about}) => {
  return (
    <InformationStyles>
      <div ref={about} className="information-container">
        <div className="information-section">
          <div className="information-text animate__animated animate__fadeInLeft">
            <h3>Una consultora web que crea contenido moderno y atractivo</h3>
            <ul>
              <li>
                Ponemos nuestro máximo esfurzo en diseños atractivos y modernos.
              </li>
              <li>El ingrediente más importante de un sitio web exitoso.</li>
              <li>Lleve su negocio al siguiente nivel.</li>
            </ul>
          </div>
          <div className="img-container animate__animated animate__fadeInRight">
            <Image
              className="img-information"
              src={Img1}
              alt="Dixcode best tech solutions"
            />
          </div>
        </div>
      </div>
    </InformationStyles>
  );
};
