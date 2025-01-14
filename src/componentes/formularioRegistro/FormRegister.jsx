import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import createUser from "../../requests/createUser";


const FormRegister = () => {
    const form = useRef(null);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('nombre'),
            lastname: formData.get('apellido'),  //TODO CONTRASENA, CORREO, NACIMIENTO, NOMBRE, APELLIDO
            email: formData.get('correo'),
            password: formData.get('password'),
            birthDate: formData.get('birthDate')
        }


        try {

            let dataGuardada = await createUser(data)
            alert("Se ha registrado exitosamente")
            return (navigate("/Login"))

        } catch (error) {

            let {status} = error.response;

            if (status === 401) {
                let {message} = error.response.data.error;
                alert(message)
            } else if (status === 400) {
                let {message} = error.response.data.message;
                alert(message)
            }

            console.log(error)

        }
        console.log(data);
    }


    return (<div className="Register-form-container contenedor">

            <form action="/" className="Auth-form" ref={form}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Regístrate</h3>
                    <div className="form-group mt-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input name="nombre" type="text" className="form-control" id="validationDefault01"
                               placeholder="Nombre" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="apellido">Apellido</label>
                        <input name="apellido" type="text" className="form-control" id="validationDefault02"
                               placeholder="Apellido" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="correo">Correo</label>
                        <input name="correo" type="text" className="form-control" id="validationDefaultCorreo"
                               placeholder="Correo Electronico"
                               aria-describedby="inputGroupPrepend2" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="correo">Contraseña</label>
                        <input name="password" type="password" className="form-control"
                               id="validationDefaultPassword" placeholder="Password"
                               aria-describedby="inputGroupPrepend2" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="birthDate">Fecha de nacimiento</label>
                        <input name="birthDate" type="date" className="form-control" id="validationDefault03"
                               placeholder="Fecha de nacimiento" required/>
                    </div>

                    <div className="form-group mt-3 row">
                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                Estoy de acuerdo con el tratamiento de mis datos
                            </label>
                        </div>
                        <button className="align-self-center col btn btn-dark" type="submit"
                                onClick={handleSubmit}>Registrarme
                        </button>
                    </div>
                </div>
            </form>


        </div>
    )

}

export default FormRegister;