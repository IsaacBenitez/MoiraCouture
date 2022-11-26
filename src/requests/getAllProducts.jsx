import axios from 'axios';

async function getAllProducts() {

    let { data } = await axios.get('https://moiracoutureback-production.up.railway.app/api/products');

    return data
}

export default getAllProducts;