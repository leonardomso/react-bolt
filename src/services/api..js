import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: process.env.REACT_APP_API || "http://localhost:3333",
});

api.interceptors.request.use(async config => {
    const token = getToken();
    const configuration = config;
    if (token) {
        configuration.headers.Authorization = `Bearer ${token}`;
    }
    return configuration;
});

export default api;
