import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavBar from "./Navbar.tsx";
import EventCard from "./MainEventCard.tsx";
import Carusale from "./carouselImages.tsx";
import { CardGroup } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container fluid style={{ backgroundColor: "black" }}>
        <Row>
          <MyNavBar></MyNavBar>
        </Row>
        <Row>
          <Carusale></Carusale>
        </Row>
        <Row xs={"auto"} md={"auto"} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <EventCard />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <h1>PartyPic</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
