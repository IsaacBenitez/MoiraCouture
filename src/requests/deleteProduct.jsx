import axios from 'axios';

async function DeleteProduct(id,token) {
    let res = await axios({
        method: 'delete',
        baseURL: `https://moiracouture-api.vercel.app/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }

    })

    if (res.status === 200) {
        alert("Producto eliminado correctamente")
    }
}

export default DeleteProduct;