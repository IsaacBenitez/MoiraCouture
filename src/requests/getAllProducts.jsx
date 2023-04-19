import axios from 'axios';

async function getAllProducts() {

    let { data } = await axios.get('http://localhost:9000/api/products');

    return data
}

export default getAllProducts;