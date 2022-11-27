import jwtDecode from "jwt-decode";
import {Navigate} from "react-router-dom";


function PrivateRoute({ children }){
    let infoUser = window.localStorage.getItem('login')
    if(infoUser) {
        let token = JSON.parse(infoUser).token
        let rol = jwtDecode(token).rol
        if (rol === "cliente") {
            return <Navigate to={"/"}/>
        } else if (rol === "admin") {
            return children
        }
    }else{
        return <Navigate to={"/Login"}/>
    }
}
export default PrivateRoute;