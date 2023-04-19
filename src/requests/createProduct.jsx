import axios from "axios";

async function createProduct(product,token) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'http://localhost:9000/api/products',
        headers: {
            Authorization:`Bearer ${token}`  
        },
        data: product

    })
    console.log(data)
    return data
}

export default createProduct;