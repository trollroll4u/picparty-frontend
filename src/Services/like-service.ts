import apiClient, { CanceledError } from "./api-client";
import { LikeData } from "../DataStructure";   

export { CanceledError }
export const getAllLikes= () => {
    const abortController = new AbortController();
    const request = apiClient.get<LikeData[]>("Likes/get", {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getLike = (id: number) => {
    const abortController = new AbortController();
    const request =  apiClient.get<LikeData>(`Likes/get/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const createLike = (Like: LikeData) => {
    const abortController = new AbortController();
    const request =  apiClient.post<LikeData>(`Likes/create`, Like, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updateLike = (Like: LikeData) => {
    const abortController = new AbortController();
    const request = apiClient.put<LikeData>(`Likes/update/${Like.id}`, Like, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deleteLike = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<LikeData>(`Likes/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export default { getAllLikes, getLike, createLike, updateLike, deleteLike}