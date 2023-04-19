import axios from 'axios';

async function DeleteProduct(id,token) {
    let res = await axios({
        method: 'delete',
        baseURL: `http://localhost:9000/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }

    })

    if (res.status === 200) {
        alert("Producto eliminado correctamente")
    }
}

export default DeleteProduct;