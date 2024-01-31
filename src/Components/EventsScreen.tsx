import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
 import { EventData, UserData } from "../DataStructure.ts";

interface EventsScreenProps {
  events: EventData[] | undefined;
}

function EventsScreen({ events }: EventsScreenProps) {


  return (
    <>
      <div className="container-fluid text-center" id="eventsContainer">
        <div className="row row-cols-2 row-cols-lg-4 g-lg-3" id="eventsRow">
          {events && events.map((event, index) => {
            return (
              <div className="col" id={"col-" + index}>
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
