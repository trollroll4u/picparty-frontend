import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import SearchScreen from "../Pages/SearchScreen";
import EventScreen from "../Pages/EventScreen";
import ProfileScreen from "../Pages/ProfileScreen";
import CreateScreen from "../Pages/CreateScreen";
import Ohad from "../Pages/Ohad.tsx";
// import PhotoScreen from "../Pages/PhotoScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeScreen /> },
      { path: "/search", element: <SearchScreen /> },
      { path: "/event/:eventId", element: <EventScreen /> },
      { path: "/profile", element: <ProfileScreen /> },
      { path: "/create", element: <CreateScreen /> },
      // { path: "/picture", element: <PhotoScreen />,  },
    ],
  },
]);
