import React, {useState} from 'react'
import login from '../../requests/login'
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";


function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handelSubmit(event) {
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


            let {data} = error.response;
            alert(data.error)

        }

    }

    return (
        <div className="Auth-form-container contenedor">
            <form className="Auth-form" onSubmit={handelSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </form>
        </div>
)
}

export default LoginForm