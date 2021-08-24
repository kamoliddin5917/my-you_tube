import "./App.scss";
import { Switch, Route } from "react-router";

// Components
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Channel from "./pages/Channel/Channel";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/channel/:userId?" component={Channel} />
        <Route path="/video" component={VideoPlayer} />
        <Route path="/:error" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
