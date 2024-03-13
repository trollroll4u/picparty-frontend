import axios, { CanceledError } from "axios";

export { CanceledError }
const apiClient = axios.create({
    baseURL: 'https://node23.cs.colman.ac.il:80',
});

export default apiClient;
