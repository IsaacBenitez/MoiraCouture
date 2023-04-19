import axios from "axios";

async function editProduct(product, token, id) {

    let { data } = await axios({
        method: 'put',
        baseURL: `http://localhost:9000/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: product

    })

    return data
}

export default editProduct;