import React from 'react';
import NavLinks from './navLinks';
import { Link } from 'react-router-dom';



function Navbar(props) {
    return (
        <div className='ContenedorHeader'>
            <div class="container py-2">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-2 border-bottom">

                    <Link classname="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-light text-decoration-none" to={"/"}>
                        <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="32" rx="5" fill="#212529" />
                            <path d="M11.1445 6.09375H13.7012L20.2227 22.3223L26.7305 6.09375H29.3008L21.207 26H19.2109L11.1445 6.09375ZM10.3105 6.09375H12.5664L12.9355 18.2344V26H10.3105V6.09375ZM27.8652 6.09375H30.1211V26H27.4961V18.2344L27.8652 6.09375Z" fill="white" />
                        </svg>
                    </Link>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

                        <NavLinks></NavLinks>

                    </ul>

                    <div class="col-md-3 text-end">

                        <Link
                            to={"/login"}
                            className="btn btn-outline-light me-3">
                            Login
                        </Link>

                        <Link
                            to={"/signup"}
                            className="btn btn-light  me-3">
                            Sign-up
                        </Link>

                        <Link
                            to={"/cart"}
                            className="links bi bi-cart4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="links bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </Link>
                    </div>

                </header>
            </div>
        </div>
    );
}

export default Navbar;