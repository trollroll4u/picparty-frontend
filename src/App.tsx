import { useState } from "react";
import MyNavbar from "./Components/Navbar";
import { Outlet } from "react-router";

// import "./App.css"; // Import your CSS file here

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar></MyNavbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
