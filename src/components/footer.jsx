import NavLinks from "./navLinks";

function Footer(props) {
    return (
        <div class="ContenedorFooter">
            <div class="container">
                <footer class="py-3">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <NavLinks></NavLinks>
                    </ul>
                    <p class="text-center text-muted">&copy; 2022 Moira Couture</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;