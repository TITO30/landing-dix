import React from "react";
import { BannerStyles } from "./Banner.styles";
import background from "../../public/assets/img/bg-home.jpg";
import { Particules } from "../Particules/Particules";
import 'animate.css';

export const Banner = () => {
  return (
    <BannerStyles>
      <div
        className="banner-container"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Particules />
        <div className="banner">
          <h4 className="title animate__animated animate__fadeInDown">AWESOME DESIGN</h4>
          <h1 className="title-banner animate__animated animate__fadeInDown">
            Programando con la inspiración que nos hace grandes
          </h1>
          <p className="paragrahp animate__animated animate__fadeInDown">
            Somos un equipo especialistas en desarrollo de software,
            aplicaciones web y comercialización de soluciones de software.
            Nuestra prioridad es facilitar las tareas diarias de nuestros
            clientes y ayudar al crecimiento y desarrollo de las industrias en
            las que incursionamos.
          </p>
        </div>
      </div>
    </BannerStyles>
  );
};
