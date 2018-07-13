
import {API_BASE_URL} from '../../config';

const userFetch = value => fetch(`${API_BASE_URL}/users/checkExist`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({username: value})
    })
    .then((res)=> res.json())

const bandNameFetch = value => fetch(`${API_BASE_URL}/bands/checkNameExist`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({name: value})
    })
    .then((res)=> res.json())

const bandUrlFetch = value => fetch(`${API_BASE_URL}/bands/checkUrlExist`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({bandUrl: value})
    })
    .then((res)=> res.json())


const asyncValidate = values => {
    let x = {}
        return userFetch(values.username).then((res) => {
            if(res > 0){
                x = {...x, username: 'That username is taken'}
            }
            }).then(()=> {
                if(values.bandName){
                    return bandNameFetch(values.bandName)}})
            .then((res)=> {
                if(res > 0){
                    x = {...x, bandName: 'That band name is taken'}
                }
            }).then(()=> {
                if(values.bandUrl){
                    return bandUrlFetch(values.bandUrl)}})
            .then((res)=> {
                if(res > 0){
                    x = {...x, bandUrl: 'That band url is taken'}
                }
                if(Object.keys(x).length !== 0){throw x}
            })
        }
                
    // return userFetch(values.username).then((res) => {
    //     console.log(res)
    //     if(res > 0){
    //         throw { username: 'That username is taken' }
    //     }
    // })



export default asyncValidate