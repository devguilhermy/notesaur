import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.PROD
        ? import.meta.env.VITE_PRODUCTION_SERVER_URL
        : import.meta.env.VITE_DEV_SERVER_URL,
});
