import React from 'react';
import ProductList from '../Products/ProductList'


const GeneralCatalog = (props) => {
	return (
		<div className="contenedor">
			< ProductList Genero={props.Genero}/>
		</div>
	);
}

export default GeneralCatalog;
