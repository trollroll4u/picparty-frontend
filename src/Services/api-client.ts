import axios, { CanceledError } from "axios";

export { CanceledError }
const apiClient = axios.create({
    baseURL: 'http://18.153.92.13:3010',
});

export default apiClient;
