import apiClient from "./api-client";
import { UserData } from "../DataStructure";   

// export { CanceledError }

export const getAllUsers = () => {
    return new Promise<UserData[]>((resolve, reject) => {
        apiClient.get<UserData[]>("users/get").then((res) => {
                const users : UserData[] = res.data;
                resolve(users);
        }).catch((err) => {
            console.log("error in getting all users: ", err);
            reject(err);
        })
    })
}


export const getUser = (id: string) => {
    console.log("try to get user: " + id);
    return new Promise<UserData>(async (resolve, reject) => {
        await apiClient.get<UserData>(`users/get/${id}`).then((res) => {
            console.log("success to get user" +  res.data._id);
            resolve(res.data);
        }).catch((err) => {
            console.log("error in getting user: ", err);
            reject(err);
        })
    })
}

export const createUser = (user: UserData) => {
    return new Promise<UserData>((resolve, reject) => {
        apiClient.post<UserData>(`users/create`, user, {        
        }).then((res) => {
            console.log( "success to create user" +  res);
            resolve(res.data);
        }).catch((err) => {
            console.log("error in create user: ", err);
            reject(err);
        })
    })
}

export const updateUser = (user: UserData) => {
    return new Promise<UserData>((resolve, reject) => {
        apiClient.put<UserData>(`users/update/${user._id}`, user)
        .then((res) => {
            console.log( "success to update user" +  res);
            resolve(res.data);
        }).catch((err) => {
            console.log("error in update user: ", err);
            reject(err);
        })
    })
}

export const deleteUser = (id: string) => {
    return new Promise<UserData>((resolve, reject) => {
        apiClient.delete<UserData>(`users/delete/${id}`).then((res) => {
                resolve(res.data);
        }).catch((err) => {
            console.log("error in delete user: ", err);
            reject(err);
        })
    })
}


export default { getAllUsers, getUser, createUser, updateUser, deleteUser}