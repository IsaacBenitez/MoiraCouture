import axios from "axios";

async function createProduct(product,token) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'https://moiracoutureback-production.up.railway.app/api/products',
        headers: {
            Authorization:`Bearer ${token}`  
        },
        data: product

    })
    console.log(data)
    return data
}

export default createProduct;