import axios from 'axios';

interface User {
    email: string
    senha: string
}

const api = axios.create({
    baseURL: 'https://602995bf289eb50017cf7c9a.mockapi.io/api/v1'
})

// axios.post<User[]>(api)
//     .then(response => {
//         response.data
//     })/

// export const registerUserService = (request) => {
//     const REGISTER_API_ENDPOINT =  'https://inativos.appspot.com/login/usuario/';
//     console.log("REGISTER_API_ENDPOINT: " + REGISTER_API_ENDPOINT)

//     const parameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(request.user)
//     };

//     return fetch(REGISTER_API_ENDPOINT, parameters)
//       .then(response => {
//         return response.json();
//       })
//       .then(json => {
//         return json;
//       });
//   };


export default api
