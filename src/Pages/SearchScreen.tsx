import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { EventData } from "../Components/EventCard.tsx";

export interface IAppProps {}
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
  },
];

function SearchScreen(props: IAppProps) {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <br></br>
        <br></br>
        <input
          className="form-control form-control-lg"
          style={{ width: "50vw", margin: "auto" }}
          type="text"
          placeholder="Enter event name"
        />
        <br></br>
        <EventsScreen events={events}></EventsScreen>
      </div>
    </>
  );
}

export default SearchScreen;
