import './css/App.css'
import {Route, Routes} from "react-router-dom";
import Header from './componentes/home/Header';
import GeneralCatalog from './componentes/home/GeneralCatalog';


import Register from './componentes/formularioRegistro/FormRegister';

import useInitialState from './customHooks/useInitialState';
import AppContext from './context/AppContext';

import Cards from './componentes/home/Cards';
import Footer from './componentes/home/footer';
import IndexDashboard from "./componentes/dashboard";
import LoginForm from "./componentes/formularioAcceder/FormLogin";
import PrivateRoute from "./componentes/PrivateRoute/PrivateRoute";
import {useEffect, useState} from "react";
import jwtDecode from "jwt-decode";


function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [rol, setRol] = useState('');

    useEffect(() => {
        let infoUser = window.localStorage.getItem('login')
        if(infoUser){
            let token = JSON.parse(infoUser).token
            let rolUsuario = jwtDecode(token).rol
            setRol(rolUsuario)
            setIsLogged(true)
        }else{
            setIsLogged(false);
        }
    },[isLogged])

    const initialState = useInitialState();
    return (
        <div className="App">

            <AppContext.Provider value={initialState}>
                <Header isLogged={isLogged} setIsLogged={setIsLogged} rol={rol}/>
                <Routes>
                    <Route path="/" element={<Cards></Cards>}/>
                    <Route path="/Hombre" element={<GeneralCatalog/>}/>
                    <Route path="/Mujer" element={<GeneralCatalog Genero={"Mujer"}/>}/>
                    <Route path="/Login" element={<LoginForm setIsLogged={setIsLogged}/>} />
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/DashboardProductos" element={
                        <PrivateRoute>
                            <IndexDashboard/>
                        </PrivateRoute>
                    }
                    />
                </Routes>
                <Footer/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
