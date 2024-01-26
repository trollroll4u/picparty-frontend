import { useState } from "react";
import MyNavbar from "./Components/Navbar";
import { Outlet } from "react-router";

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
