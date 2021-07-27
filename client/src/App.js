import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rooms from "./pages/Rooms/rooms";
import Nav from "./components/Nav/Nav";
import RoomDetails from "./pages/Rooms/room_details";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faDoorOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "primereact/resources/themes/saga-purple/theme.css";
import "primereact/resources/primereact.css";
import Students from "./pages/Students/students";

const routes = [
  {
    url: "/rooms",
    icon: faDoorOpen,
  },
  {
    url: "/students",
    icon: faGraduationCap,
  },
];

const App = () => {
  return (
    <div className="flex h-screen font-body">
      <Router>
        <Nav routes={routes} />

        <div className="flex-1 flex flex-col overflow-hidden mx-auto">
          <Switch>
            <Route path="/" component={Home} exact />

            <Route
              path="/rooms"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Rooms} exact />
                  <Route path={`${url}/:id`} component={RoomDetails} />
                </>
              )}
            />

            <Route
              path="/students"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Students} exact />
                </>
              )}
            />
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
