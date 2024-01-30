import apiClient, { CanceledError } from "./api-client";
import { EventData } from "../DataStructure";   

export { CanceledError }
export const getAllEvents= () => {
    const abortController = new AbortController();
    const request = apiClient.get<EventData[]>("events/get", {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const getEvent = (id: number) => {
    const abortController = new AbortController();
    const request =  apiClient.get<EventData>(`events/get/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const createEvent = (event: EventData) => {
    const abortController = new AbortController();
    const request =  apiClient.post<EventData>(`events/create`, event, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const updateEvent = (event: EventData) => {
    const abortController = new AbortController();
    const request = apiClient.put<EventData>(`events/update/${event.id}`, event, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export const deleteEvent = (id: number) => {
    const abortController = new AbortController();
    const request = apiClient.delete<EventData>(`events/delete/${id}`, {signal: abortController.signal,})
    return {request, abort: () => abortController.abort()};
}

export default { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent}