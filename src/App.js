import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './componentes/home/Header';
//import StripedColumnsExample from '../src/componentes/FormularioAcceder/formulario';
import GeneralCatalog from './componentes/home/GeneralCatalog';


import Login from './componentes/formularioAcceder/FormLogin';
import Register from './componentes/formularioRegistro/FormRegister';
//import AppContext from './context/AppContext';
import useInitialState from './customHooks/useInitialState';
import AppContext from './context/AppContext';

import Cards from './componentes/home/Cards';
import Footer from './components/footer';



// <Route path="/" element={<Home></Home>} /> changed to Cards
  function App() {
    const initialState = useInitialState();
    return (
      <div className="App">

        <AppContext.Provider value={initialState}>
          <div>
          <Header />
          <Routes>
            <Route path="/" element={<Cards></Cards>} />
            <Route path="/Hombre" element={<GeneralCatalog />} />
            <Route  path="/Mujer" element={<GeneralCatalog Genero={"Mujer"} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
          <Footer />
          </div>
          
        </AppContext.Provider>
       

         
        
      </div>
    );
  }

export default App;
