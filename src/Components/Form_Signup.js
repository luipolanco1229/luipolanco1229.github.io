import React, { useState } from "react";

const Forms_Signup = () => {
  const [Information, setInformation] = useState({
    names: "",
    lastNames: "",
    email: "",
    adress: "",
    userName: "",
    password: "",
  });

  const HandleInputChange = (event) => {
    setInformation({
      ...Information,
      [event.target.name]: event.target.value,
    });
  };
  
  const sendData = () => {
     var formData = new FormData();
     
     if(Information.names != "" && 
        Information.lastNames != "" && 
        Information.email != ""  && 
        Information.adress != "" && 
        Information.userName != "" && 
        Information.password != "" ){

          formData.append("nombre", Information.names)
          formData.append("apellidos", Information.lastNames)
          formData.append("correo_electronico", Information.email)      
          formData.append("direccion", Information.adress)      
          formData.append("nombre_de_usuario", Information.userName)      
          formData.append("userPassword", Information.password)
          
          
          fetch("http://localhost/Technova/user.php", {      
            method: "POST",
            body: formData,
              headers: {
                'Accept': 'application/json'
              },
            })
            .then((user) => {         
              setInformation({ 
                names: "",
              lastNames: "",
              email: "",
              adress: "",
              userName: "",
              password: "",}) 
            });         
            alert('Usuario creado con exito')


          }else {
            alert('Tienes que llenar todos los campos')
    }  
    
  };

  return (
    <div className="FormSignup">
      <div className="HeaderSignUp">
        <h1>Registrarse</h1>
      </div>
      <hr class="blueLine"></hr>
      <form className="Signup" onSubmit={sendData}>
        <div clasName="Items_form_signup">
          <p>Nombres</p>
          <input
            placeholder="Ej. Miguel Ángel"
            type="text"
            name="names"
           // onChange={HandleInputChange}
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Apellidos</p>
          <input
            placeholder="Ej. Rivera Castillo"
            type="text"
            name="lastNames"
            //onChange={HandleInputChange}
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Correo electrónico</p>
          <input
            placeholder="Ej. usuario@gmail.com"
            type="email"
            name="email"
            //onChange={HandleInputChange}
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Dirección</p>
          <input
            placeholder="Ej. Antioquia, Envigado. CL 12#34"
            name="adress"
            //onChange={HandleInputChange}
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Nombre de usuario</p>
          <input
            placeholder="Ej. Miguela101"
            type="text"
            name="userName"
            //onChange={HandleInputChange}
          ></input>
        </div>
        <div clasName="Items_form_signup">
          <p>Contraseña</p>
          <input
            placeholder="Cree una contraseña"
            type="password"
            name="password"
            //onChange={HandleInputChange}
          ></input>
        </div>
        <div clasName="div_send_signUp">
          <button className="Send_signUp" >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms_Signup;
