import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import SearchScreen from "../Pages/SearchScreen";
import EventScreen from "../Pages/EventScreen";
// import PhotoScreen from "../Pages/PhotoScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeScreen /> },
      { path: "/search", element: <SearchScreen /> },
      // { path: "/event/:id", element: <EventScreen user /> },
      // { path: "/picture", element: <PhotoScreen />,  },
    ],
  },
]);
