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

        }
    }


    return (
    <div className="Register-form-container contenedor">

            <form action="/" className="Auth-form" ref={form} onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Regístrate</h3>
                    <div className="form-group mt-3">
                        <label htmlFor="nombre-input">Nombre</label>
                        <input name="nombre" type="text" className="form-control" id="nombre-input"
                               placeholder="Nombre" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="apellido-input">Apellido</label>
                        <input name="apellido" type="text" className="form-control" id="apellido-input"
                               placeholder="Apellido" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="correo-input">Correo</label>
                        <input name="correo" type="email" className="form-control" id="correo-input"
                               placeholder="Correo Electronico"
                               required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password-input">Contraseña</label>
                        <input name="password" type="password" className="form-control"
                               id="password-input" placeholder="Password"
                               required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="birthDate-input">Fecha de nacimiento</label>
                        <input name="birthDate" type="date" className="form-control" id="birthDate-input"
                               placeholder="Fecha de nacimiento" required/>
                    </div>

                    <div className="form-group mt-3 row">
                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                Estoy de acuerdo con el tratamiento de mis datos
                            </label>
                        </div>
                        <button className="btn btn-dark" type="submit">
                            Registrarme
                        </button>
                    </div>
                </div>
            </form>


        </div>
    )

}

export default FormRegister;