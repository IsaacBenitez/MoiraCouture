import { Link } from "react-router-dom";

function NavLinks(props) {
    let navLinksNavbar = (
        <>

            <li>
                <Link to={"/"}
                    className="links border-bottom nav-link link-secondary me-3">Home
                </Link>
            </li>

            <li>
                <Link to={"/hombre"}
                    className="links nav-link link-secondary me-3">Hombre
                </Link>
            </li>

            <li>
                <Link to={"/mujer"}
                    className="links nav-link link-secondary me-3">Mujer
                </Link>
            </li>

        </>
    );

    let navLinksFooter = (
        <>

            <li>
                <Link to={"/"}
                    className="links border-bottom nav-link link-secondary me-3">Home
                </Link>
            </li>

            <li>
                <Link to={"/hombre"}
                    className="links nav-link link-secondary me-3">Hombre
                </Link>
            </li>

            <li>
                <Link to={"/mujer"}
                    className="links nav-link link-secondary me-3">Mujer
                </Link>
            </li>

        </>
    );
    return props.footer ? navLinksFooter : navLinksNavbar;
}

export default NavLinks;