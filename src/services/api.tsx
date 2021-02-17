import axios from 'axios'

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


export default api
