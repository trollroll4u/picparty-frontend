import { useState } from "react";
import MyNavbar from "./Components/Navbar";
import { Outlet } from "react-router";
import store from "./app/store.ts";
import { Provider } from "react-redux";
import "./App.css"; // Import your CSS file here

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Provider store={store}>
          <MyNavbar></MyNavbar>
          <Outlet></Outlet>
        </Provider>
      </div>
    </>
  );
}

export default App;
