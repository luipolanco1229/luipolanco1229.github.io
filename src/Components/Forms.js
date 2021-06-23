import React, { Fragment, useState} from 'react';

const Forms = () => {

    const [Information, setInformation] = useState({
        user: '',
        password: ''
    } 
    );

    const HandleInputChange = (event) => {
         console.log(event.target.value);
        setInformation ({
            ...Information,
            [event.target.name] : event.target.value
        })
    }

    // const sendData = () => {
    //     event.preventDefault()
    //     console.log('enviando datos...' + Information.user + ' ' + Information.password)
    // }


     return(
         <div className="FormSignIn">
             <h1 className="HeaderSigIn">Iniciar sesión </h1>
             <form className="SigIn" onSubmit={sendData} >
                 <div clasName="Items_form_signIn">
                     <input 
                     placeholder="Ingrese su correo electrónico o nombre de usuario"
                     type="email"
                     name="user"
                     onChange={HandleInputChange}>
                     </input>
                 </div>
                 <div clasName="Items_form_signIn">
                      <input 
                      placeholder="Ingrese su contraseña"
                      type="text"
                      name="password"
                      onChange={HandleInputChange}>

                      </input>
                 </div>
                 <div clasName="Items_form_signIn">
                     <button className="Send_sigIn" type="submit">Iniciar sesión</button>
                 </div>
                  Si no tienes una cuenta <i>Regístrate</i>
             </form>
            <h3>{Information.user} - {Information.password} </h3>
         </div>
     )
}

export default Forms;