import EventCard from "./EventCard";
import { EventData } from "../DataStructure.ts";

interface EventsScreenProps {
  events: EventData[] | undefined ;
}

function EventsScreen({ events }: EventsScreenProps) {


  return (
    <>
      <div className="container-fluid text-center" key="eventsContainer" >
        <div className="row row-cols-2 row-cols-lg-4 g-lg-3" key="eventsRow">
          {events && events.map((event, index) => {
            return (
              <div className="col" key={"col-" + index}>
                <EventCard event={event}  />
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
}

export default EventsScreen;
