import apiClient, { CanceledError } from "./api-client";
import { UserData } from "../DataStructure";   

export { CanceledError }
export const getAllUsers= () => {
    const abortController = new AbortController();
    const request = apiClient.get<UserData[]>("users/get", {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getUser = (id: number) => {
    const abortController = new AbortController();
    const request =  apiClient.get<UserData>(`users/get/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const createUser = (user: UserData) => {
    const abortController = new AbortController();
    const request =  apiClient.post<UserData>(`users/create`, user, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updateUser = (user: UserData) => {
    const abortController = new AbortController();
    const request = apiClient.put<UserData>(`users/update/${user.id}`, user, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deleteUser = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<UserData>(`users/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export default { getAllUsers, getUser, createUser, updateUser, deleteUser}