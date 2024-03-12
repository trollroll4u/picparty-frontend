import { Routes, Route, Navigate } from 'react-router-dom';
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import SearchScreen from "../Pages/SearchScreen";
import EventScreen from "../Pages/EventScreen";
import ProfileScreen from "../Pages/ProfileScreen";
import CreateScreen from "../Pages/CreateScreen";
import { useAuth0 } from '@auth0/auth0-react';
import EditEventScreen from "../Pages/EditEventScreen";
import EditUserScreen from '../Pages/EditUserScreen';
// import PhotoScreen from "../Pages/PhotoScreen";

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" replace={true} state={{ from: window.location.pathname }} />
  );
};

const RouterConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeScreen />} />
        <Route path="search" element={<ProtectedRoute element={<SearchScreen />} />} />
        <Route path="event/:eventId" element={<ProtectedRoute element={<EventScreen />} />} />
        <Route path="profile" element={<ProtectedRoute element={<ProfileScreen />} />} />
        <Route path="create" element={<ProtectedRoute element={<CreateScreen />} />} />
        <Route path="/editEvent/:eventId" element={<ProtectedRoute element={<EditEventScreen />} />} />
        <Route path="/editUser/:userId" element={<ProtectedRoute element={<EditUserScreen />} />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;



