import { Routes, Route } from 'react-router-dom';
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import SearchScreen from "../Pages/SearchScreen";
import EventScreen from "../Pages/EventScreen";
import ProfileScreen from "../Pages/ProfileScreen";
import CreateScreen from "../Pages/CreateScreen";
import Ohad from "../Pages/Ohad.tsx";
// import PhotoScreen from "../Pages/PhotoScreen";

const RouterConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="event/:eventId" element={<EventScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="create" element={<CreateScreen />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
