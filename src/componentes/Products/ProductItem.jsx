import React, { useContext } from 'react';
import '../../styles/ProductItem.scss';
import AppContext from '../../context/AppContext';


const ProductItemHombre = ({ product }) => {
	const { addCart } = useContext(AppContext);
	const handleClick = item => {
		addCart(item);
	}

	return (
		<div className="d-flex flex-column col-lg-3 col-md-4 col-sm-6 col-6 g-4">
			{/* Imagen */}
			<div className="flex-grow-1 position-relative">
				<img className="img-fluid object-fit-cover w-100 h-100" src={product.imagen} alt={product.descripcion} />
				<div className="icon-pointer position-absolute bottom-0 start-0 end-0 bg-opacity-100 text-center product-card__overlay" onClick={() => handleClick(product)}>
					<button className="btn btn-dark fw-semibold text-white w-100 ">Agregar a la bolsa</button>
				</div>
			</div>

			{/* Botón y texto */}
			<div className="d-flex flex-column align-items-center p-2">
				<div className='text-center'>
					<p className="mb-1">{product.nombre}</p>
					<p className="text-muted">${product.precio}</p>
				</div>
			</div>
		</div>
	);

}

export default ProductItemHombre;