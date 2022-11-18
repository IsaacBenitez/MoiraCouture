import NavLinks from "./navLinks";

function Footer(props) {
    return (
        <div className="ContenedorFooter">
            <div className="container">
                <footer className="py-3">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <NavLinks></NavLinks>
                    </ul>
                    <p className="text-center text-muted">&copy; 2022 Moira Couture</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;