export interface EventData {
    id: string;
    event_pic_path?: string; //Maybe should be PictureData
    title: string;
    date: Date;
    owner_id: string;
    location: string;
    description?: string;
    pictures?: CommentDatanew[];
    comments: CommentDatanew[];
    likes: CommentDatanew[];
  }
  
  export interface CommentDatanew {
    id: string;
    event_id: string; 
    user_id: string;
    picture_path?: string;
    comment?: string;
    like?: boolean;
  }

  export interface UserData {
    id: string;
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
  //   event_id: string;
  //   user_id: string;
  // }

  
  // export interface PictureData {
  //   id: number;
  //   event_id: string; 
  //   user_id: string;
  //   path: string;
  // }
  
  // export interface CommentData {
  //   id?: number;
  //   user_id?: number;
  //   message?: string;
  //   event_id?: number;
  //   // picture?: PictureData;
  // }