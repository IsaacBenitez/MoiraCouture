import './css/App.css'
import { Route, Routes } from "react-router-dom";
import Header from './componentes/home/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import GeneralCatalog from './componentes/home/GeneralCatalog';


import Register from './componentes/formularioRegistro/FormRegister';

import useInitialState from './customHooks/useInitialState';
import AppContext from './context/AppContext';

import Cards from './componentes/home/Cards';
import Footer from './components/footer';
import IndexDashboard from "./componentes/dashboard";
import LoginForm from "./componentes/formularioAcceder/FormLogin";



// <Route path="/" element={<Home></Home>} /> changed to Cards
function App() {
  const initialState = useInitialState();
  return (
    <div className="App">

      <AppContext.Provider value={initialState}>
          <Header/>
          <Routes>
            <Route path="/" element={<Cards></Cards>} />
            <Route path="/Hombre" element={<GeneralCatalog />} />
            <Route path="/Mujer" element={<GeneralCatalog Genero={"Mujer"} />} />
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/DashboardProductos" element={<IndexDashboard></IndexDashboard>}></Route>
          </Routes>
          <Footer/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
