import CrearProducto from "../dashboard/crearProducto";
function CreateButton(props) {
    // let url = props.path + "/create";
    return (
        <CrearProducto newproduct={props.newproduct}></CrearProducto>
    );
}

export default CreateButton;