import axios, { CanceledError } from "axios";

export { CanceledError }
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3010',
});

export default apiClient;
