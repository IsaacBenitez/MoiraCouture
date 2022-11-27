import EditarProducto from "../dashboard/editarProducto";

function UpdateTool(props) {

    if (props.tools.indexOf("update") >= 0) {
        return (
            <EditarProducto editproduct={props.editproduct} producto={props.producto}/>
        );
    }
    return null;
}

export default UpdateTool;