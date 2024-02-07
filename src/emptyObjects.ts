import { EventData, CommentDatanew, UserData } from './DataStructure';


export const emptyEvent: EventData = {
    _id: "",
    title: "",
    date: new Date(),
    user_id: "",
    location: "",
    comments: [],
    likes: [],
    pictures: [],
    description: "",
    event_pic_path: "",
}

export const emptyComment: CommentDatanew = {
    event_id: "",
    user_id: "",
    comment: "",
    like: false,
    _id: "",
    picture_path   : "",
}

export const emptyUser: UserData = {
    _id: "",
    name: "",
    password: "",
    email: "",
    profile_pic_path: "",
    events: [],
    pictures: [],
    comments: [],
    likes: [],
    
}