import axios from "axios";

async function login(user) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'https://moiracoutureback-production.up.railway.app/api/login',
        data: user

    })
    
    return data
}

export default login;