export interface EventData {
    id: number;
    event_pic_path?: string; //Maybe should be PictureData
    title: string;
    date: Date;
    owner_id: number;
    location: string;
    description?: string;
    pictures?: CommentDatanew[];
    comments: CommentDatanew[];
    likes: CommentDatanew[];
  }
  
  export interface CommentDatanew {
    id: number;
    event_id: number; 
    user_id: number;
    picture_path?: string;
    comment?: string;
    like?: boolean;
  }
  
  export interface UserData {
    id: number;
    name: string;
    password: string;
    email: string;
    profile_pic_path: string; //Maybe should be PictureData 
    events: EventData[];
    pictures: CommentDatanew[];
    comments: CommentDatanew[];
    likes: CommentDatanew[];
  }
  
  // export interface LikeData {
  //   id: number;
  //   like: boolean;
  //   event_id: number;
  //   user_id: number;
  // }

  
  // export interface PictureData {
  //   id: number;
  //   event_id: number; 
  //   user_id: number;
  //   path: string;
  // }
  
  // export interface CommentData {
  //   id?: number;
  //   user_id?: number;
  //   message?: string;
  //   event_id?: number;
  //   // picture?: PictureData;
  // }