export interface EventData {
    _id?: string;
    event_pic_file: string; //Maybe should be PictureData
    title: string;
    date: Date;
    user_id: string;
    location: string;
    description?: string;
    pictures: CommentDatanew[];
    comments: CommentDatanew[];
    likes: CommentDatanew[];
  }
  
  export interface CommentDatanew {
    _id?: string;
    event_id: string; 
    user_id: string;
    pic_file?: string ;
    comment?: string;
    like?: boolean;
  }

  export interface UserData {
    [x: string]: any;
    _id?: string;
    name: string;
    password: string;
    email: string;
    profile_pic_file: string; //Maybe should be PictureData 
    events: EventData[];
    pictures: CommentDatanew[];
    comments: CommentDatanew[];
    likes: CommentDatanew[];
  }
  