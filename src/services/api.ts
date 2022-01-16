import axios from 'axios';

export const api = axios.create({
    baseURL:
        process.env.NODE_ENV === 'production'
            ? process.env.REACT_APP_PRODUCTION_SERVER_URL
            : process.env.REACT_APP_DEV_SERVER_URL,
});
