import React from "react";
import { HeaderStyles } from "./Header.styles";

const routes = [
  {
    title: "Inicio",
    id: "beginning",
  },
  {
    title: "Acerca de nosotros",
    id: "about",
  },
  {
    title: "Servicios",
    id: "services",
  },
  {
    title: "Contacto",
    id: "contact",
  },
];

export const Header = () => {


  const handleClick = (ref) => {
console.log(ref)
    // if (!ref.current) return;
    // ref.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(routes);

  return (
    <HeaderStyles>
      <div className="header-container">
        <div>Logo</div>
        <div className="nav-items">
          {routes.map((route, i) => {
            return (
              <p onClick={handleClick(route.id)} key={i}>
                {route.title}
              </p>
            );
          })}
        </div>
      </div>
    </HeaderStyles>
  );
};
