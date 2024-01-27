import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { EventData } from "../Components/EventCard.tsx";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export interface IAppProps {}

const eventsExample: EventData[] = [
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
    title: "dor partyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ohad",
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
  const [events, setEvents] = useState<EventData[]>(eventsExample);
  const [searchResult, setSearchResult] = useState<EventData[]>(events);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // change the events array depends on the search value
  React.useEffect(() => {
    let updateEvents: EventData[] = [];
    updateEvents = events.filter((event) => {
      if (event.title.includes(searchValue) || searchValue.length === 0) {
        return event;
      }
    });
    setSearchResult(updateEvents);
  }, [searchValue, events]);


  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <br></br>
        <br></br>
        <input
          id="search-input"
          className="form-control form-control-lg"
          style={{ width: "50vw", margin: "auto" }}
          type="text"
          placeholder="Search event name..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <br></br>
        <EventsScreen events={searchResult}></EventsScreen>
      </div>
    </>
  );
}

export default SearchScreen;
