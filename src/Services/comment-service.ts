import apiClient, { CanceledError } from "./api-client";
import { CommentData } from "../DataStructure";   

export { CanceledError }
export const getAllComments= () => {
    const abortController = new AbortController();
    const request = apiClient.get<CommentData[]>("comments/get", {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getComment = (id: number) => {
    const abortController = new AbortController();
    const request =  apiClient.get<CommentData>(`comments/get/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const createComment = (event: CommentData) => {
    const abortController = new AbortController();
    const request =  apiClient.post<CommentData>(`comments/create`, event, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updateComment = (event: CommentData) => {
    const abortController = new AbortController();
    const request = apiClient.put<CommentData>(`comments/update/${event.id}`, event, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deleteComment = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<CommentData>(`comments/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export default { getAllComments, getComment, createComment, updateComment, deleteComment}