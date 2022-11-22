import DeleteTool from "./deleteTool";
import UpdateTool from "./updateTool";

function Tools(props) {
    if (props.tools && props.tools.length > 0) {
            return (
                <td className= "align-middle">
                    <UpdateTool editproduct={props.editproduct} tools={props.tools} path={props.path} producto={props.producto} />
                    <DeleteTool delproduct={props.delproduct} tools={props.tools} path={props.path} id={props.producto["id"]} />
                </td>
            );
        }

}

export default Tools;