export interface EventData {
    id: number;
    event_pic?: string;
    title: string;
    date: Date;
    owner: string;
    location: string;
    description?: string;
    pictures?: PictureData[];
  }
  
  export interface PictureData {
    id: number;
    event_id: number;
    event_name: string;
    user_id: number;
    user_name: string;
    comments: CommentData[];
    likes: number;
    path: string;
    description?: string;
  }
  
  export interface CommentData {
    id?: number;
    user?: string;
    message?: string;
    picture_id?: number;
  }

  export interface UserData {
    id?: number;
    name?: string;
    password?: string;
    email?: string;
    profile_pic_path?: string;
    events?: EventData[];
    pictures?: PictureData[];
    comments?: CommentData[];
  }