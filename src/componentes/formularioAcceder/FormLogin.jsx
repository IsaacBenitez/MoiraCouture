import React, { useState } from 'react'
import login from '../../requests/login'
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Link } from 'react-router-dom';


function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()

        const user = {
            email: email,
            password: password,
        }

        try {
            let data = await login(user)

            window.localStorage.setItem('login', JSON.stringify(data))

            setEmail("")
            setPassword("")

            alert("Bienvenido " + user.email)
            props.setIsLogged(true)
            let infoUser = window.localStorage.getItem('login')
            let token = JSON.parse(infoUser).token
            let rol = jwtDecode(token).rol
            if (rol === "cliente") {
                return (navigate("/"))
            } else if (rol === "admin") {
                return (navigate("/DashboardProductos"))
            }
        } catch (error) {


            let { data } = error.response;
            alert(data.error)

        }

    }

    return (
        <div className="Auth-form-container contenedor">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Inicia Sesión</h3>
                    <div className="form-group mt-3">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Ingresar
                        </button>
                    </div>
                    <div className='mt-3 text-center text-dark'>
                        ¿Aún no tienes cuenta?<Link to={"/Register"} className="link-dark ms-2 me-2 mb-2 mb-md-0">Registrarme</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm