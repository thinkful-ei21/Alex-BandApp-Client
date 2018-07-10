import {API_BASE_URL} from './config';
export const required = value => value ? undefined : 'Required';

export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';

// const userFetch = value => new Promise(fetch(`${API_BASE_URL}/users/checkExist`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({username: value})
//     })
//     .then((res)=> res.json())
// )

// const existingUser = (value) => {
//     console.log(value)
//     return userFetch(value).then((res) => {
//         if(res > 0){
//              return "username is taken"
//         }
//     })
// }

// export default existingUser
    
   
    
