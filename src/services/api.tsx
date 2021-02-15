import axios from 'axios'

const api = axios.create({
    baseURL: 'https://602995bf289eb50017cf7c9a.mockapi.io/api/v1'
})

export default api
