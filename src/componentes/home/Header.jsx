import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import CartTotalOrder from '../cartOrder/CartTotalOrder'; // Asegúrate de que la ruta sea correcta


const Header = (props) => {
    const { state } = useContext(AppContext);
    const [clickChangeOrders, setClickChangeOrders] = useState(false);
    const [isLogged, setIsLogged] = useState(props.isLogged);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleLogout = () => {
        window.localStorage.removeItem('login');
        props.setIsLogged(false);
    };

    useEffect(() => {
        setIsLogged(props.isLogged);
    }, [props.isLogged]);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className='ContenedorHeader'>
            <div className="container py-2">
                <nav className="navbar navbar-expand-lg navbar-dark bg-black d-flex align-items-center justify-content-between mb-2 border-bottom">
                    <div className="container-fluid">
                        <div className=" order-1 order-lg-0">
                            <Link className="navbar-brand d-none d-lg-block" to={"/"}>
                                <svg width="50" height="41" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="32" rx="5" fill="#212529" />
                                    <path d="M11.1445 6.09375H13.7012L20.2227 22.3223L26.7305 6.09375H29.3008L21.207 26H19.2109L11.1445 6.09375ZM10.3105 6.09375H12.5664L12.9355 18.2344V26H10.3105V6.09375ZM27.8652 6.09375H30.1211V26H27.4961V18.2344L27.8652 6.09375Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNav" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center order-2 order-lg-1`} id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="links nav-link me-5 fs-6" to={"/"}>INICIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="links nav-link me-5 fs-6" to={"/Hombre"}>HOMBRE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="links nav-link me-5 fs-6" to={"/Mujer"}>MUJER</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center order-3 position-absolute end-0">
                            {!isLogged ? (
                                <>
                                    <Link to={"/Login"} className="link-light me-3">
                                        <button type="button" className="btn btn-outline-light">
                                            Iniciar Sesión
                                        </button>
                                    </Link>
                                </>
                            ) : props.rol === 'admin' ? (
                                <>
                                    <Link to={"/Login"} className="link-light me-3">
                                        <button type="button" className="btn btn-outline-light" onClick={handleLogout}>
                                            Cerrar Sesión
                                        </button>
                                    </Link>
                                    <Link to={"/DashboardProductos"} className="link-light me-3">
                                        <button type="button" className="btn btn-outline-light">
                                            Dashboard
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <Link to={"/Login"} className="link-secondary me-3">
                                    <button type="button" className="btn btn-outline-light" onClick={handleLogout}>
                                        Cerrar Sesión
                                    </button>
                                </Link>
                            )}
                            <span className="icon-pointer position-relative" onClick={() => setClickChangeOrders(!clickChangeOrders)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="links bi bi-handbag" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                                </svg>
                                {state.cart.length > 0 && (
                                    <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white">
                                        <span className="text-dark">{state.cart.length}</span>
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>
                </nav>
                {clickChangeOrders && <CartTotalOrder closeCart={setClickChangeOrders} />}
            </div>
        </div>
    );
}

export default Header;