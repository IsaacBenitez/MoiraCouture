import axios from "axios";

async function createUser(user) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'http://localhost:9000/api/users',
        data: user
    })

    return data
}

export default createUser;