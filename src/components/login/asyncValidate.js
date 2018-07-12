
import {API_BASE_URL} from '../../config';

const userFetch = value => fetch(`${API_BASE_URL}/users/checkExist`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({username: value})
    })
    .then((res)=> res.json())


const asyncValidate = values => {
    return userFetch(values.username).then((res) => {
        console.log(res)
        if(res > 0){
            throw { username: 'That username is taken' }
        }
    })
}


export default asyncValidate