import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyNavBar from "../Components/Navbar.tsx";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
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
];

function HomeScreen(props: IAppProps) {
  return (
    <>
      <Container style={{ backgroundColor: "black", maxWidth: "100%" }}>
        <Row className="justify-content-md-center">
          <Carusale></Carusale>
        </Row>
        <EventsScreen events={events}></EventsScreen>
      </Container>
    </>
  );
}

export default HomeScreen;
