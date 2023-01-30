import React, { useState } from "react";

export const FormInputs = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handlechange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.email,
      [e.target.subject]: e.target.subject,
      [e.target.message]: e.target.message,
    });

    console.log(data);
  };

  const handleSubmit = () => {
    if (
      data.name == "" ||
      data.email == "" ||
      data.subject == "" ||
      data.message == ""
    ) {
      setError(true);
      console.log("no pasa");
    } else {
      console.log("pasa");
      setError(false);
    }
  };
  return (
    <>
      <div className="information">
        <div className="information-text">
          <span style={{ fontWeight: "bold", color: "black" }}>
            Nuestro Correo:
          </span>
          <span>contacto@dixcode.com.mx</span>
        </div>
        <div className="information-text">
          <span style={{ fontWeight: "bold", color: "black" }}>
            Horario de Atención:
          </span>
          <span>9:00 a.m - 6:00 p.m</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="text-user">
          <input
            name="name"
            value={data.name}
            className={
              error && data.name == "" ? "form-control-error" : "form-control"
            }
            placeholder={error ? "Nombre Requerido" : "Nombre"}
            type="text"
            onChange={handlechange}
          />
          <input
            name="email"
            placeholder={error ? "Email Requerido" : "Email"}
            value={data.email}
            className={
              error && data.email == "" ? "form-control-error" : "form-control"
            }
            type="email"
            onChange={handlechange}
          />
        </div>
        <div className="text-comments">
          <input
            name="subject"
            value={data.subject}
            className={
              error && data.subject == ""
                ? "form-control-error"
                : "form-control"
            }
            placeholder={error ? "Asunto Requerido" : "Asunto"}
            type="text"
            onChange={handlechange}
          />
          <textarea
            placeholder={error ? "Mensaje Requerido" : "Escribe tu mensaje..."}
            className={
              error && data.message == ""
                ? "form-control-error textarea-error"
                : "form-control textarea"
            }
            value={data.message}
            onChange={handlechange}
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <div onClick={handleSubmit} className="button-submit">
            <p>Envianos tu Mensaje</p>
          </div>
        </div>
      </form>
    </>
  );
};
