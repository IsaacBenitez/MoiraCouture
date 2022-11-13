//LIBRARIES
//CSS
import './css/App.css';
//COMPONENTS
import Navbar from './components/navbar.jsx';
import Hero from './components/hero';
import Cards from './components/cards';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
