import axios from "axios";

async function createUser(user) {

    let { data } = await axios({
        method: 'post',
        baseURL: 'https://moiracoutureback-production.up.railway.app/api/users',
        data: user

    })

    return data
}

export default createUser;