import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rooms from "./pages/rooms";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
      </Switch>
    </Router>
  );
};

export default App;
