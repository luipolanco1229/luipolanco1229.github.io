import React, { useState } from "react";
import ModalSU from "./ModalSU";

const Forms = () => {
  const [Information, setInformation] = useState({
    user: "",
    password: "",
  });

  const HandleInputChange = (event) => {
    console.log(event.target.value);
    setInformation({
      ...Information,
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value,
    });
  };

  // const sendData = () => {
  //   //    event.preventDefault()
  //   //     console.log('enviando datos...' + Information.user + ' ' + Information.password)
  // };

  return (
    <div className="FormSignIn">
      <div className="HeaderSigIn">
        <h1>Iniciar sesión </h1>
      </div>
      <form className="SigIn" method="post">
        <div clasName="Items_form_signIn">
          <p>Correo o nombre usuario</p>
          <input
            placeholder="Ingrese su correo electrónico o usuario"
            type="email"
            name="user"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="Items_form_signIn">
          <p>Contraseña</p>
          <input
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
            onChange={HandleInputChange}
            required
          ></input>
        </div>
        <div clasName="div_send_sigIn">
          <button className="Send_signIn" type="submit" >
            Iniciar sesión
          </button>
        </div>
        <p>
          Si no tienes una cuenta
          <ModalSU />
        </p>
      </form>
    </div>
  );
};

export default Forms;
