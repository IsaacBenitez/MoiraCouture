import './App.css';
import { Route, Routes } from "react-router-dom";
//import Header from './componentes/Header45.js';
import Header from './componentes/home/Header';
//import StripedColumnsExample from '../src/componentes/FormularioAcceder/formulario';
import Home from './componentes/home/Home';
import Hombre from './componentes/home/Hombre';
import Mujer from './componentes/home/Mujer';
import Login from './componentes/formularioAcceder/FormLogin';
import Register from './componentes/formularioRegistro/FormRegister';
//import AppContext from './context/AppContext';
import useInitialState from './customHooks/useInitialState';
import AppContext from './context/AppContext';




  function App() {
    const initialState = useInitialState();
    return (
      <div className="App">

        <AppContext.Provider value={initialState}>
          <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Hombre" element={<Hombre />} />
            <Route path="/Mujer" element={<Mujer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
          </div>
          
        </AppContext.Provider>
       

         
        
      </div>
    );
  }

export default App;
