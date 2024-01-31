import { CommentData, EventData, LikeData, PictureData, UserData } from "./DataStructure.ts";
import img1 from "./src/assets/img1.jpg";


export const picturesExamples: PictureData[] = [
    {
      path: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      description: "this is a descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnna f",
      id: 1,
      event_id: 1,
      user_id: 1,
    },
    {
      path: "https://picsum.photos/300",
      description: "this is a description",
      id: 2,
      event_id: 1,
      user_id: 1,
    },
    {
      path: "https://picsum.photos/900",
      description: "this is a description",
      id: 3,
      event_id: 1,
      user_id: 1,
    },
    {
      path: "https://picsum.photos/900",
      description: "this is a description",
      id: 4,
      event_id: 1,
      user_id: 1,
  
    },
    {
      path: "https://picsum.photos/900",
      description: "this is a description",
      id: 5,
      event_id: 1,
      user_id: 1,
  
    },
    {
      path: "https://picsum.photos/900",
      description: "this is a description",
      id: 6,
      event_id: 1,
      user_id: 1,
    },
    {
      path: "https://picsum.photos/900",
      description: "this is a description",
      id: 7,
      event_id: 1,
      user_id: 1,
    },
    {
      path: "https://picsum.photos/900",
      description: "this is a description",
      id: 8,
      event_id: 1,
      user_id: 1,
    }
  ]

  export const commentsExamples : CommentData[] = [
    {
      id: 1,
      message: " cool party",
      user_id: 1,
    },
    {
      id: 2,
      message: "kimg of the party",
      user_id: 2,
    },
    {
      id: 3,
      message: "shilsulim",
      user_id: 3,
    }
  ]

  export const likesExamples : LikeData[] = [
    {
      id: 1,
      like: true,
      event_id: 1,
      user_id: 1,
    }
  ]


  export const eventsExamples: EventData[] = [
    {
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: likesExamples,
      owner_id: 1,
      event_pic_path: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      title: "yosi party",
      date: new Date("2019-01-16"),
      location: "tel aviv",
      description: "this is a description",
      id: 1,
    },
    {
      id: 2,
      comments:[],
      likes: [],
      description: "this is a description",
      pictures: [],
      event_pic_path: "https://picsum.photos/300",
      title: "yuval party",
      date: new Date(2019, 5, 22),
      owner_id: 2,
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 3,
      comments:[],
      likes: [],
      pictures: [],
      event_pic_path: "https://picsum.photos/400",
      title: "dor party",
      date: new Date(),
      owner_id: 3,
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 4,
      comments:[],
      likes: [],
      pictures: [],
      event_pic_path: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner_id: 3,
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 5,
      comments:[],
      likes: [],
      pictures: [],
      event_pic_path: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner_id: 1,
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 6,
      pictures: [],
      comments:[],
      likes: [],
      event_pic_path: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner_id: 2,
      location: "tel aviv",
    },
  ];

  export const userExamples: UserData[] = [
    {
      id: 1,
      name: "ohad",
      password: "1234",
      email: "ohad@gmail.com",
      profile_pic_path: "https://picsum.photos/200",
      events: eventsExamples, 
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: likesExamples,
    },
    {
      id: 2,
      name: "yuval",
      password: "1234",
      email: "aaaa@gmail.com",
      profile_pic_path: "https://picsum.photos/200",
      events:[],
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: likesExamples,
      
    },
    {
      id: 3,
      name: "dor",
      password: "1234",
      email: "bbbbb@gmail.com",
      profile_pic_path: "https://picsum.photos/200",
      events:[],
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: [],
    }
]