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
                            <svg width="40" height="33" viewBox="0 0 40 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="32" rx="5" fill="#212529"/>
                                <path
                                    d="M11.1445 6.09375H13.7012L20.2227 22.3223L26.7305 6.09375H29.3008L21.207 26H19.2109L11.1445 6.09375ZM10.3105 6.09375H12.5664L12.9355 18.2344V26H10.3105V6.09375ZM27.8652 6.09375H30.1211V26H27.4961V18.2344L27.8652 6.09375Z"
                                    fill="white"/>
                            </svg>
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

                        <li>
                            <div className="links nav-link link-secondary me-3 ">
                                <Link to={"/"} className="links nav-link link-secondary">
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="links nav-link link-secondary me-3"><Link to={"/Hombre"}
                                                                                      className="links nav-link link-secondary">
                                Hombre
                            </Link>
                            </div>
                        </li>

                        <li>
                            <div className="links nav-link link-secondary me-3"><Link to={"/Mujer"}
                                                                                      className="links nav-link link-secondary">
                                Mujer
                            </Link>
                            </div>
                        </li>

                    </ul>

                    <div className="col-md-3 text-end">
                        {!isLogged
                            ?
                            <>
                                <button type="button" className="btn btn-outline-light me-3">
                                    <Link to={"/Login"} className="link-secondary">
                                        Login
                                    </Link>
                                </button>
                                <button type="button" className="btn btn-light me-3" >
                                    <Link to={"/Register"} className="link-secondary">
                                        Sign-up
                                    </Link>
                                </button>
                            </>
                            :
                            props.rol === 'admin'
                                ?
                                <>
                                <button type="button" className="btn btn-outline-light me-3" onClick={handleLogout}>
                                    <Link to={"/Login"} className="link-secondary">
                                        Logout
                                    </Link>
                                </button>
                                <button type="button" className="btn btn-outline-light me-3" >
                                    <Link to={"/DashboardProductos"} className="link-secondary">
                                        Dashboard
                                    </Link>
                                </button>
                                </>
                                :
                                <button type="button" className="btn btn-outline-light me-3" onClick={handleLogout}>
                                    <Link to={"/Login"} className="link-secondary">
                                        Logout
                                    </Link>
                                </button>
                        }


                        <span onClick={() => setClickChangeOrders(!clickChangeOrders)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                 className="links bi bi-cart4" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                            <div> {state.cart.length > 0 ? <div style={{
                                fontSize: '25px',
                                backgroundColor: 'black',
                                color: 'white',
                            }}> #{state.cart.length}</div> : null}</div>
                        </span>
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