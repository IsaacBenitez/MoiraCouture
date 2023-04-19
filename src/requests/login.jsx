import axios from "axios";

async function login(user) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'https://moiracouture-api.vercel.app/api/login',
        data: user

    })
    
    return data
}

export default login;