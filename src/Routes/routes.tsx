import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import SearchScreen from "../Pages/SearchScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeScreen /> },
      { path: "/search", element: <SearchScreen /> },
    ],
  },
]);
