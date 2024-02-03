import { CommentDatanew, EventData, UserData } from "./DataStructure.ts";
import img1 from "./src/assets/img1.jpg";


export const picturesExamples: CommentDatanew[] = [
    {
      picture_path: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      id: "1",
      event_id: "1",
      user_id: "1",
    },
    {
      picture_path: "https://picsum.photos/300",
      id: "2",
      event_id: "1",
      user_id: "1",
    },
    {
      picture_path: "https://picsum.photos/900",
      id: "3",
      event_id: "1",
      user_id: "1",
    },
    {
      picture_path: "https://picsum.photos/900",
      id: "4",
      event_id: "1",
      user_id: "1",
  
    },
    {
      picture_path: "https://picsum.photos/900",
      id: "5",
      event_id: "1",
      user_id: "1",
  
    },
    {
      picture_path: "https://picsum.photos/900",
      id: "6",
      event_id: "1",
      user_id: "1",
    },
    {
      picture_path: "https://picsum.photos/900",
      id: "7",
      event_id: "1",
      user_id: "1",
    },
    {
      picture_path: "https://picsum.photos/900",
      id: "8",
      event_id: "1",
      user_id: "1",
    }
  ]

  export const commentsExamples : CommentDatanew[] = [
    {
      id: "1",
      comment: " cool cool cool cool cool cool cool cool cool cool cool cool cool cool cool cool ",
      user_id: "1",
      event_id: "1",
    },
    {
      id: "2",
      comment: "kimg of the party",
      user_id: "2",
      event_id: "1",
    },
    {
      id: "3",
      comment: "shilsulim",
      user_id: "3",
      event_id: "1",
    }
  ]

  export const likesExamples : CommentDatanew[] = [
    {
      id: "1",
      like: true,
      event_id: "1",
      user_id: "1",
    }
  ]


  export const eventsExamples: EventData[] = [
    {
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: likesExamples,
      owner_id: "1",
      event_pic_path: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      title: "yosi party",
      date: new Date("2019-01-16"),
      location: "tel aviv",
      description: "this is a description",
      id: "1",
    },
    {
      id: "2",
      comments:[],
      likes: [],
      description: "this is a description",
      pictures: [],
      event_pic_path: "https://picsum.photos/300",
      title: "yuval party",
      date: new Date(2019, 5, 22),
      owner_id: "2",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: "3",
      comments:[],
      likes: [],
      pictures: [],
      event_pic_path: "https://picsum.photos/400",
      title: "dor party",
      date: new Date(),
      owner_id: "3",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: "4",
      comments:[],
      likes: [],
      pictures: [],
      event_pic_path: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner_id: "3",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: "5",
      comments:[],
      likes: [],
      pictures: [],
      event_pic_path: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner_id: "1",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: "6",
      pictures: [],
      comments:[],
      likes: [],
      event_pic_path: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner_id: "2",
      location: "tel aviv",
    },
  ];

  export const userExamples: UserData[] = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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