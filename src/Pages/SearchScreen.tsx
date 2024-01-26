import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyNavBar from "../Components/Navbar.tsx";
import CardScreen from "../Components/CardsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";

export interface IAppProps {}

function SearchScreen(props: IAppProps) {
  return (
    <>
      <Container style={{ backgroundColor: "black", maxWidth: "100%" }}>
        <h1>hello</h1>
      </Container>
    </>
  );
}

export default SearchScreen;
