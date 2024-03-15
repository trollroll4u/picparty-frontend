import axios, { CanceledError } from "axios";

function backEnv(): string {
    return process.env.NODE_ENV === 'production' ? 'https://node23.cs.colman.ac.il:80' : 'http://127.0.0.1:80';
  }

export { CanceledError }
const apiClient = axios.create({
    baseURL: backEnv(),
});

export default apiClient;
