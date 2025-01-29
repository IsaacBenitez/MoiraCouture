import {Trash} from "react-bootstrap-icons";
import deleteProduct from "../../requests/deleteProduct";

function DeleteTool(props) {


    async function handleSubmit() {

        let login = window.localStorage.getItem('login')

        if (login) {
            let token = JSON.parse(login).token

            try {
                if (window.confirm('Are you sure you want to delete this item?')) {

                    let data = await deleteProduct(props.id, token)
                    props.delproduct(props.id);
                }


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
    if (props.tools.indexOf("delete") >= 0) {
        let url = props.path + "/delete/" + props.id;
        return (
            <button onClick={() => {
               handleSubmit()
            }} className="btn btn-danger mx-1" type="button" >
                <Trash></Trash>
            </button>
        );
    }
    return null;
}

export default DeleteTool;