import axios from "axios";

async function createUser(user) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'https://moiracouture-api.vercel.app/api/users',
        data: user
    })

    return data
}

export default createUser;