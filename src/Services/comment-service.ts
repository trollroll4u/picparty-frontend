import apiClient, { CanceledError } from "./api-client";
import {   CommentDatanew } from "../DataStructure";   

export { CanceledError }

export const getAllComments= () => {
    return new Promise<CommentDatanew[]>((resolve, reject) => {
        apiClient.get<CommentDatanew[]>("comments/get").then((res) => {
                const comments : CommentDatanew[] = res.data;
                resolve(comments);
        }).catch((err) => {
            console.log("error in getting all comments: ", err);
            reject(err);
        })
    })
}

export const getComment = (id: string) => {
    return new Promise<CommentDatanew>((resolve, reject) => {
        apiClient.get<CommentDatanew>(`comments/get/${id}`).then((res) => {
                const comment : CommentDatanew = res.data;
                resolve(comment);
        }).catch((err) => {
            console.log("error in getting comment: ", err);
            reject(err);
        })
    })
}

export const createPictureComment = (comment: CommentDatanew,file: File) => {
    return new Promise<CommentDatanew>((resolve, reject) => {
        const formData = new FormData();
            formData.append("file", comment.pic_file as Blob);
        apiClient.post<CommentDatanew>(`comments/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
                resolve(res.data);
        }).catch((err) => {
            console.log("error in create comment: ", err);
            reject(err);
        })
    })
}

export const createComment = (comment: CommentDatanew) => {
    return new Promise<CommentDatanew>((resolve, reject) => {
        apiClient.post<CommentDatanew>(`comments/create`, comment).then((res) => {
            console.log("create comment: ", res.data);
            resolve(res.data);
        }).catch((err) => {
            console.log("error in create comment: ", err);
            reject(err);
        })
    })
}
export const updateComment = (comment: CommentDatanew) => {
    return new Promise<CommentDatanew>((resolve, reject) => {
        apiClient.put<CommentDatanew>(`comments/update/${comment._id}`, comment).then((res) => {
                resolve(res.data);
        }).catch((err) => {
            console.log("error in update comment: ", err);
            reject(err);
        })
    })
}

export const deleteComment = (id: string) => {
    return new Promise<CommentDatanew>((resolve, reject) => {
        apiClient.delete<CommentDatanew>(`comments/delete/${id}`).then((res) => {
            console.log("delete comment: ", res.data);
                resolve(res.data);
        }).catch((err) => {
            console.log("error in delete comment: ", err);
            reject(err);
        })
    })
}

export const getPictureComments = () => {
    return new Promise<CommentDatanew[]>((resolve, reject) => {
        apiClient.get<CommentDatanew[]>("comments/get_pictures").then((res) => {
                resolve(res.data);
        }).catch((err) => {
            console.log("error in getting all comments: ", err);
            reject(err);
        })
    })
}

export const getMessageComments = () => {
    // return new Promise<CommentDatanew[]>((resolve, reject) => {
    //     apiClient.get<CommentDatanew[]>("comments/get_messages").then((res) => {
    //             const comments : CommentDatanew[] = res.data;
    //             resolve(comments);
    //     }).catch((err) => {
    //         console.log("error in getting all comments: ", err);
    //         reject(err);
    //     })
    // })
    return getAllComments().then((comments) => comments?.filter((comment) => comment.comment !== undefined && comment.comment !== ""))
}


export const getLikesComments = () => {
    // return new Promise<CommentDatanew[]>((resolve, reject) => {
    //     apiClient.get<CommentDatanew[]>("comments/get_likes").then((res) => {
    //             const comments : CommentDatanew[] = res.data;
    //             resolve(comments);
    //     }).catch((err) => {
    //         console.log("error in getting all comments: ", err);
    //         reject(err);
    //     })
    // })
    return getAllComments().then((comments) => comments?.filter((comment) => comment.like !== undefined && comment.like !== false))
}

export const getPictureCommentsByUser = (id:string ) => {
    // return new Promise<CommentDatanew[]>((resolve, reject) => {
    //     apiClient.get<CommentDatanew[]>("comments/get_pictures").then((res) => {
    //             const comments : CommentDatanew[] = res.data;
    //             resolve(comments);
    //     }).catch((err) => {
    //         console.log("error in getting all comments: ", err);
    //         reject(err);
    //     })
    // })
    return getAllComments().then((comments) => comments?.filter((comment) => comment.user_id == id && comment.picture_file !== undefined && comment.picture_file !== ""))
}

export const getMessageCommentsByUser = (id:string) => {
    // return new Promise<CommentDatanew[]>((resolve, reject) => {
    //     apiClient.get<CommentDatanew[]>("comments/get_messages").then((res) => {
    //             const comments : CommentDatanew[] = res.data;
    //             resolve(comments);
    //     }).catch((err) => {
    //         console.log("error in getting all comments: ", err);
    //         reject(err);
    //     })
    // })
    return getAllComments().then((comments) => comments?.filter((comment) => comment.user_id == id && comment.comment !== undefined && comment.comment !== ""))
}


export const getLikesCommentsByUser = (id:string) => {
    // return new Promise<CommentDatanew[]>((resolve, reject) => {
    //     apiClient.get<CommentDatanew[]>("comments/get_likes").then((res) => {
    //             const comments : CommentDatanew[] = res.data;
    //             resolve(comments);
    //     }).catch((err) => {
    //         console.log("error in getting all comments: ", err);
    //         reject(err);
    //     })
    // })
    return getAllComments().then((comments) => comments?.filter((comment) => comment.user_id == id && comment.like !== undefined && comment.like !== false))
}



export default { getAllComments, getComment, createComment, updateComment, deleteComment, getPictureComments, getMessageComments, getLikesComments}