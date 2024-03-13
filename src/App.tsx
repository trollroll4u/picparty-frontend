import MyNavbar from "./Components/Navbar";
import { Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "./app.css"; // Import your CSS file here


function App() {
  const { isLoading, error } = useAuth0();

  return (
    <>
      <div className="app-container">
        {error && <p>Auth failed</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <><MyNavbar></MyNavbar><Outlet></Outlet></>
        )}
      </div>
    </>
  );
}

export default App;
