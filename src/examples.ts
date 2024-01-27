import { EventData, PictureData } from "./DataStructure.ts";
import img1 from "./src/assets/img1.jpg";

export const picturesExamples: PictureData[] = [
    {
      path: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      comments: [
        {
          id: 1,
          message: "this is a comment",
          user: "ohad",
          picture_id: 1,
        }
      ],
      description: "this is a description",
      id: 1,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/300",
      comments: [],
      description: "this is a description",
      id: 2,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/900",
      comments: [],
      description: "this is a description",
      id: 3,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/900",
      comments: [],
      description: "this is a description",
      id: 4,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/900",
      comments: [],
      description: "this is a description",
      id: 5,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/900",
      comments: [],
      description: "this is a description",
      id: 6,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/900",
      comments: [],
      description: "this is a description",
      id: 7,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
  
    },
    {
      path: "https://picsum.photos/900",
      comments: [],
      description: "this is a description",
      id: 8,
      event_id: 1,
      event_name: "yosi party",
      likes: 4,
      user_id: 1,
      user_name: "ohad",
    }
  ]


  export const eventsExamples: EventData[] = [
    {
      pictures: picturesExamples,
      event_pic: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      title: "yosi party",
      date: new Date("2019-01-16"),
      owner: "ohad",
      location: "tel aviv",
      description: "this is a description",
      id: 1,
  
    },
    {
      description: "this is a description",
      id: 2,
      pictures: [],
      event_pic: "https://picsum.photos/300",
      title: "yuval party",
      date: new Date(2019, 5, 22),
      owner: "ohad",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 3,
      pictures: [],
      event_pic: "https://picsum.photos/400",
      title: "dor party",
      date: new Date(),
      owner: "ohad",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 4,
      pictures: [],
      event_pic: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner: "ohad",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 4,
      pictures: [],
      event_pic: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner: "ohad",
      location: "tel aviv",
    },
    {
      description: "this is a description",
      id: 4,
      pictures: [],
      event_pic: "https://picsum.photos/500",
      title: "event4",
      date: new Date(),
      owner: "ohad",
      location: "tel aviv",
    },
  ];