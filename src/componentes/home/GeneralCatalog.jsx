import React from 'react';
import ProductList from '../Products/ProductList'


const GeneralCatalog = (props) => {
	return (
		<section className="container-fluid flex-grow-1">
			<h2 className="border-bottom text-center mx-5 mt-3 pb-1">{props.Genero === "Mujer" ? "MUJER" : "HOMBRE"}</h2>
			< ProductList Genero={props.Genero}/>
		</section>
	);
}

export default GeneralCatalog;
