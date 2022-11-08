import React, { useRef } from 'react';
import { Link } from "react-router-dom";



const Login = () => {
    const form = useRef(null);
   

    const handleSubmit = (event) => {
		event.preventDefault();
        const formData = new FormData(form.current); 
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }


	return (
		<div className="Login mx-3 my-3 w-50 mx-auto">
			<div className="Login-container">
				{/* <img src={"saas"} alt="logo" className="logo" /> */}
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="correo@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit}>Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button"  ><Link to={"/Register"} className="link-secondary">
                    Sign-up
                </Link></button>
			</div>
		</div>
	);
}

export default Login;
