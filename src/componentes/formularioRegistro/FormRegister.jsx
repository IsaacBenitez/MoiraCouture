import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import createUser from "../../requests/createUser";


const FormRegister = () => {
    const form = useRef(null);


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


        } catch (error) {

            let {status} = error.response

            if (status === 401) {
                let {message} = error.response.data.error;
                alert(message)
            } else if (status === 400) {
                let {message} = error.response.data.message;
                alert(message)
            }

            console.log(error)

        }
        console.log(data);  //TODO
    }


    return (<div className="Register-form-container">

            <form action="/" className="Auth-form" ref={form}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
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
                                onClick={handleSubmit}>Registrarse
                        </button>
                    </div>
                </div>
            </form>


        </div>
    )

}

export default FormRegister;


/*
import React,
    {
        useRef
    }
from 'react';
import
    {
        Link
    }
from "react-router-dom";



const FormRegister = () =>
    {
        const form = useRef(null);


        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(form.current);
            const data = {
                name: formData.get('nombre'),
                lastname: formData.get('apellido'),  //TODO CONTRASENA, CORREO, NACIMIENTO, NOMBRE, APELLIDO
                email: formData.get('correo'),
                password: formData.get('password'),
                birthDate: formData.get('birthDate')
            }
            console.log(data);  //TODO
        }


        return (<div>


                <form action="/" className="form" ref={form}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input name="nombre" type="text" className="form-control" id="validationDefault01"
                                   placeholder="Nombre" required/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="apellido">Apellido</label>
                            <input name="apellido" type="text" className="form-control" id="validationDefault02"
                                   placeholder="Apellido" required/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="correo">Correo</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                </div>
                                <input name="correo" type="text" className="form-control" id="validationDefaultCorreo"
                                       placeholder="Correo Electronico"
                                       aria-describedby="inputGroupPrepend2" required/>
                                <input name="password" type="password" className="form-control"
                                       id="validationDefaultPassword" placeholder="Password"
                                       aria-describedby="inputGroupPrepend2" required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="birthDate">Fecha de nacimiento</label>
                            <input name="birthDate" type="date" className="form-control" id="validationDefault03"
                                   placeholder="Fecha de nacimiento" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                Estoy de acuerdo con el tratamiento de mis datos
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Registrarse</button>
                </form>


            </div>
        )

    }

export default FormRegister;


*/