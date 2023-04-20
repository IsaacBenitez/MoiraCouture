import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import createProduct from "../../requests/createProduct";

function CrearProducto(props) {

    const [show, setShow] = useState(false);
    const [categoria, setCategoria] = useState();
    const [sexo, setSexo] = useState();
    const [talla, setTalla] = useState();
    const [color, setColor] = useState();
    const [precio, setPrecio] = useState();
    const [stock, setStock] = useState();
    const [descripcion, setDescripcion] = useState();
    const [nombre, setNombre] = useState();
    const [imagen, setImagen] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCategoria("")
        setColor("")
        setDescripcion("")
        setImagen("")
        setNombre("")
        setPrecio(0)
        setSexo("")
        setStock(0)
        setTalla("")
        setShow(true);
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const product = {
            "categoria": categoria,
            "sexo": sexo,
            "talla": talla,
            "color": color,
            "precio": precio,
            "stock": stock,
            "descripcion": descripcion,
            "nombre": nombre,
            "imagen": imagen
        }


        let login = window.localStorage.getItem('login')

        if (login) {
            let token = JSON.parse(login).token

            try {

                let data = await createProduct(product, token)
                product["id"] = data.id;
                setShow(false);
                props.newproduct(product);
                alert('Producto creado correctamente')


            } catch (error) {

                let { status } = error.response

                if (status === 401) {
                    let { message } = error.response.data.error;
                    alert(message)
                } else if (status === 400) {
                    let { message } = error.response.data.message;
                    alert(message)
                }

                console.log(error)

            }
        } else {
            alert('Inicie sesión')
        }


    }

    return (
        <>
            <button className="btn btn-success" onClick={handleShow}>
                <b>＋ Nuevo producto</b>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="editProduct" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <select className="form-control" id="floatingCategory" required value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option disabled value="">-- Choose an option --</option>
                                <option value="camisetas">Camisetas</option>
                                <option value="busos">Busos</option>
                                <option value="shorts">Shorts</option>
                                <option value="sudaderas">Sudaderas</option>
                                <option value="pantalonetas">Pantalonetas</option>
                            </select>
                            <label htmlFor="floatingCategory">
                                Categoría
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-control" id="floatingSex" required value={sexo} onChange={(e) => setSexo(e.target.value)}>
                                <option disabled value="">-- Choose an option --</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                            <label htmlFor="floatingSex">
                                Sexo
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-control" id="floatingSize" required value={talla} onChange={(e) => setTalla(e.target.value)}>
                                <option disabled value="">-- Choose an option --</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <label htmlFor="floatingSize">
                                Talla
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingColor"
                                required={true}
                                value={color}
                                onChange={(e)=>setColor(e.target.value)}
                            />
                            <label htmlFor="floatingColor">
                                Color
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingName"
                                required={true}
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <label htmlFor="floatingName">
                                Nombre
                            </label>

                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingDesc"
                                required={true}
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                            <label htmlFor="floatingDesc">
                                Descripción
                            </label>

                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingImg"
                                required={true}
                                value={imagen}
                                onChange={(e)=>setImagen(e.target.value)}
                            />
                            <label htmlFor="floatingImg">
                                Foto URL
                            </label>

                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="floatingPrice"
                                required={true}
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                            <label htmlFor="floatingPrice">
                                Precio
                            </label>

                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="floatingStock"
                                required={true}
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                            <label htmlFor="floatingStock">
                                Stock
                            </label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Cancelar
                    </button>
                    <button form="editProduct" className="btn btn-primary">Agregar</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CrearProducto;