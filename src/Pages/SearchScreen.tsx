import * as React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import EventsScreen from "../Components/EventsScreen.tsx";

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
      <Container
        style={{
          backgroundColor: "black",
          maxWidth: "100%",
          height: "100vh",
        }}
      >
        <br></br>
        <Row>
          <Form style={{ width: "50vw", margin: "auto" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control size="lg" type="text" placeholder="event name" />
            </Form.Group>
          </Form>
        </Row>
        <EventsScreen events={events}></EventsScreen>
        <Row>
          <h1>search screen</h1>
        </Row>
      </Container>
    </>
  );
}

export default SearchScreen;
