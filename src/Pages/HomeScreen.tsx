import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData } from "../Components/EventCard.tsx";

export interface IAppProps {}
const images: string[] = ["https://picsum.photos/200","https://picsum.photos/300","https://picsum.photos/400","https://picsum.photos/200"]
const events: EventData[] = [
  {
    image: "https://picsum.photos/200",
    title: "yosi party",
    date: new Date("2019-01-16"),
    owner: "ohad",
    location: "tel aviv",
  },
  {
    image: "https://picsum.photos/300",
    title: "yuval party",
    date: new Date(2019, 5, 22),
    owner: "ohad",
    location: "tel aviv",
  },
  {
    image: "https://picsum.photos/400",
    title: "dor party",
    date: new Date(),
    owner: "ohad",
    location: "tel aviv",
  },
  {
    image: "https://picsum.photos/500",
    title: "event4",
    date: new Date(),
    owner: "ohad",
    location: "tel aviv",
  },
  {
    image: "https://picsum.photos/500",
    title: "event4",
    date: new Date(),
    owner: "ohad",
    location: "tel aviv",
  },{
    image: "https://picsum.photos/500",
    title: "event4",
    date: new Date(),
    owner: "ohad",
    location: "tel aviv",
  },{
    image: "https://picsum.photos/500",
    title: "event4",
    date: new Date(),
    owner: "ohad",
    location: "tel aviv",
  },
];

function HomeScreen(props: IAppProps) {
  return (
    <>
    <div className="container-fluid" style={{ backgroundColor: "black"}}>
      <Carusale images={images}></Carusale>
      <br></br>
      <EventsScreen events={events}></EventsScreen>
    </div>
    </>
  );
}

export default HomeScreen;
