
import hero from '../../assets/icons/hero.png';
import hombre from '../../assets/icons/hombre.png';
import mujer from '../../assets/icons/mujer.png';
import '../../css/App.css';

function Cards(props) {
    return (
<div>
        <div className='hero-img'>
        <img src={hero} alt="" />
    </div>
        <div>
            <div className="container px-5 py-3" />
            <h2 className="pb-2 border-bottom text-center">MODA URBANA 100% COLOMBIANA</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5 justify-content-center">

                <div className="col mx-4">
                    <div className="card card-cover overflow-hidden  rounded-4 shadow-lg">
                        <img src={hombre} alt="Imagen Hombre" />
                    </div>
                </div>
                <div className="col mx-4">
                    <div className="card card-cover overflow-hidden  rounded-4 shadow-lg">
                        <img src={mujer} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Cards;