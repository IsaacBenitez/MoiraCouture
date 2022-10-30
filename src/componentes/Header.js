import React from 'react';

function Header() {
    return (
        <div className='ContenedorHeader'>
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-light text-decoration-none">
                        <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="32" rx="5" fill="#212529" />
                            <path d="M11.1445 6.09375H13.7012L20.2227 22.3223L26.7305 6.09375H29.3008L21.207 26H19.2109L11.1445 6.09375ZM10.3105 6.09375H12.5664L12.9355 18.2344V26H10.3105V6.09375ZM27.8652 6.09375H30.1211V26H27.4961V18.2344L27.8652 6.09375Z" fill="white" />
                        </svg>
                    </a>


                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="/" class="nav-link px-2 link-dark">Hombre</a></li>
                        <li><a href="/" class="nav-link px-2 link-dark">Mujer</a></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                        <button type="button" class="btn btn-light">Sign-up</button>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;