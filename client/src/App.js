import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import Nav from "./components/Nav/Nav";
import RoomDetails from "./pages/room_details";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Router>
        <Nav />

        <div className="flex-1 flex flex-col overflow-hidden mx-auto px-6 py-8">
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
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
