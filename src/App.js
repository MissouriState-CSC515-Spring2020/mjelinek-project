import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/gallery";
import Recents from "./components/recents";
import Details from "./components/details";
import {Nav} from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <Nav
        className="navbar navbar-expand-lg navbar-dark navbar-full"
        style={{ backgroundColor: "#d3d3d3" }}
      >
        <Nav.Link href="/" style={{ color: "black", fontWeight: "bold" }}>
          Last Week Tonight
        </Nav.Link>

        <Nav.Link
          href="/recents"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Recent Videos
        </Nav.Link>

		<Nav.Link
          href="/details"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Video Details
        </Nav.Link>


      </Nav>

      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/recents">
          <Recents />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}