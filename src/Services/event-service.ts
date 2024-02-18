import apiClient, { CanceledError } from "./api-client";
import { EventData } from "../DataStructure";   
import axios from "axios";

export { CanceledError }

export const convertStringDateToDate = (event: EventData) => {
    const newDate: Date = new Date(event.date);
    return newDate;
}

export const getAllEvents = () => {
    return new Promise<EventData[]>(async (resolve, reject) => {
        await apiClient.get<EventData[]>("events/get").then((res) => {
                const events : EventData[] = res.data;
                events.map((event) => {
                    event.date = convertStringDateToDate(event);
                    return event;
                })
                resolve(events);
        }).catch((err) => {
            console.log("error in getting all events: ", err);
            reject(err);
        })
    })
}

export const getEvent = (id: string) => {
    return new Promise<EventData>(async (resolve, reject) => {
       await apiClient.get<EventData>(`events/get/${id}`).then((res) => {
                const event : EventData = res.data;
                event.date = convertStringDateToDate(event);
                resolve(event);
                
        }).catch((err) => {
            console.log("error in getting event: ", err);
            reject(err);
        })
    })
}

export const createEvent = (event: EventData) => {
    return new Promise<EventData>((resolve, reject) => {
            apiClient.post<EventData>(`events/create`, event,
            ).then((res) => {
                console.log(res);
                resolve(res.data);
            }).catch(err => {
                console.log("error in create event: ", err);
                reject(err);
            });
    })
}

export const updateEvent = (event: EventData,file : File) => {
    return new Promise<EventData>((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        apiClient.put<EventData>(`events/update/${event._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            params: {
                file: file
            }
        }).then((res) => {
            console.log(res);
            resolve(res.data);
        }).catch((err) => {
            console.log("error in update event: ", err);
            reject(err);
        })
    })
}

export const deleteEvent = (id: string) => {
    return new Promise<EventData>((resolve, reject) => {
        apiClient.delete<EventData>(`events/delete/${id}`).then((res) => {
                resolve(res.data);
        }).catch((err) => {
            console.log("error in delete event: ", err);
            reject(err);
        })
    })
}

export const getEventByUser = (id: string) => {
    return new Promise<EventData[]>((resolve, reject) => {
        apiClient.get<EventData[]>(`events/get_by_user/${id}`).then((res) => {
                const events : EventData[] = res.data;
                events.map((event) => {
                    event.date = convertStringDateToDate(event);
                    return event;
                })
                resolve(events);
        }).catch((err) => {
            console.log("error in getting event by user: ", err);
            reject(err);
        })
    })
}


export default { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent}