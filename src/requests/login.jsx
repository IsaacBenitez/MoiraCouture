import axios from "axios";

async function login(user) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'http://localhost:9000/api/login',
        data: user

    })
    
    return data
}

export default login;