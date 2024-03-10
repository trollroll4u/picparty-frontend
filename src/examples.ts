import { CommentDatanew, EventData, UserData } from "./DataStructure.ts";


export const picturesExamples: CommentDatanew[] = [
    {
      pic_file: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      _id: "1",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    },
    {
      pic_file: "https://picsum.photos/300",
      _id: "2",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    },
    {
      pic_file: "https://picsum.photos/900",
      _id: "3",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    },
    {
      pic_file: "https://picsum.photos/900",
      _id: "4",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    },
    {
      pic_file: "https://picsum.photos/900",
      _id: "5",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
  
    },
    {
      pic_file: "https://picsum.photos/900",
      _id: "6",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    },
    {
      pic_file: "https://picsum.photos/900",
      _id: "7",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    },
    {
      pic_file: "https://picsum.photos/900",
      _id: "8",
      event_id: "1",
      user_id: "1",
      comment:"",
      like: false
    }
  ]

  export const commentsExamples : CommentDatanew[] = [
    {
      _id: "1",
      comment: " cool cool cool cool cool cool cool cool cool cool cool cool cool cool cool cool ",
      user_id: "1",
      event_id: "1",
    },
    {
      _id: "2",
      comment: "kimg of the party",
      user_id: "2",
      event_id: "1",
    },
    {
      _id: "3",
      comment: "shilsulim",
      user_id: "3",
      event_id: "1",
    }
  ]

  export const likesExamples : CommentDatanew[] = [
    {
      _id: "1",
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
      user_id: "1",
      event_pic_file: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      title: "yosi party",
      date: new Date("2019-01-16"),
      location: "tel aviv",
      description: "this is a description",
      _id: "1",
    },
    {
      _id: "2",
      comments:[],
      likes: [],
      description: "this is a description",
      pictures: [],
      event_pic_file: "https://picsum.photos/300",
      title: "yuval party",
      date: new Date(2019, 5, 22),
      user_id: "2",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      _id: "3",
      comments:[],
      likes: [],
      pictures: [],
      event_pic_file: "https://picsum.photos/400",
      title: "dor party",
      date: new Date(),
      user_id: "3",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      _id: "4",
      comments:[],
      likes: [],
      pictures: [],
      event_pic_file: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      user_id: "3",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      _id: "5",
      comments:[],
      likes: [],
      pictures: [],
      event_pic_file: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      user_id: "1",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      _id: "6",
      pictures: [],
      comments:[],
      likes: [],
      event_pic_file: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      user_id: "2",
      location: "tel aviv",
    },
  ];

  export const userExamples: UserData[] = [
    {
      _id: "1",
      name: "ohad",
      password: "1234",
      email: "ohad@gmail.com",
      profile_pic_file: "https://picsum.photos/200",
      events: eventsExamples, 
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: likesExamples,
    },
    {
      _id: "2",
      name: "yuval",
      password: "1234",
      email: "aaaa@gmail.com",
      profile_pic_file: "https://picsum.photos/200",
      events:[],
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: likesExamples,
      
    },
    {
      _id: "3",
      name: "dor",
      password: "1234",
      email: "bbbbb@gmail.com",
      profile_pic_file: "https://picsum.photos/200",
      events:[],
      pictures: picturesExamples,
      comments: commentsExamples,
      likes: [],
    }
]