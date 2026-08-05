import axios from 'axios';

const api = axios.create({
    baseURL: 'https://questlog-cj87.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export default api;