import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { EventData } from "../DataStructure.ts";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CanceledError, getAllEvents } from "../Services/event-service.ts";
import { eventsExamples, picturesExamples } from "../examples.ts";
import { Row } from "react-bootstrap";

export interface IAppProps {}

function SearchScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>();
  const [searchResult, setSearchResult] = useState<EventData[]>();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // change the events array depends on the search value
  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents();
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching events: " + error);
        setLoading(false);
      }
    };

    if (events === undefined) {
      setLoading(true);
      fetchEvents();
    }

    let updateEvents: EventData[] | undefined = [];
    updateEvents = events?.filter((event) => {
      if (
        event.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue.length === 0
      ) {
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
          key="search-input"
          className="form-control form-control-lg"
          style={{ width: "50vw", margin: "auto" }}
          type="text"
          placeholder="Search event name..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <br></br>
        {loading && (
          <div className="row" style={{ backgroundColor: "black" }}>
            <div
              className="spinner-border text-primary"
              style={{ position: "absolute" }}
            ></div>{" "}
          </div>
        )}
        <EventsScreen events={searchResult}></EventsScreen>
      </div>
    </>
  );
}

export default SearchScreen;
