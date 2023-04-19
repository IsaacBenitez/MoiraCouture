import React, {useState, useContext, useEffect} from 'react';
import '../../styles/Header.scss';
import {Link} from "react-router-dom";
import AppContext from '../../context/AppContext';
import CartTotalOrder from '../cartOrder/CartTotalOrder';

const Header = (props) => {
    const [clickChange, setClickChange] = useState(false);

    const {state} = useContext(AppContext);

    const [clickChangeOrders, setClickChangeOrders] = useState(false);
    const [isLogged, setIsLogged] = useState(props.isLogged)

    const handleLogout = () => {
        window.localStorage.removeItem('login')
        props.setIsLogged(false)
    }

    useEffect(() => {
        setIsLogged(props.isLogged)
    }, [props.isLogged])

    const handleClickChange = () => {
        setClickChange(!clickChange);
    }

    return (
        <div className='ContenedorHeader'>
            <div className="container py-2">
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-light text-decoration-none">
                        <Link to={"/"}>
                            <svg width="50" height="50" viewBox="0 0 40 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="35" rx="5" fill="#212529"/>
                                <path
                                    d="M11.1445 6.09375H13.7012L20.2227 22.3223L26.7305 6.09375H29.3008L21.207 26H19.2109L11.1445 6.09375ZM10.3105 6.09375H12.5664L12.9355 18.2344V26H10.3105V6.09375ZM27.8652 6.09375H30.1211V26H27.4961V18.2344L27.8652 6.09375Z"
                                    fill="white"/>
                            </svg>
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

                        <li>
                            <div className=" me-5 fs-5">
                                <Link to={"/"} className="links nav-link ">
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className=" me-5 fs-5">
                                <Link to={"/Hombre"} className="links nav-link ">
                                    Hombre
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className=" me-5 fs-5">
                                <Link to={"/Mujer"} className="links nav-link ">
                                    Mujer
                                </Link>
                            </div>
                        </li>

                    </ul>

                    <div className="position-relative col-md-3 text-end">
                        {!isLogged
                            ?
                            <>

                                    <Link to={"/Login"} className="link-light">
                                        <button type="button" className="btn btn-outline-light me-3">
                                        Log in
                                        </button>
                                    </Link>

                                    <Link to={"/Register"} className="link-light">
                                        <button type="button" className="btn btn-outline-light me-3">
                                        Sign up
                                        </button>
                                    </Link>

                            </>
                            :
                            props.rol === 'admin'
                                ?
                                <>

                                        <Link to={"/Login"} className="link-light">
                                            <button type="button" className="btn btn-outline-light me-3" onClick={handleLogout}>
                                            Logout
                                            </button>
                                        </Link>

                                        <Link to={"/DashboardProductos"} className="link-light">
                                            <button type="button" className="btn btn-outline-light me-3">
                                            Dashboard
                                            </button>
                                        </Link>

                                </>
                                :
                                    <Link to={"/Login"} className="link-secondary">
                                        <button type="button" className="btn btn-outline-light me-3" onClick={handleLogout}>
                                        Logout
                                        </button>
                                    </Link>

                        }


                            <span style={{cursor: 'pointer'}} onClick={() => setClickChangeOrders(!clickChangeOrders)} >
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                   className="links bi bi-handbag" viewBox="0 0 16 16">
                              <path
                                  d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                            </svg>
                            </span>

                                {state.cart.length > 0 && (
                                    <div className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-white">
                                        <span className="text-dark">{state.cart.length}</span>
                                    </div>
                                )}



                    </div>
                    {clickChange && <h1 style={{
                        fontSize: '25px',
                        backgroundColor: 'black',
                        color: 'white',
                    }}></h1>}{clickChangeOrders && <CartTotalOrder/>}

                </header>
            </div>
        </div>
    );
}

export default Header;