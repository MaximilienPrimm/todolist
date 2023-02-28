import * as React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";

// Components
import Signup from "./components/signup";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Hola</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Signup</Link> */}
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
