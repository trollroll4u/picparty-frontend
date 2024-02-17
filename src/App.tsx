import { useState } from "react";
import MyNavbar from "./Components/Navbar";
import { Outlet } from "react-router";
import "./App.css"; // Import your CSS file here
// import "./App.css"; // Import your CSS file here

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <MyNavbar></MyNavbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
