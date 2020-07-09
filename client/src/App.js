import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Shows from "./components/Shows/Shows";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
