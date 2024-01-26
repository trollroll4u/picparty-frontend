import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyNavBar from "../Components/Navbar.tsx";
import CardScreen from "../Components/CardsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";

export interface IAppProps {}

function HomeScreen(props: IAppProps) {
  return (
    <>
      <Container style={{ backgroundColor: "black", maxWidth: "100%" }}>
        <Row className="justify-content-md-center">
          <Carusale></Carusale>
        </Row>
        <CardScreen></CardScreen>
      </Container>
    </>
  );
}

export default HomeScreen;
