import apiClient, { CanceledError } from "./api-client";
import { PictureData } from "../DataStructure";   

export { CanceledError }

export const getAllPictures= () => {
    const abortController = new AbortController();
    const request = apiClient.get<PictureData[]>("pictures/get", {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getPictures = (id: number) => {
    const abortController = new AbortController();
    const request =  apiClient.get<PictureData>(`pictures/get/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const createPictures = (picture: PictureData) => {
    const abortController = new AbortController();
    const request =  apiClient.post<PictureData>(`pictures/create`, picture, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updatePictures = (picture: PictureData) => {
    const abortController = new AbortController();
    const request = apiClient.put<PictureData>(`pictures/update/${picture.id}`, picture, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deletePictures = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<PictureData>(`pictures/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export default { getAllPictures, getPictures, createPictures, updatePictures, deletePictures}


