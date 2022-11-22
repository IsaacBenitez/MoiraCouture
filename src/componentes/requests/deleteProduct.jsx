import axios from 'axios';

async function DeleteProduct(id,token) {
    let res = await axios({
        method: 'delete',
        baseURL: `https://moiracoutureback-production.up.railway.app/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }

    })

    if (res.status === 200) {
        alert("Producto eliminado")
    }
}

export default DeleteProduct;