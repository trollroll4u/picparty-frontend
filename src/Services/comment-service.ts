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

export const createComment = (comment: CommentData) => {
    const abortController = new AbortController();
    const request =  apiClient.post<CommentData>(`comments/create`, comment, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updateComment = (comment: CommentData) => {
    const abortController = new AbortController();
    const request = apiClient.put<CommentData>(`comments/update/${comment.id}`, comment, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deleteComment = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<CommentData>(`comments/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export default { getAllComments, getComment, createComment, updateComment, deleteComment}