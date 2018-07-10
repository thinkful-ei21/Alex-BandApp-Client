import { SubmissionError } from 'redux-form'
import {API_BASE_URL} from '../../config';

const userFetch = value => new Promise(fetch(`${API_BASE_URL}/users/checkExist`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({username: value})
    })
    .then((res)=> res.json())
)

function submit(values) {
    return userFetch(values.username).then((res) => {
        console.log(res)
        if(res > 0){
             throw new SubmissionError({username: "username is taken"})
        }
    })
}

export default submit