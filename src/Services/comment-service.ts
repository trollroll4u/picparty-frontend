import apiClient, { CanceledError } from "./api-client";
import {   CommentDatanew } from "../DataStructure";   

export { CanceledError }
export const getAllComments= () => {
    const abortController = new AbortController();
    const request = apiClient.get<CommentDatanew[]>("comments/get", {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getComment = (id: string) => {
    const abortController = new AbortController();
    const request =  apiClient.get<CommentDatanew>(`comments/get/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const createComment = (comment: CommentDatanew) => {
    const abortController = new AbortController();
    const request =  apiClient.post<CommentDatanew>(`comments/create`, comment, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updateComment = (comment: CommentDatanew) => {
    const abortController = new AbortController();
    const request = apiClient.put<CommentDatanew>(`comments/update/${comment.id}`, comment, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deleteComment = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<CommentDatanew>(`comments/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getPictureComments = () =>{
    const {request, abort} = getAllComments()
    const pictureComments = request.then((comments) => comments?.data.filter((comment) => comment.picture_path !== undefined && comment.picture_path !== ""))
    return {pictureComments, abort};
}

export const getMessageComments = () =>{
    const {request, abort} = getAllComments()
    const pictureComments = request.then((comments) => comments?.data.filter((comment) => comment.comment !== undefined && comment.comment !== ""))
    return {pictureComments, abort};
}

export const getLikesComments = () =>{
    const {request, abort} = getAllComments()
    const pictureComments = request.then((comments) => comments?.data.filter((comment) => comment.like !== undefined && comment.like !== false))
    return {pictureComments, abort};
}
export default { getAllComments, getComment, createComment, updateComment, deleteComment}