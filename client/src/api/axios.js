import axios from 'axios';

const API_URL = import.meta.env.CLIENT_ENV
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export default api;