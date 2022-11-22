import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './componentes/home/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
//import StripedColumnsExample from '../src/componentes/FormularioAcceder/formulario';
import GeneralCatalog from './componentes/home/GeneralCatalog';


import Login from './componentes/formularioAcceder/FormLogin';
import Register from './componentes/formularioRegistro/FormRegister';
//import AppContext from './context/AppContext';
import useInitialState from './customHooks/useInitialState';
import AppContext from './context/AppContext';

import Cards from './componentes/home/Cards';
import Footer from './components/footer';
import IndexDashboard from "./componentes/dashboard";



// <Route path="/" element={<Home></Home>} /> changed to Cards
function App() {
  const initialState = useInitialState();
  return (
    <div className="App">

      <AppContext.Provider value={initialState}>
          {<Header />}
          <Routes>

            <Route path="/" element={<Cards></Cards>} />
            <Route path="/Hombre" element={<GeneralCatalog />} />
            <Route path="/Mujer" element={<GeneralCatalog Genero={"Mujer"} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/DashboardProductos" element={<IndexDashboard></IndexDashboard>}></Route>
          </Routes>
          <Footer />
      </AppContext.Provider>




    </div>
  );
}

export default App;
