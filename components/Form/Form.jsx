import React from "react";
import { FormInputs } from "./FormInputs";
import { FormStyles } from "./FormStyles.styles";

export const Form = ({contact}) => {
  return (
    <FormStyles>
      <div ref={contact}>
        <h1 className="form-title">SIGAMOS EN CONTACTO</h1>
        <div className="line"></div>
        <p className="form-paragraph">
          Prosperamos cuando se nos ocurren ideas innovadoras, pero también
          entendemos que un concepto inteligente debe respaldarse con resultados
          medibles.
        </p>

        <div className='form-information'>
          <FormInputs />
        </div>
      </div>
    </FormStyles>
  );
};
