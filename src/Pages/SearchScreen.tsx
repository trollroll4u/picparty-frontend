import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { EventData } from "../DataStructure.ts";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { getAllEvents } from "../Services/event-service.ts";
import { eventsExamples,picturesExamples } from "../examples.ts";

export interface IAppProps {}

function SearchScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>(eventsExamples);
  const [searchResult, setSearchResult] = useState<EventData[]>(events);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // get all events from the server
  React.useEffect(() => {
    setEvents(eventsExamples);
    // setLoading(true);
    // const { request , abort }  =  getAllEvents()
    // request.then((res: { data: React.SetStateAction<EventData[]>; }) => {
    //     // setEvents(res.data);
    //     setLoading(false);
    //   })
    //   request.catch((err: any) => {
    //     if (err instanceof CanceledError) return;
    //     console.log(err);
    //     setLoading(false);
    //   });

  },[]);

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
        <EventsScreen events={searchResult} user={undefined}></EventsScreen>
      </div>
    </>
  );
}

export default SearchScreen;
