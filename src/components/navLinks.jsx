import { Link } from "react-router-dom";

function NavLinks(props) {
    let navLinksNavbar = (
        <>
            <div>
                <li>
                    <Link to={"/"}
                        className="links border-bottom nav-link link-secondary me-3">Home
                    </Link>
                </li>
            </div>

            <div>
                <li>
                    <Link to={"/hombre"}
                        className="links nav-link link-secondary me-3">Hombre
                    </Link>
                </li>
            </div>

            <div>
                <li>
                    <Link to={"/mujer"}
                        className="links nav-link link-secondary me-3">Mujer
                    </Link>
                </li>
            </div>
        </>
    );
    return navLinksNavbar;
}

export default NavLinks;