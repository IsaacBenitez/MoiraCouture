function Cards(props) {
    return (
        <div>
            <div className="container px-5 py-3" />
            <h2 className="pb-2 border-bottom text-center">MODA URBANA 100% COLOMBIANA</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5 justify-content-center">

                <div className="col mx-4">
                    <div className="card card-cover overflow-hidden  rounded-4 shadow-lg">
                        <img src="./images/hombre.png" alt="Imagen Hombre" />
                    </div>
                </div>
                <div className="col mx-4">
                    <div className="card card-cover overflow-hidden  rounded-4 shadow-lg">
                        <img src="./images/mujer.png" alt="Imagen Mujer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;