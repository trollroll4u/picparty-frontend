import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyNavBar from "./Components/Navbar.tsx";
import CardScreen from "./Components/CardsScreen.tsx";
import Carusale from "./Components/carouselImages.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container style={{ backgroundColor: "black", maxWidth: "100%" }}>
        <Row >
          <MyNavBar></MyNavBar>
        </Row>
        <Row className="justify-content-md-center" >
          <Carusale></Carusale>
        </Row>
        <CardScreen></CardScreen>
      </Container>
    </>
  );
}

export default App;
